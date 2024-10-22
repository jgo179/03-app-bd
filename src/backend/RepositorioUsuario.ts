import type { User } from "@/core/model/usuario";
import { PrismaClient } from "@prisma/client";

export default class RepositorioUsuario {
  private static db: PrismaClient = new PrismaClient()

  static async salvar(usuario: User) {
    return await this.db.user.upsert({
      where: { id: usuario.id },
      update: usuario,
      create: usuario
    })
  }

  static async obterTodos() {
    return await this.db.user.findMany()
  }

  static async obterPorId(id: string) {
    return await this.db.user.findUnique({
      where: { id }
    })
  }
}