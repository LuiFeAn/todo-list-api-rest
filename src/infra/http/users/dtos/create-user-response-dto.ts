import { ApiProperty } from "@nestjs/swagger";
import { CreateUserDto } from "./create.user.dto";

export class CreateUserSwaggerResponseDto  extends CreateUserDto {

    @ApiProperty()
    createdAt: string

}