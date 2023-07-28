import {Request, Response} from 'express';
import db from '../config/database';

async function listUsers(req: Request, res: Response) {
   db.connection.query('select * from clients', (err, results)=> {
        console.log(results);
        res.send(results);
   });
};

async function createUser(req: Request, res: Response) {
    const querySql = 'insert into clients(DS_NAME, NM_CELLPHONE, DS_STATUS) VALUES(?,?,?);';
    const params = Array(
        req.body.DS_NAME,
        req.body.NM_CELLPHONE,
        req.body.DS_STATUS
    );

    db.connection.query(querySql, params, (err, results) => {
        res.send('Cadastro realizado com sucesso '+ res.json(results));
    });
};

//async function editUser(req: Request, res: Response) {};

//async function deleteUser(req: Request, res: Response) {};
    
export default {
    listUsers,
    createUser
};