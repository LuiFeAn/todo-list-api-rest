import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    @Length(0,150)
    username: string

    @IsNotEmpty()
    @IsString()
    @Length(8)
    password: string

    @IsNotEmpty()
    @IsEmail()
    email: string

}