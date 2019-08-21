const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" }
];

const idades = usuarios.map(item => item.idade);

console.log(idades);

const trabalhadores = usuarios.filter(item => item.empresa === "Rocketseat");

console.log(trabalhadores);

const google = usuarios.find(item => item.empresa === "Google");

console.log(google);

const filtro = usuarios
  .map(item => {
    item.idade *= 2;
    return item;
  })
  .filter(item => {
    if (item.idade < 50) {
      return item;
    }
  });

console.log(filtro);
