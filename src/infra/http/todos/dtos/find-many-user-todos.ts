
import { CommonPaginationDTO } from '../../dtos/common-pagination';
import { IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class FindManyTodosFromUserDTO extends CommonPaginationDTO {

    @IsOptional()
    @ApiProperty()
    @ApiPropertyOptional()
    @IsString()
    title?: string

}