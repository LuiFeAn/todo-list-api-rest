import { ApiProperty } from "@nestjs/swagger"

class SiginUserSwaggerResponseDto {

    @ApiProperty()
    username: string

    @ApiProperty()
    email: string

}

export class SiginSwaggerResponseDto {

    @ApiProperty()
    acessToken: string
    @ApiProperty()
    user: SiginUserSwaggerResponseDto

}