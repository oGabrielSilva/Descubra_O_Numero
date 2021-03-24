let alertDisplay = document.querySelector('.alert')
const display = document.querySelector('#outValue')
let value
let dica
let tryC = 3
let alertAux
let btAux = false
numbers = []

function start() {
    let listNum = ``
    const inNumber = document.querySelector('#inNumber')
    let number = parseFloat(inNumber.value)

    if (isNaN(number)) {
        inNumber.focus()
        return
    }

    if (number > 10 || number < 1) {
        alertAux = 1
        alertPop()
        inNumber.value = ``
        inNumber.focus()
        return
    }

    switch (numbers.indexOf(number)) {
        case -1:
            numbers.push(number)
            inNumber.focus()
            inNumber.value = ``
            dica = number < value ? 'maior' : 'menor'
            break;
        default:
            alertAux = 2
            alertPop()
            inNumber.value = ``
            inNumber.focus()
            return
    }

    if (number != value) {
        tryC--
    }

    listNum += numbers.join(', ')
    outDica.textContent = `Tente um número ${dica} do que ${number}. Chances: ${tryC}`

    if (number == value) {
        valueOut()
        numbers = []
        alertAux = 3
        alertPop()
        inNumber.value = ``
        display.value = ``
        inNumber.focus()
        return
    }

    display.value = listNum
    tryCF()
}

function tryCF() {
    if (tryC == 0) {
        alertAux = 4
        inNumber.value = ``
        display.value = ``
        inNumber.focus()
        alertPop()
    }

}

function alertPop() {
    switch (alertAux) {
        case 1:
            alertAux = 'Número inválido. Tente algo entre 1 e 10.'
            outAlert.textContent = alertAux
            alertDisplay.style.display = 'block'
            break;
        case 2:
            alertAux = 'Você já tentou esse número.'
            outAlert.textContent = alertAux
            alertDisplay.style.display = 'block'
            break
        case 3:
            alertAux = 'Parabéns! Você acertou. Clique em "OK" para jogar novamente.'
            outAlert.textContent = alertAux
            alertDisplay.style.display = 'block'
            btAux = true
            valueOut()
            break
        case 4:
            alertAux = 'Infelizmente suas chances acabaram. Clique em "OK" para jogar novamente.'
            outAlert.textContent = alertAux
            alertDisplay.style.display = 'block'
            btAux = true
            valueOut()
            break
    }
}

function valueOut() {
   value = parseInt(Math.ceil(Math.random() * 10))
}

valueOut()

const bt = document.querySelector('#bt').addEventListener('click', () => {
    alertDisplay.style.display = 'none'
    if (btAux == true) {
      display.value = ``
      outDica.textContent = ``
      numbers = []
      tryC = 3
      btAux = false
    }
})
