import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNotEmptyObject } from "class-validator";

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
    @IsNotEmpty()
    area_name: string;
  
    @ApiProperty({
      description: "Add capacity and rateperhour",
      example: {'capacity': 1, 'rateperhour': 1}
    })
    @IsNotEmpty()
    @IsNotEmptyObject()
    car: ParkinglotsCar;
  
    @ApiProperty({
      description: "Add capacity and rateperhour",
      example: {'capacity': 1, 'rateperhour': 1}
    })
    @IsNotEmpty()
    @IsNotEmptyObject()
    hatchback: ParkinglotsHatchback;

    @ApiProperty({
      description: "Add capacity and rateperhour",
      example: {'capacity': 1, 'rateperhour': 1}
    })
    @IsNotEmpty()
    @IsNotEmptyObject()
    suv_car: ParkinglotsSuvCar;

    @ApiProperty({
      description: "Add capacity and rateperhour",
      example: {'capacity': 1, 'rateperhour': 1}
    })
    @IsNotEmpty()
    @IsNotEmptyObject()
    two_wheeler: ParkinglotsTwoWheeler;
}