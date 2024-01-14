import { IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class SiginDTO {

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    email: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    password: string

}