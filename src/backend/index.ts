import salvarUsuario from "./user/salvarUsuario"
import obterTodos from "./user/obterTodos"
import excluirUsuario from "./user/excluirUsuario"

export default class Backend {
  static readonly usuarios = {
    salvar: salvarUsuario,
    obter: obterTodos,
    excluir: excluirUsuario
  }
}