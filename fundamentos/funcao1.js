// funçao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // segundo numero undefined
imprimirSoma(2, 3, 4, 5, 6, 7) // vai pegar apenas a e b
imprimirSoma()

// funcao com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
