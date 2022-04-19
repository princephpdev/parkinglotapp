import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreateParkinglotDto } from './create-parkinglot.dto';

export class UpdateParkinglotDto extends PartialType(CreateParkinglotDto) {
    @ApiProperty()
    @IsNotEmpty()
    id: string;
}