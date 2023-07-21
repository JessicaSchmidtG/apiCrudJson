import app from './app';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;

//Iniciar servidor
app.listen(PORT, () => console.log(`Rodando na porta:`+ PORT));