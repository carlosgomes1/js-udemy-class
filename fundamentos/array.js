const valores = [7.7, 8.9, 3.3, 9.1]
console.log(valores[0], valores[3])
console.log(valores[4])

valores [4] = 10 // incluindo dentro do array o número 10
console.log(valores)

valores [10] = 3.1 // colocando no item 10 o número 3.1
console.log(valores)
console.log(valores.length) // conta quantos itens há no array

valores.push({id: 3}, false, null, "teste") // pra adicionar
console.log(valores)

console.log(valores.pop()) // retira o ultimo valor do array
delete valores [0] // deleta o valor 0 (primeiro)

console.log(typeof valores)