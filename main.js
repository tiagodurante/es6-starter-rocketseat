//REST

const usuario = {
  nome: "tiago",
  idade: "25",
  empresa: "INT"
};

const { nome, ...resto } = usuario;

console.log(nome, resto);

const arr = [1, 2, 3, 4, 5];

const [a, b, ...restante] = arr;
console.log(a, b, restante);

function soma(...params) {
  return params.reduce((total, item) => total + item);
}

console.log(soma(1, 2, 3));

function somaDiferente(a, b, ...params) {
  return params.reduce((total = a + b, item) => total + item);
}

console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9));

//SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario2 = { ...usuario, nome: "Diego" };
console.log(usuario2);
