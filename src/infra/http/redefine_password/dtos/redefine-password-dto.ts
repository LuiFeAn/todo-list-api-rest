import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RedefinePasswordDTO {

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly password: string

}