const btn = document.getElementById("btn")
const coselho = document.getElementById("coselho")
const numeroDoCoselho = document.getElementById("numero-do-coselho")

async function pegaUmCoselho(){
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    const coselhoAleatorio = await resposta.json()
    const idDoCoselho =`advice # ${coselhoAleatorio.slip.id}` 
    const textoDoCoselho = `"${coselhoAleatorio.slip.advice}"`

    coselho.innerHTML = textoDoCoselho
    numeroDoCoselho.innerHTML = idDoCoselho
}

btn.addEventListener("click", () => {
    pegaUmCoselho()
})