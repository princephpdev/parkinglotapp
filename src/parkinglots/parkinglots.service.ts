import { Injectable } from '@nestjs/common';
import { parkinglots, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ParkinglotsService {
  constructor(private prisma: PrismaService) {}

  async findAll(params: {
    skip?: number;
    take?: number;
  }): Promise<parkinglots[]> {
    const { skip, take } = params;
    return await this.prisma.parkinglots.findMany({
      skip,
      take
    });
  }

  async findOne(
    id: string,
  ): Promise<parkinglots | null> {
    return await this.prisma.parkinglots.findUnique({
      where: {
        id
      },
    });
  }

  async create(data: Prisma.parkinglotsCreateInput): Promise<parkinglots> {
    return await this.prisma.parkinglots.create(
      {data}
    );
  }

  async findByAreaName(area_name: string): Promise<parkinglots | null>{
    return await this.prisma.parkinglots.findFirst({
      where:{
        area_name
      }
    })
  }
}
