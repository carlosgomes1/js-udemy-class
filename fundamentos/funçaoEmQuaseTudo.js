console.log(typeof Object)

class Produto {}

function somarEmedia(nota1, nota2, nota3, nota4) {
    return (nota1 + nota2 + nota3 + nota4) / 4
}

let media = somarEmedia(10, 4, 8.1, 2.6)
console.log(`Média: ${media.toFixed(2)}`)
