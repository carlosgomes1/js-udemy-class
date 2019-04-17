{
    {
        {
            {
                var sera = "Será???"
            }
        }
    }
}

console.log(sera) // ficará visível mesmo fora do bloco com var

function teste() {
    var local = 123
}

teste()
console.log(local) // dentro de uma função nao esta visivel fora