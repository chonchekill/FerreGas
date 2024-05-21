import 'dotenv/config';

import express, { json } from 'express';
import ProductosController from './feature/cuidades/api/Productos-controller.mjs';
import UsuariosController from './feature/cuidades/api/Usurios-controller.mjs';

const app = express();
const app1 = express();

// Middleware para devolver responses como JSON
app.use(json());
app1.use(json());

// Routes
const productoApiController = new ProductosController();
app.use('/api', productoApiController.getRouter());


const usuariosApiController = new UsuariosController();
app1.use('/api1', usuariosApiController.getRouter());

// Start the server
const PORT = process.env.PORT || 3000;

console.log(process.env.MYSQL_DATABASE_URL);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});