function tratarErroELancar(erro) {
    // throw new Error("...")
    // throw 10
    // throw "Mensagem"
    //throw true
    throw {
        nome: erro.nome, // Throw é lançar o erro
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try { // É para funções potencialmente perigosas a dar erro, se não der erro vai continuar
        console.log(obj.name.toUpperCase() + "!!!") 
    } catch (e) { // Se caso der erro ele vai executar o catch
        tratarErroELancar(e)
    } finally { // Com erro ou não o finally sempre será executado
        console.log("Fim")
    }
}

const obj = { nome: "Carlos" }
imprimirNomeGritado(obj)