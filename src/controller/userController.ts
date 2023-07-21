import {Request, Response} from 'express';
//Importar o pacote File System para manipular arquivos
const fs = require('fs');
//Importar banco de dados de extensão .json
const data: string = './database.json'; 

async function listUsers(req: Request, res: Response) {
    const jsonData = fs.readFileSync(data);
    //analisa string JSON
    res.send(JSON.parse(jsonData));
}

export default {
    listUsers
}

async function addUsers(req: Request, res: Response) {
    
}