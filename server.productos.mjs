import express, { json } from 'express';
import ProductosController from './features/productos/api/v1/productos-controller.mjs';

const app = express();

// Middleware para devolver responses como JSON
app.use(json());

// Routes
const productosApiController = new ProductosController();
app.use('/api', productosApiController.getRouter());
 
// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
