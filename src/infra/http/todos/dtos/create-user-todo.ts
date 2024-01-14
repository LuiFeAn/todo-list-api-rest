
import { PriorityEnum } from "@prisma/client";
import { IsNotEmpty, IsISO8601, Length, IsOptional, IsUUID, IsEnum } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateUserTodoDTO {

    @IsNotEmpty()
    @Length(1,100)
    @ApiProperty()
    title: string

    @IsOptional()
    @Length(0,5000)
    @ApiPropertyOptional()
    description: string

    @IsNotEmpty()
    @IsEnum(PriorityEnum)
    @ApiProperty()
    priority: PriorityEnum

    @IsNotEmpty()
    @IsISO8601()
    @ApiProperty()
    mustBeCompletedIn: string

}