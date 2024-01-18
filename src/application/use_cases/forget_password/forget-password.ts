import { Injectable } from "@nestjs/common";
import { EmailSenderUseCase } from "../email/send-email";
import { GenerateJwtUseCase } from "../jwt/generate-jwt";
import { UsersRepository } from "src/application/repositories/interfaces/users-repository";
import { UserNoExists } from "../user/errors/user-no-exists";

@Injectable()
export class ForgetPasswordUseCase {

    constructor(
        private readonly emailSender: EmailSenderUseCase,
        private readonly generateJwt: GenerateJwtUseCase,
        private readonly usersRepository: UsersRepository,
    ){}

    async execute(email: string){

        const user = await this.usersRepository.findByEmail(email);

        if( !user ){

            throw new UserNoExists();

        }

        const jwt = await this.generateJwt.execute({
            payload:{
                id: user.id,
                email,
            },
            options:{
                expiresIn:'5m',
                secret: process.env.JWT_SECRET
            }
        });

        const url = `${process.env.APLLICATION_FRONT_PROTOCOL}://${process.env.APPLICATION_FRONT_HOST}:${process.env.APPLICATION_FRONT_PORT}`;

        await this.emailSender.execute({
            to:email,
            html:`
                <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Redefinição de Senha</title>
                    </head>
                    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
                
                        <div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                            
                            <h2 style="color: #333;">Redefinição de Senha</h2>
                
                            <p style="color: #666;">Você está recebendo este e-mail porque solicitou a redefinição de senha para sua conta.</p>
                
                            <p style="color: #666;">Clique no link abaixo para redefinir sua senha:</p>
                
                            <a href="${url}/redefine-password/${jwt}" style="display: inline-block; padding: 10px 20px; background-color: #3498db; color: #fff; text-decoration: none; border-radius: 5px; margin-top: 10px;">Redefinir Senha</a>
                
                            <p style="color: #666;">Atenciosamente,<br>TODOLIST</p>
                            
                        </div>
                
                    </body>
                </html>
            `,
            subject:'Redefinição de senha'
        });

    }

}