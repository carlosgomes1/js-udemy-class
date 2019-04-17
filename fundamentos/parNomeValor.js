// par nome/valor
const saudacao = "Opa" // contexto léxico 1

function exec() {
    const saudacao = "E aí" // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 80,
    endereco: {
        logradouro: "Rua Topper",
        numero: 612
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)