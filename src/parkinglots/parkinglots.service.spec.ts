import { Test, TestingModule } from '@nestjs/testing';
import { ParkinglotsService } from './parkinglots.service';

describe('ParkinglotsService', () => {
  let service: ParkinglotsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParkinglotsService],
    }).compile();

    service = module.get<ParkinglotsService>(ParkinglotsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
