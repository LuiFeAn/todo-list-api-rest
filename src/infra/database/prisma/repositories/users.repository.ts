import { User } from "src/application/entities/users/user";
import { UsersRepository } from "src/application/repositories/interfaces/users-repository";
import { PrismaService } from "../prisma.service";
import { Injectable } from "@nestjs/common";
import { PrismaUserMapper } from "../mappers/user-mapper";

@Injectable()
export class PrismaUsersRepository implements UsersRepository {

    constructor(
        private readonly prismaService: PrismaService
    ){}

    async create(user: User){

        const raw = PrismaUserMapper.toPrisma(user);
        
        await this.prismaService.user.create({
            data: raw
        });

    }

    async updatePassword(newPassword: string, userId: string): Promise<void> {
        
        await this.prismaService.user.update({
            where:{
                id: userId
            },
            data:{
                password: newPassword
            }
        });

    }

    async findById(userId: string): Promise<User> {

        const user = await this.prismaService.user.findUnique({
            where:{
                id: userId
            }
        });

        if( !user ){

            return

        }

        return PrismaUserMapper.toDomain(user);

    }

    async findByEmail(email: string): Promise<User> {
        
        const userCredentials = await this.prismaService.user.findUnique({
            where:{
                email: email,
            }
        });

        if( !userCredentials ){

            return

        }

        return PrismaUserMapper.toDomain(userCredentials);

    }

}