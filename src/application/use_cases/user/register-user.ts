import { User } from "../../entities/users/user";
import { IRegisterUserRequest } from "./interfaces/register-user-request";
import { IRegisterUserResponse } from "./interfaces/register-user-response";
import { Email } from "../../entities/users/value_objects/email";
import { Password } from "../../entities/users/value_objects/password";
import { Username } from "../../entities/users/value_objects/username";
import { UsersRepository } from "../../../application/repositories/interfaces/users-repository";
import { Injectable } from "@nestjs/common";
import { EmailAlreadyExists } from "./errors/email-already-exists";
import { hash } from "bcrypt";

@Injectable()
export class RegisterUserUseCase {

    constructor(private readonly usersRepository: UsersRepository){}

    async execute(request: IRegisterUserRequest): Promise<IRegisterUserResponse>{

        const { email, password, username } = request;

        const hasedPassword = await hash(password,12);

        const user = new User({
            email: new Email(email),
            password: new Password(hasedPassword),
            username: new Username(username),
        });

        const emailAlreadyExists = await this.usersRepository.findByEmail(email);

        if( emailAlreadyExists ){

            throw new EmailAlreadyExists();

        }
        
        await this.usersRepository.create(user);

        return {
            user
        }

    }

}