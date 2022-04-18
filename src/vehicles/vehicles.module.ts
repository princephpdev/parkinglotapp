import { Module } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehiclesController } from './vehicles.controller';
import { PrismaService } from 'src/prisma.service';
import { ParkinglotsService } from 'src/parkinglots/parkinglots.service';

@Module({
  controllers: [VehiclesController],
  providers: [VehiclesService,PrismaService, ParkinglotsService]
})
export class VehiclesModule {}
