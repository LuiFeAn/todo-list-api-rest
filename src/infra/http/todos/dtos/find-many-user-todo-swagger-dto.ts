import { ApiProperty } from "@nestjs/swagger"

export class TodoSwaggerResponseDto {

    @ApiProperty()
    id: string
    @ApiProperty()
    title: string
    @ApiProperty()
    description: string
    @ApiProperty()
    mustBeCompletedIn: string
    @ApiProperty()
    finishedIn: string
    @ApiProperty()
    priority: string
    @ApiProperty()
    createdAt:string
    @ApiProperty()
    userId: string

}