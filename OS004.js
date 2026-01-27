const mm = [
  ["solar", "luar", "carroça", "teste", "botão", "dia"],
  ["patinete", "escola", "casa"],
  ["caminhada", "paralelepípedo", "menos", "mais", "réu"],
];

for (let index = 0; index < mm.length; index++) {
  console.log(`O vetor ${index + 1} possui ${mm[index].length} palavras`)

  let maiorPalavra = ''
  let menorPalavra = ''
  for (const palavra of mm[index]) {
    if (maiorPalavra.length === 0 || menorPalavra.length === 0) {
      maiorPalavra = palavra
      menorPalavra = palavra
      continue
    }

    if (maiorPalavra.length < palavra.length) {
      maiorPalavra = palavra
    }
    
    if (menorPalavra.length > palavra.length) {
      menorPalavra = palavra
    }
  }

  console.log(`- a sua maior palavra é ${maiorPalavra} e possui ${maiorPalavra.length} caracteres`)
  console.log(`- a sua menor palavra é ${menorPalavra} e possui ${menorPalavra.length} caracteres`)

  console.log()
}