let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = "Teste"

console.log(a) // Não está no escopo global e sim no escopo do arquivo
console.log(global.b) // Var é global
console.log(this.c) // This só pode pegar global, e se estiver numa função, pega só da função
console.log(module.exports.c) // mesma coisa que this
console.log(module.exports === this)
console.log(module.exports) // estarão toda as variáveis, por isso se chamar this.var ela vai pegar o nome da variavel

// Criando variável sem let e var
abc = 3 // Nunca fazer isso (é uma var)
console.log(global.abc)