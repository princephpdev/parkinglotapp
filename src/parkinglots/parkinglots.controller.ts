import { Controller, Get, Post, Body, Patch, Param, Delete, Module } from '@nestjs/common';
import { ParkinglotsService } from './parkinglots.service';
import { CreateParkinglotDto } from './dto/create-parkinglot.dto';
import { ApiForbiddenResponse, ApiNotFoundResponse, ApiOperation, ApiResponse, ApiServiceUnavailableResponse, ApiTags } from '@nestjs/swagger';

@Controller('parkinglots')
@ApiTags('ParkingLots')
export class ParkinglotsController {
  constructor(private readonly parkinglotsService: ParkinglotsService) {}

  @Post()
  @ApiOperation({'description': 'Create Parking Lots'})
  @ApiResponse({type:CreateParkinglotDto, status:200})
  async create(@Body() createParkinglotDto: CreateParkinglotDto) {
    return await this.parkinglotsService.create(createParkinglotDto);
  }

  @Get()
  @ApiResponse({type:CreateParkinglotDto, isArray:true, status:200})
  @ApiForbiddenResponse()
  @ApiServiceUnavailableResponse()
  async findAll() {
    return await this.parkinglotsService.findAll({});
  }

  @Get('/findarea/:area_name')
  @ApiResponse({type:CreateParkinglotDto, status:200})
  @ApiNotFoundResponse({'description':'{}'})
  async findByAreaName(@Param('area_name') area_name: string) {
    const response = await this.parkinglotsService.findByAreaName(area_name.toLowerCase());
    if(response){
      return response
    }else{
      return {}
    }
  }

  @Get(':id')
  @ApiResponse({type:CreateParkinglotDto, status:200})
  @ApiNotFoundResponse({'description':'{}'})
  async findOne(@Param('id') id: string) {
    const response = await this.parkinglotsService.findOne(id);
    if(response){
      return response
    }else{
      return {}
    }
  }

}
