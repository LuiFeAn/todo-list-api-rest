import { User } from "src/application/entities/users/user"
export class AuthToHttpMapper {

    static toHttp(user: User){
        
        return {
            email: user.email.value,
            username: user.username.value
        }

    }

}