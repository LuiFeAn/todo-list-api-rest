import { NotFoundException } from "@nestjs/common";

export class CommonSearchNotFoundException extends NotFoundException {
    
    constructor(){
        super('Não foram encontrados resultados referentes a esta pesquisa');
    }

}