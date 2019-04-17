// Armazenando uma função em um variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 5)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 4))

const imprimir2 = a => console.log(a)
