// a. crie uma função que mostre os números de 1 a 5 no console
// function listar(receivedNumber) {
//     let numbers = [1, 2, 3, 4, 5]
//     for (const number of numbers) {
//         console.log(number)
//     }

//     for (const number of [5]) {
//         console.log(number)
//     }

//     for (const number of receivedNumber) {
//         console.log(number)
//     }
// }

// listar(4)

// b. crie uma função que sempre mostre no console o nome do
//     segundo item de qualquer array de objetos que possua o atributo

// const banda1 = [
//     { name: "Tony Iommi", age: 77 },
//     { name: "Geezer Butler", age: 76 },
//     { name: "Bill Ward", age: 77 },
//     { name: "Ozzy Osbourne", age: 76 },
//   ];

//   const banda2 =
//   [
//     { name: "Mick Jagger", age: 82 },
//     { name: "Keith Richards", age: 82 },
//     { name: "Ronnie Wood", age: 78 },
//   ];

// function mostrar(parametro) {
//   console.log(parametro[1].name);
// }

// mostrar(banda1);
// mostrar(banda2);

// c. crie uma função que recebe um grupo de alunos, separa eles
//     entre aprovados e reprovados, uma vez que a nota mínima para
//     aprovação é 7 e então mostra-os no console

const turmaTerceirao = [
  { aluno: "Alice", nota: 7 },
  { aluno: "Maria", nota: 7.5 },
  { aluno: "João", nota: 4.3 },
  { aluno: "Gabriel", nota: 7 },
  { aluno: "Diego", nota: 8.8 },
  { aluno: "Daiane", nota: 6 },
];

function aprovadosEReprovados(grupoDeAlunos) {
  const aprovados = [];
  const reprovados = [];

for (const aluno of grupoDeAlunos) {
  if (aluno.nota > 7) {
    aprovados.push(aluno);
  } else {
    reprovados.push(aluno);
  }
  
}

  console.log("\naprovados\n", ...aprovados);
  console.log("\nreprovados\n", ...reprovados);

  
}

aprovadosEReprovados(turmaTerceirao);
