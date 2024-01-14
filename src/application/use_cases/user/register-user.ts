import { User } from "../../entities/users/user";
import { IRegisterUserRequest } from "./interfaces/register-user-request";
import { IRegisterUserResponse } from "./interfaces/register-user-response";
import { Email } from "../../entities/users/value_objects/email";
import { Password } from "../../entities/users/value_objects/password";
import { Username } from "../../entities/users/value_objects/username";
import { UsersRepository } from "src/application/repositories/interfaces/users-repository";
import { Injectable } from "@nestjs/common";


@Injectable()
export class RegisterUser {

    constructor(private readonly usersRepository: UsersRepository){}


    async execute(request: IRegisterUserRequest): Promise<IRegisterUserResponse>{

        const { email, password, username } = request;

        const user = new User({
            email: new Email(email),
            password: new Password(password),
            username: new Username(username),
        });
        
        await this.usersRepository.create(user);

        return {
            user
        }

    }

}