import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException } from '@nestjs/common';
import { VehiclesService, vehicleType } from './vehicles.service';
import { ApiForbiddenResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiQuery, ApiServiceUnavailableResponse, ApiTags } from '@nestjs/swagger';
import { CreateVehicleDto } from './dto/create-vehicle.dto';

@ApiTags('Vehicles')
@Controller('vehicles')
export class VehiclesController {
  constructor(
    private readonly vehiclesService: VehiclesService
    ) {}

  @Post('park')
  @ApiQuery({ name: 'vehicle_type', enum: vehicleType })
  @ApiNotFoundResponse({'description':'Invalid parking area name'})
  @ApiForbiddenResponse({'description':'Limit exceed for parking'})
  @ApiForbiddenResponse({'description':'Vehicle Already Parked'})
  @ApiInternalServerErrorResponse({'description': 'Something went wrong'})
  async park(@Body() createVehicleDto: CreateVehicleDto) {
    try{
      const response = await this.vehiclesService.park(createVehicleDto);
      return response;
    }catch(e){
      return e;
    }
  }

  @Post('exit/:vehicle_number')
  async exit(@Param('vehicle_number') vehicle_number:string) {
    return await this.vehiclesService.getExit(vehicle_number);
  }

  @Get('details/:vehicle_number')
  async findOne(@Param('vehicle_number') vehicle_number: string) {
    return await this.vehiclesService.findOne(vehicle_number);
  }

}
