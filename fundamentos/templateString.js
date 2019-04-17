const nome = "Carlos"
const idade = 18
const namorada = "Julia"

const concatenacao = "Olá " + nome + "!"

const template = `Olá ${nome}!`
const iaemano = `Olá, ${nome}! Você tem ${idade} anos e namora com a ${namorada}!` 

    // Template se usa ${} com a variável dentro, pra substituir e não ficar concatenando

console.log(concatenacao)
console.log(template)
console.log(iaemano)

console.log(`Olá, ${nome}!`)
console.log(`Iae meu mano ${nome}! Tranquilidade? Eu amo muito a sua namorada, ${namorada}!`)

console.log("Iae carai! Meu nome é ${nome}!") // Não dá pra fazer sem `
