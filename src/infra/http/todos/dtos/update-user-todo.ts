import { IsNotEmpty, IsOptional, IsString, IsUUID, IsISO8601, Length, IsEnum } from 'class-validator';
import { PriorityEnum } from '@prisma/client';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserTodoDTO {

    @IsOptional()
    @Length(1,100)
    @ApiPropertyOptional()
    title?: string

    @IsOptional()
    @Length(0,5000)
    @ApiPropertyOptional()
    description?: string

    @IsOptional()
    @IsEnum(PriorityEnum)
    @ApiPropertyOptional()
    priority?: PriorityEnum

    @IsOptional()
    @IsISO8601()
    @ApiPropertyOptional()
    mustBeCompletedIn: Date

}