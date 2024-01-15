import { JwtSignOptions } from "@nestjs/jwt"

export class IGenerateJwtProps {

    payload: object | Buffer
    
    options?: JwtSignOptions

}