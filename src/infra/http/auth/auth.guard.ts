import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException} from '@nestjs/common';
import { JwtService, TokenExpiredError } from '@nestjs/jwt';
import { Request } from 'express';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { Reflector } from '@nestjs/core';
  
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
      private readonly jwtService: JwtService,
      private readonly prismaService: PrismaService,
      private readonly reflector: Reflector,
      ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {

        const isPublicResoruce = this.reflector.getAllAndOverride<boolean>('PUBLIC_RESOURCE',[
          context.getClass(),
          context.getHandler()
        ]);

        if( isPublicResoruce ){

          return true

        }

        const request = context.switchToHttp().getRequest();

        const token = this.extractTokenFromHeader(request);

        if( !token ){

            throw new UnauthorizedException('Token inválido')

        }

        try {

                const payload = await this.jwtService.verifyAsync(token,{
                secret: process.env.JWT_SECRET
                });

                request.jwtDecode = payload;

                return true;

          } catch(err){

                if( err instanceof TokenExpiredError ){

                    throw new UnauthorizedException('O token fornecido já foi expirado. Por favor, se autentique novamente para gerar seu refresh token');

                }
                
                if( err instanceof UnauthorizedException ){

                    throw new UnauthorizedException(err.message);

                }
            
          }

    }

    private extractTokenFromHeader(request: Request): string | undefined {
        
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        
        return type === 'Bearer' ? token : undefined;
    }

}