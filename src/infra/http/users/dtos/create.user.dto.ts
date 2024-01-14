import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    @Length(0,150)
    @ApiProperty()
    username: string

    @IsNotEmpty()
    @IsString()
    @Length(8)
    @ApiProperty()
    password: string

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string

}