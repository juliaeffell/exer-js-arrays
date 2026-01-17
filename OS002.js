const carros = [
  {
    nome: "Civic",
    marca: "Honda",
    velocidadeMaxima: 210,
    preco: 145000,
    ano: 2022,
    cor: "Preto"
  },
  {
    nome: "Corolla",
    marca: "Toyota",
    velocidadeMaxima: 195,
    preco: 150000,
    ano: 2023,
    cor: "Branco"
  },
  {
    nome: "Golf GTI",
    marca: "Volkswagen",
    velocidadeMaxima: 250,
    preco: 320000,
    ano: 2021,
    cor: "Vermelho"
  },
  {
    nome: "Onix",
    marca: "Chevrolet",
    velocidadeMaxima: 187,
    preco: 85000,
    ano: 2020,
    cor: "Vermelho"
  },
  {
    nome: "Mustang",
    marca: "Ford",
    velocidadeMaxima: 250,
    preco: 550000,
    ano: 1998,
    cor: "Azul"
  },
  {
    nome: "HB20",
    marca: "Hyundai",
    velocidadeMaxima: 190,
    preco: 90000,
    ano: 2021,
    cor: "Prata"
  },
  {
    nome: "A3",
    marca: "Audi",
    velocidadeMaxima: 235,
    preco: 280000,
    ano: 2008,
    cor: "Branco"
  },
  {
    nome: "320i",
    marca: "BMW",
    velocidadeMaxima: 235,
    preco: 310000,
    ano: 2022,
    cor: "Preto"
  }
];

let carrosQueUltrapassem230 = [];
for (const carro of carros)  
    if (carro.velocidadeMaxima > 230)
        carrosQueUltrapassem230.push(carro);

console.log("Carros que ultrapassam 230km/h:")
for (const carro of carrosQueUltrapassem230) {
    console.log(`- ${carro.nome};`)
}

console.log();

let carrosQuecustemMaiscemMil = [];
for (const carro of carros)  
    if (carro.preco > 100000)
        carrosQuecustemMaiscemMil.push(carro);

console.log("Carros que custam mais de 100mil:")
for (const carro of carrosQuecustemMaiscemMil) {
    console.log(`- ${carro.nome} - R$ ${carro.preco};`)
}

console.log();

let carrosSuperioresaDoilmilEdezVermelhos = [];
for (const carro of carros)  
    if (carro.ano > 2010 && carro.cor === "Vermelho")
        carrosSuperioresaDoilmilEdezVermelhos.push(carro);

console.log("Carros que são superiores a 2010 da cor vermelha:")
for (const carro of carrosSuperioresaDoilmilEdezVermelhos) {
    console.log(`- ${carro.nome} - ${carro.ano} - ${carro.cor};`)
}









