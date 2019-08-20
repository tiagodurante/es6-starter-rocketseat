const usuario = {
  nome: "tiago",
  idade: "25",
  endereco: {
    cidade: "altonia",
    estado: "paraná"
  }
};

const {
  nome,
  idade,
  endereco: { cidade }
} = usuario; // <<< desestruturação

console.log(nome, idade, cidade);

function mostraNome({ nome }) {
  // <<< desestruturação
  return nome;
}

console.log(mostraNome(usuario));
