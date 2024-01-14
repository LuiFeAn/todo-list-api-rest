
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class FindManyTodosFromUserDTO {

    @IsNotEmpty()
    @ApiProperty()
    page: number

    @IsNotEmpty()
    @ApiProperty()
    quanty: number

    @IsOptional()
    @ApiProperty()
    @ApiPropertyOptional()
    @IsString()
    title?: string

}