const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

const soma = (...params) => {
  return params.reduce((total, item) => total + item);
};

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil"
  }
};

const gabriel = { ...usuario, nome: "Gabriel" };
console.log(gabriel);

const lontras = {
  ...usuario,
  endereco: {
    ...usuario.endereco,
    cidade: "Lontras"
  }
};
console.log(lontras);
