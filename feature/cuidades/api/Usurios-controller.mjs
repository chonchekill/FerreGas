
import express from "express";
import UsuariosModelPrisma from "../Usuarios-model.mjs";

const { Router } = express;

export default class UsuariosController {
  #router = Router();
  #usuariosModel = null;
  
  constructor() {
    this.#usuariosModel = new UsuariosModelPrisma();
    this.registerRoutes();
  }
  
  getRouter() {
    return this.#router;
  }
  
  registerRoutes() {
    const routerV1 = Router();
    routerV1.get(`/usuarios`, async (req, res) => await this.GetAllUsuarios(req, res));
    routerV1.post(`/usuarios`, async (req, res) => await this.createUsuario(req, res));
    
    this.#router.use(`/v2`, routerV1);
  }
  
  async GetAllUsuarios(req, res) {
    try {
      const usuario = await this.#usuariosModel.getAllUsurios();
      res.json(usuario);
    } catch (error) {
      console.error(`error: ${error}`);
    }
  }

  async createUsuario(req, res) {
    try {
      const user = req.body;
      console.info({user});
      this.#usuariosModel.addUsuarios(user);
      res.send('Usuario creado');
    } catch (error) {
      console.error(`error: ${error}`);
    }
  }
}