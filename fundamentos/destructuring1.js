// novo recurso ES2015

const pessoa = {
    nome: "Carlos",
    idade: 18,
    endereco: {
        logradouro: "Rua João Gomes Pereira",
        numero: 691
    }
}

const { nome, idade } = pessoa // vai tirar nome e idade de pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // colocando nome e idade nas variáveis n e i
console.log(n, i)

const { sobrenome, sexo = true } = pessoa // se não vier nada receba true
console.log(sobrenome, sexo)

const { endereco: { logradouro, numero, cep } } = pessoa // vai retirar os 3
console.log(logradouro, numero, cep)

// ou...
const { logradouro: l, numero: nu, cep: c } = pessoa.endereco
console.log(l, nu, c)