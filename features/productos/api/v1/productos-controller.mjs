import express from "express";
import Productosmodel from "../../productos-model.mjs";
 
const { Router } = express;

export default class ProductosController {
  #router = Router();
  #Productosmodel = null;
  
  constructor() {
    this.registerRoutes();
  }
  
  getRouter() {
    return this.#router;
  }
  
  registerRoutes() {
    const routerV1 = Router();
    routerV1.get(`/Productos`, async (req, res) => await this.getAllProductos(req, res));
    
    this.#router.use(`/v1`, routerV1);
  }
  
  async getAllProductos(req, res) {
    try {
      this.#Productosmodel = new Productosmodel();
      this.#Productosmodel.connect();
      const producto = await this.#Productosmodel.getAllProductos();
      res.json(producto);
    } catch (error) {
      console.error(`error: ${error}`);
    } finally {
      this.#Productosmodel.closeConnection();
    }
  }
}