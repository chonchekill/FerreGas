import { PrismaClient } from '@prisma/client';

export default class ProductosModelPrisma {

  #prismaClient;

  constructor() {
    this.#prismaClient = new PrismaClient();
  }

  async addUsuario(usuario){
    const respuesta = await this.#prismaClient.Usuario.create({data: usuario});
  }

  async getAllUsurios() {
    return await this.#prismaClient.Usuario.findMany()
  }
}