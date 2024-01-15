import { IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class CommonPaginationDTO {

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    page: number

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    quanty: number

}