// // Criação de um objeto "produto" com propriedades como nome, preço, setor, disponibilidade e marca
// let produto = {   
//   nome: "refri", // Nome do produto
//   preço: 0.89, // Preço do produto
//   setor: "bebidas", // Setor ao qual o produto pertence
//   disponibilidade: 0, // Quantidade disponível em estoque
//   marca: "fruki", // Marca do produto
// }; // array de produtos "produto"

// // Verifica se o produto está disponível no estoque
// if (produto.disponibilidade > 0) {
//   // Caso haja disponibilidade, exibe uma mensagem com o nome, quantidade e valor total do estoque
//   console.log(
//     `O produto ${produto.nome} posssui ${
//       produto.disponibilidade
//     } und em estoque, totalizando um valor de R$ ${
//       produto.preço * produto.disponibilidade
//     }`
//   );
// } else 
//   // Caso não haja disponibilidade, exibe uma mensagem informando que o estoque está zerado
//   console.log(`Estoque zerado para o ${produto.nome}`);

// // Criação de um array "produtos" contendo vários objetos, cada um representando um produto
let produtos = [
  {
    nome: "Doritos", // Nome do produto
    preço: 21.99, // Preço do produto
    setor: "Salgadinho", // Setor ao qual o produto pertence
    disponibilidade: 70, // Quantidade disponível em estoque
    marca: "Elma Chips", // Marca do produto
  },
  {
    nome: "Cebolitos",
    preço: 8.49,
    setor: "Salgadinho",
    disponibilidade: 40,
    marca: "Elma Chips",
  },
  {
    nome: "Kinder Ovo",
    preço: 11.99,
    setor: "Doces",
    disponibilidade: 10,
    marca: "Kinder",
  },
  {
    nome: "Pepsi Cola",
    preço: 7.9,
    setor: "Bebidas",
    disponibilidade: 50,
    marca: "Pepsico",
  },
  {
    nome: "Fruki Guaraná",
    preço: 5.99,
    setor: "Bebidas",
    disponibilidade: 100,
    marca: "Fruki",
  },
];

// // Exibe o nome do primeiro produto do array "produtos"
// console.log(`O primeiro produto do array é: ${produtos[0].nome}`)

// // Calcula o tamanho do array "produtos"
// let arraytamanho = produtos.length

// // Exibe o nome do último produto do array "produtos"
// console.log(`O último produto do array é: ${produtos[arraytamanho - 1].nome}`)

// /**
//  * Filtra o array original "produtos" para criar um novo array contendo apenas os produtos
//  * cujo preço seja menor que 10 reais.
//  */

// // Criação de um array vazio para armazenar os produtos mais baratos que 10 reais
// let maisBaratosQue10Reais = []

// // Itera sobre cada produto do array "produtos"
// for (const produto of produtos) { 
//   // Verifica se o preço do produto é menor que 10
//   if (produto.preço < 10) {
//     // Adiciona o nome do produto ao array "maisBaratosQue10Reais"
//     maisBaratosQue10Reais.push(produto.nome)
//   }
// }

// // Exibe o array contendo os nomes dos produtos mais baratos que 10 reais
// console.log(maisBaratosQue10Reais)

// // Exibe os nomes dos produtos mais baratos que 10 reais como uma string, separados por vírgulas
// console.log(maisBaratosQue10Reais.join(', '))

// for (let index = 0; index < produtos.length; index++) {
//   const produto = produtos[index];
//   console.log(`O nome deste produto é ${produto.nome} e seu preço R$ ${produto.preço}`)
// }


let setorSalgadinho = []

for (const produto of produtos) {
  if (produto.setor === "Salgadinho") {
    setorSalgadinho.push(produto.nome)
  }
}

console.log(setorSalgadinho)
console.log(setorSalgadinho.join(', '))
  


