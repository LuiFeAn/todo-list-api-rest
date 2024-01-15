import { IsString, IsNotEmpty, IsEmail } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ForgetPasswordDto {

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string

}