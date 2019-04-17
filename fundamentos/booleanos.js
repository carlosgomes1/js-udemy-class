let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // ! Representa o 'não', logo não não 1 = verdadeiro
console.log(!isAtivo) // e se não 1 = falso

console.log(!true)
console.log(!false)

console.log("E os verdadeiros...")
console.log(!!3) // usa dois não (!) pra ver se é verdadeiro
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)

console.log("Os falsos...")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

console.log("Pra finalizar, cuzão!")
console.log(!!("" || null || 0 || "caralho")) // Pelo menos um verdadeiro tudo recebe verdadeiro

nome = ""
console.log(nome || "Desconhecido") // Caso não tenha nome, vai aparecer desconhecido.

nome = "Carlos"
console.log(nome || "Desconhecido")
