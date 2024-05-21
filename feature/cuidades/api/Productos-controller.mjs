import express from "express";
import ProductosModelPrisma from "../Productos-model.mjs";

const { Router } = express;

export default class ProductosController {
  #router = Router();
  #productoModel = null;
  
  constructor() {
    this.#productoModel = new ProductosModelPrisma();
    this.registerRoutes();
  }
  
  getRouter() {
    return this.#router;
  }
  
  registerRoutes() {
    const routerV1 = Router();
    routerV1.get(`/productos1`, async (req, res) => await this.GetAllProductos(req, res));
    routerV1.post(`/productos1`, async (req, res) => await this.createProducto(req, res));
    
    this.#router.use(`/v1`, routerV1);
  }
  
  async GetAllProductos(req, res) {
    try {
      const producto = await this.#productoModel.getAllProductos();
      res.json(producto);
    } catch (error) {
      console.error(`error: ${error}`);
    }
  }

  async createProducto(req, res) {
    try {
      const producto = req.body;
      console.info({producto});
      this.#productoModel.addProducto(producto);
      res.send('ciudad creada');
    } catch (error) {
      console.error(`error: ${error}`);
    }
  }
}