
import { CommonPaginationDTO } from '../../dtos/common-pagination';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PriorityEnum } from '@prisma/client';

export class FindManyTodosFromUserDTO extends CommonPaginationDTO {

    @IsOptional()
    @ApiProperty()
    @ApiPropertyOptional()
    @IsString()
    title?: string

    @IsOptional()
    @ApiProperty()
    @ApiPropertyOptional()
    @IsEnum(PriorityEnum)
    priority?: PriorityEnum

}