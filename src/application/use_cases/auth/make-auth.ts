import { Injectable } from "@nestjs/common";
import { IMakeAuthRequest } from "./interfaces/make-auth-request";
import { JwtService } from "@nestjs/jwt";
import { compare } from "bcrypt";
import { UsersRepository } from "src/application/repositories/interfaces/users-repository";

@Injectable()
export class MakeAuthUseCase {

    constructor(
        private readonly jwtService: JwtService,
        private readonly usersRepository: UsersRepository,
        ){}

    async execute(request: IMakeAuthRequest){

        const { email, password } = request;

        const user = await this.usersRepository.findByEmail(email);

        if( !user ){

          throw new Error('Invalid credentials')

        }

        const passwordValidation = await compare(password, user.password.value);

        if( !passwordValidation ){

            throw new Error('Invalid credentials')

        }

        const acessToken = await this.jwtService.signAsync({
            id: user.id,
            username: user.username,
            email: user.email.value,
        });

        return {
            acessToken,
            user
        }

    }

}