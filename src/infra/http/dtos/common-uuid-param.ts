import { IsUUID } from "class-validator";

export class CommonUuidQueryParam {

    @IsUUID()
    id: string

}