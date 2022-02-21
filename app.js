const button = document.querySelector('.buttonImc')
const paraImc = document.querySelector('.paraImc')

function test(){
    let poidValue = parseFloat(document.querySelector('.poids').value)
    let tailleValue = parseFloat(document.querySelector('.taille').value)
    let resultat = poidValue / (tailleValue **2)
    paraImc.innerHTML = `Imc: ${resultat.toFixed(2)}`
}

button.addEventListener('click', test)
