import { Test, TestingModule } from '@nestjs/testing';
import { ParkinglotsController } from './parkinglots.controller';
import { ParkinglotsService } from './parkinglots.service';

describe('ParkinglotsController', () => {
  let controller: ParkinglotsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParkinglotsController],
      providers: [ParkinglotsService],
    }).compile();

    controller = module.get<ParkinglotsController>(ParkinglotsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
