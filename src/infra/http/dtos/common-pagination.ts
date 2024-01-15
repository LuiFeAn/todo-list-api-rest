import { IsNotEmpty, IsNumber, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"
import { TransformFnParams, Transform } from 'class-transformer'

export class CommonPaginationDTO {

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    @Transform( ( params: TransformFnParams) => parseInt(params.value) )
    page: number

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    @Transform( ( params: TransformFnParams) => parseInt(params.value) )
    quanty: number

}