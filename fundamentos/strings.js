const escola = "Cod3r"

console.log(escola.charAt(4)) // Isso vai mostrar a letra número 4 da variável, sendo que sempre começa em 0!
console.log(escola.charCodeAt(3)) // Vai trazer o carácter na tabela UNIcode
console.log(escola.indexOf("3")) // Ele vai trazer a posição da letra na string caso há
console.log(escola.substring(1)) // Vai mostrar toda a string a partir do número solicitado
console.log(escola.substring(0, 3)) // Vai mostrar a string de 0 a 2, sendo que 3 não conta

console.log("Escola ".concat(escola).concat("!")) // Vai concatenar a variável e a string ao print
console.log("Escola " + escola + "!")  // vai concatenar também

console.log(escola.replace(3, 'e')) // Substitui a 3 parte da string pela letra e
console.log("Ana,Maria,Pedro".split(",")) // Vai criar um array de acordo com as vírgulas