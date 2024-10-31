import type { User } from "@/core/model/usuario";
import { PrismaClient } from "@prisma/client";

export default class RepositorioUsuario {
  private static db: PrismaClient = new PrismaClient()

  static async salvar(usuario: User): Promise<User> {
    return await this.db.user.upsert({
      where: { id: usuario.id },
      update: usuario,
      create: usuario
    })
  }

  static async obterTodos(): Promise<User[]> {
    return await this.db.user.findMany()
  }

  static async obterPorId(id: string): Promise<User> {
    const user = await this.db.user.findUnique({
      where: { id }
    })

    return user as User
  }

  static async excluir(id: string): Promise<void> {
    await this.db.user.delete({
      where: { id }
    })
  }
}