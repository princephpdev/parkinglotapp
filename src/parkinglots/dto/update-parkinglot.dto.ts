import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateParkinglotDto } from './create-parkinglot.dto';

export class UpdateParkinglotDto extends PartialType(CreateParkinglotDto) {
    @ApiProperty()
    id: string;
}