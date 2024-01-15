import { NotFoundException } from "@nestjs/common";

export class TodoNotFoundExepction extends NotFoundException {

    constructor(){
        super('Lista não encontrada')
    }

}