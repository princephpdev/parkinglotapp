import { ApiProperty } from "@nestjs/swagger";

export enum vehicleType {
    car = 'car',
    hatchback = 'hatchback',
    suv_car = 'suv_car',
    two_wheeler = 'two_wheeler'
  }

export class CreateVehicleDto {
    
    @ApiProperty()
    area_name: string;

    @ApiProperty({ enum: ['car', 'hatchback', 'suv_car', 'two_wheeler']})
    vehicle_type: vehicleType;

    @ApiProperty()
    vehicle_number: string;
}
