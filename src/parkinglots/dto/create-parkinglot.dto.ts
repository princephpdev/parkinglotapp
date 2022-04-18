import { ApiProperty } from "@nestjs/swagger";

type ParkinglotsCar = {
    capacity  :  number
    rateperhour: number
  }
  
  type ParkinglotsHatchback = {
    capacity  :  number
    rateperhour: number
  }
  
  type ParkinglotsSuvCar = {
    capacity  :  number
    rateperhour: number
  }
  
  type ParkinglotsTwoWheeler = {
    capacity  :  number
    rateperhour: number
  }

export class CreateParkinglotDto {
  
    @ApiProperty()
    area_name: string;
  
    @ApiProperty()
    car: ParkinglotsCar;
  
    @ApiProperty()
    hatchback: ParkinglotsHatchback;

    @ApiProperty()
    suv_car: ParkinglotsSuvCar;

    @ApiProperty()
    two_wheeler: ParkinglotsTwoWheeler;
}