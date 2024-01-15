import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { IEmailSenderTransporter } from './interfaces/email-sender-transporter';
import { UsersRepository } from 'src/application/repositories/interfaces/users-repository';
import { UserNoExists } from '../user/errors/user-no-exists';

@Injectable()
export class EmailSenderUseCase {

  constructor(
    private mailerService: MailerService,
    private usersRepository: UsersRepository,
    ){}

  async execute({ 
        subject, 
        html,
        to
    }: IEmailSenderTransporter) {

    const userExistsInSystem = await this.usersRepository.findByEmail(to);

    if( !userExistsInSystem ){

        throw new UserNoExists();

    }

    await this.mailerService.sendMail({
      to,
      from: process.env.EMAIL_SENDER_USER,
      subject,
      html,
    });

  }

}
