import { HttpException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ParkinglotsService } from 'src/parkinglots/parkinglots.service';
import { PrismaService } from 'src/prisma.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';


export enum vehicleType {
  car = 'car',
  hatchback = 'hatchback',
  suv_car = 'suv_car',
  two_wheeler = 'two_wheeler'
}

interface IparkCountForDate {
  parkinglot_id: string,
  current_date: string,
  vehicle_type: vehicleType
}

@Injectable()
export class VehiclesService {
  constructor(
    private prisma: PrismaService,
    private parkinglotService: ParkinglotsService
    ) {}

  async park(data: CreateVehicleDto) {
    const getParkingLotDetails : Prisma.parkinglotsCreateInput = await this.parkinglotService.findByAreaName(data.area_name.toLowerCase());

    if(!getParkingLotDetails) throw new HttpException({error:'Invalid parking area name'},404)

    const vehicleParkCount = await this.parkCountForDate({parkinglot_id: getParkingLotDetails.id, current_date: new Date().toISOString().split('T')[0], vehicle_type: data.vehicle_type});
    const ifvehiclecanPark = getParkingLotDetails[data.vehicle_type].capacity - vehicleParkCount;
    
    if(ifvehiclecanPark < 1) throw new HttpException({error:'Limit exceed for parking'},403)

    const VehicleAlreadyParked = await this.checkVehicleAlreadyparked(data.vehicle_number)
    if(VehicleAlreadyParked) throw new HttpException({error:'Vehicle Already Parked'},403)

    const ParkvehicleObject : Prisma.parkedvehiclesCreateInput = {
      area_name : getParkingLotDetails.area_name,
      vehicle_number: data.vehicle_number,
      vehicle_type: data.vehicle_type,
      amount_paid: 0,
      exit_time: null,
      parkinglot: {
        connect: {
          id: getParkingLotDetails.id
        }
      },
      duration: 0
   }
    return await this.prisma.parkedvehicles.create({data: ParkvehicleObject})
  }

  async parkCountForDate(data: IparkCountForDate){
    try {
      const today = new Date(data.current_date).toISOString();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() +1);
      const tmrw = tomorrow.toISOString();
      const countV = await this.prisma.parkedvehicles.count({
        where:{
          parkinglot_id: data.parkinglot_id,
          updated_at: {
            gte: today,
            lt: tmrw
          },
          vehicle_type: data.vehicle_type,
          exit_time: null,
        }
      })
      return countV;
    } catch (error) {
      console.log(error)
      throw new HttpException({error:'Something went wrong'},500)
    }
  }

  async getExit(vehicle_number: string) {
    try {
      const findVehicle = await this.checkVehicleAlreadyparked(vehicle_number);
      
      if(!findVehicle) return {error:'No vehicle found at parking'}

      const getParking : Prisma.parkinglotsCreateInput = await this.parkinglotService.findOne(findVehicle.parkinglot_id);
      const rate = getParking[findVehicle.vehicle_type].rateperhour;
      const getTotalhours : any = Math.round(new Date().getHours() - new Date(findVehicle.entry_time).getHours());
      const duration = getTotalhours > 1 ? getTotalhours : 1;
      const total = parseInt(rate) * parseInt(duration)

      return await this.prisma.parkedvehicles.update({
        where:{
          id: findVehicle.id
        },
        data: { exit_time: new Date().toISOString(), duration: duration, amount_paid: total}
      })

    } catch (error) {
      console.log(error)
      throw new HttpException({error:'Something went wrong'},500)
    }
  }

  async findOne(vehicle_number: string) {
    return await this.prisma.parkedvehicles.findMany({
      where:{
        vehicle_number
      }
    })
  }

 async checkVehicleAlreadyparked(vehicle_number: string) {
  return await this.prisma.parkedvehicles.findFirst({
    where:{
      vehicle_number: vehicle_number,
      exit_time: null
    }
  })
 }
}
