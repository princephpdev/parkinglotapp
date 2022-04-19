import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsEnum, IsNotEmpty } from "class-validator";

export enum vehicleType {
    car = 'car',
    hatchback = 'hatchback',
    suv_car = 'suv_car',
    two_wheeler = 'two_wheeler'
  }

export class CreateVehicleDto {
    
    @ApiProperty()
    @IsNotEmpty()
    area_name: string;

    @ApiProperty({ enum: ['car', 'hatchback', 'suv_car', 'two_wheeler']})
    @IsEnum(vehicleType)
    vehicle_type: vehicleType;

    @ApiProperty()
    @IsNotEmpty()
    @IsAlphanumeric()
    vehicle_number: string;
}
