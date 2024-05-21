import { PrismaClient } from '@prisma/client';

export default class ProductosModelPrisma {

  #prismaClient;

  constructor() {
    this.#prismaClient = new PrismaClient();
  }

  async addProducto(producto){
    const respuesta = await this.#prismaClient.producto.create({data: producto});
  }

  async getAllProductos() {
    return await this.#prismaClient.producto.findMany();
  }

  async addUsuario(usuario){
    const respuesta = await this.#prismaClient.Usuario.create({data: usuario});
  }

  async getAllUsurios() {
    return await this.#prismaClient.Usuario.findMany()
  }
}