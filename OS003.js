const carros = [
  { nome: "Civic", marca: "Honda", ano: 2008, cor: "prata" },
  { nome: "Corolla", marca: "Toyota", ano: 2012, cor: "branco" },
  { nome: "Gol", marca: "Volkswagen", ano: 2015, cor: "preto" },
  { nome: "Onix", marca: "Chevrolet", ano: 2019, cor: "vermelho" },
  { nome: "Fiesta", marca: "Ford", ano: 2006, cor: "azul" },
  { nome: "Palio", marca: "Fiat", ano: 2004, cor: "cinza" },
  { nome: "HB20", marca: "Hyundai", ano: 2022, cor: "branco" },
  { nome: "Sandero", marca: "Renault", ano: 2009, cor: "verde" },
];

let carrosPretoseAzuis = [];
for (const carro of carros) {
  if (carro.cor === "preto" || carro.cor === "azul") {
    carrosPretoseAzuis.push(carro);
  }
}

console.log("Carros pretos e azuis:");
for (const carro of carrosPretoseAzuis) {
  console.log(`- ${carro.nome}, cor ${carro.cor};`);
}

console.log();

console.log("Carros fabricados entre 2010 e 2020:");
for (const c of carros) {
  if (c.ano >= 2010 && c.ano <= 2020) {
    console.log(`- ${c.nome}, ano ${c.ano};`);
  }
}
