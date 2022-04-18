import { Module } from '@nestjs/common';
import { ParkinglotsService } from './parkinglots.service';
import { ParkinglotsController } from './parkinglots.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ParkinglotsController],
  providers: [ParkinglotsService, PrismaService]
})
export class ParkinglotsModule {}
