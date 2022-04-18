import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParkinglotsModule } from './parkinglots/parkinglots.module';
import { VehiclesModule } from './vehicles/vehicles.module';

@Module({
  imports: [ParkinglotsModule, VehiclesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
