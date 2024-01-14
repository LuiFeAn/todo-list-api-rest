import { User as UserModel } from "@prisma/client"
import { User } from "src/application/entities/users/user"
import { Email } from "src/application/entities/users/value_objects/email"
import { Password } from "src/application/entities/users/value_objects/password"
import { Username } from "src/application/entities/users/value_objects/username"

export class PrismaUserMapper {

    static toPrisma(user: User){

        return {
            username: user.username.value,
            password: user.password.value,
            email: user.email.value,
            createdAt: user.createdAt,
        }

    }

    static toDomain(raw: UserModel){

        return new User({
            id: raw.id,
            username: new Username(raw.username),
            email: new Email(raw.email),
            password: new Password(raw.password),
            createdAt: raw.createdAt,
        })

    }

}