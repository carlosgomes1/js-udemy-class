console.log("01)", "1" == 1) // Sim pq ambos são 1 e não tá pedindo o tipo
console.log("02)", "1" === 1) // Não pq um é string e outro é number
console.log("03)", "3" != 3) // 3 é DIFERENTE de 3? sim pq não ta pedindo o tipo e ambos são 3, logo falso
console.log("04)", "3" !== 3) // SIM SÃO DIFERENTES PQ É STRING E NUMBER

console.log("05)", 3 < 2) // MENOR QUE
console.log("06)", 3 > 2) // MAIOR QUE
console.log("07)", 3 <= 2) // MENOR OU IGUAL
console.log("08)", 3 >= 2) // MAIOR OU IGUAL

const d1 = new Date(0)
const d2 = new Date(0)
console.log("09)", d1 === d2)
console.log("10)", d1 == d2)
console.log("11)", d1.getTime() === d2.getTime())
console.log("12)", undefined == null)
console.log("13)", undefined === null)