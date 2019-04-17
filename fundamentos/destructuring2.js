const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] // n1 vai receber 10, n3 = 9 pq nao tem n2, n5 vai ser undefined pq nao tem e n6 = 0 por padrao ja q n tem
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 9], [9, 6, 8]] // vai ignorar o primeiro array, e o primeiro item do segundo
console.log(nota)