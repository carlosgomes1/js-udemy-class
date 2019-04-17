let valor // não inicializada
console.log(valor)
// console.log(valor2) // não foi nem declarada

valor = null // ausência de valor
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco // use para deletar
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
