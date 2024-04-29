import express, { json } from 'express';
import CiudadesController from './features/cuidades/api/v1/ciudades-controller.mjs';

const app = express();

// Middleware para devolver responses como JSON
app.use(json());

// Routes
const ciudadesApiController = new CiudadesController();
app.use('/api', ciudadesApiController.getRouter());
 
app.get('/calculadora/html', async (req, res) => {
    res.send(`<h1>Hola desde NODEJS</h1> la suma es:`);
});



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
