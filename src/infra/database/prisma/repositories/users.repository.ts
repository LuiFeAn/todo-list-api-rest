import { User } from "src/application/entities/users/user";
import { UsersRepository } from "src/application/repositories/interfaces/users-repository";
import { PrismaService } from "../prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaUsersRepository implements UsersRepository {

    constructor(
        private readonly prismaService: PrismaService
    ){}

    async create(user: User){
        
        await this.prismaService.user.create({
            data:{
                username: user.username.value,
                password: user.password.value,
                email: user.email.value,
                createdAt: user.createdAt,
            }
        });

    }

}