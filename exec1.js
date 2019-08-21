class Usuario {
  constructor(usuario, senha) {
    this.usuario = usuario;
    this.senha = senha;
    this.admin = false;
  }

  isAdmin() {
    return this.admin;
  }
}

class Admin extends Usuario {
  constructor() {
    super();
    this.admin = true;
  }
}

const administrador = new Admin("tiagodurante@outlook.com.br", "senha123");
console.log(`admin => ${administrador.isAdmin()}`);
const user = new Usuario("tiagodurante@outlook.com.br", "senha123");
console.log(`user => ${user.isAdmin()}`);
