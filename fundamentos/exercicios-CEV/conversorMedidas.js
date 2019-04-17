var respostas = null
function conversorMetro(n) {
    return respostas = {
        km: (n / 1000),
        hm: (n / 100),
        dam: (n / 10),
        dm: (n * 10),
        cm: (n * 100),
        mm: (n * 1000)
    }
}

conversao = conversorMetro(7)

console.log(conversao)