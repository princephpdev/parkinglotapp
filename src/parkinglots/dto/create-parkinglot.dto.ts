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
  
    @ApiProperty({
      description: "Add capacity and rateperhour",
      example: {'capacity': 1, 'rateperhour': 1}
    })
    car: ParkinglotsCar;
  
    @ApiProperty({
      description: "Add capacity and rateperhour",
      example: {'capacity': 1, 'rateperhour': 1}
    })
    hatchback: ParkinglotsHatchback;

    @ApiProperty({
      description: "Add capacity and rateperhour",
      example: {'capacity': 1, 'rateperhour': 1}
    })
    suv_car: ParkinglotsSuvCar;

    @ApiProperty({
      description: "Add capacity and rateperhour",
      example: {'capacity': 1, 'rateperhour': 1}
    })
    two_wheeler: ParkinglotsTwoWheeler;
}