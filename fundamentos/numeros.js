const peso1 = 1.0
const peso2 = Number("2.0")

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // é inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 8.232
const avaliacao2 = 4.214

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2)) // Só vai ter 2 casas decimais
console.log(media.toString()) // transforma em string
console.log(media.toString(2)) // transforma em número binário
