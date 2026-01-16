let makeUp = [
  {
    nome: "foundation",
    preco: 20.0,
    disponibilidade: 3,
  },
  {
    nome: "skin powder",
    preco: 16.0,
    disponibilidade: 23,
  },
  {
    nome: "conciler",
    preco: 15,
    disponibilidade: 0,
  },
  {
    nome: "bt plush",
    preco: 100.99,
    disponibilidade: 30,
  },
  {
    nome: "bt velvet",
    preco: 8.75,
    disponibilidade: 54,
  },
  {
    nome: "gloss",
    preco: 12,
    disponibilidade: 0,
  },
  {
    nome: "eyerlash",
    preco: 10.5,
    disponibilidade: 40,
  },
  {
    nome: "ruby woo",
    preco: 70,
    disponibilidade: 2,
  },
];

let carrinhoDeCompras = [];
for (const produto of makeUp) 
    if (produto.preco < 25 && produto.disponibilidade > 0) 
        carrinhoDeCompras.push(produto);

console.log();

console.log("NOTA FISCAL - Produtos de maquilagem")
console.log();
console.log("Lista de itens:");

for (const cartProduct of carrinhoDeCompras)
    console.log(`- Produto: ${cartProduct.nome}, R$ ${cartProduct.preco}`);

console.log();
console.log("-------------------------------------------");
console.log();
console.log(`Total itens: ${carrinhoDeCompras.length}`);

let somaTotal = 0
for (const cartProduct of carrinhoDeCompras)
    somaTotal += cartProduct.preco

console.log();
console.log(`Budget final: R$ ${somaTotal}`);