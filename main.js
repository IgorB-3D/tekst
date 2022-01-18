class Method {
    constructor(definition, fn) {
        this.definition = definition
        this.fn = fn
    }
}

const methods = [
    new Method("Zwraca długość tekstu", function () { return this.length }),
    new Method("Zwraca znak pod indeksem", String.prototype.charAt),
    new Method("Zwraca kod znaku pod indeksem", String.prototype.charCodeAt),
    new Method("Zamienia tekst na duże litery", String.prototype.toUpperCase),
    new Method("Zamienia tekst na małe litery", String.prototype.toLowerCase),
    new Method("Zwraca pierwszy indeks znaku", String.prototype.indexOf),
    new Method("Zwraca indeks ostatniego występienia znaku", String.prototype.lastIndexOf),
    new Method("Zwraca podciąg tekstu", String.prototype.substr),
    new Method("Zwraca podciąg tekstu", String.prototype.substring),
    new Method("Zwraca podciąg tekstu", String.prototype.slice),
    new Method("Podmienia wszystkie wystąpienia wyrażenia w tekście", String.prototype.replace),
]

const menuInputs = document.querySelectorAll('.sel > input')
const header = document.querySelector('.content > h2')
const content = document.querySelector('.content > p')
const params = document.querySelectorAll('.inputPanel > div > input')
const res = document.querySelector('#res')

for (let i = 0; i < menuInputs.length; i++) {
    menuInputs[i].addEventListener('click', () => {
        header.innerText = menuInputs[i].value
        content.innerText = methods[i].definition

        let str = params[0].value
        let pr = params[1].value.split(',').map(x => x * 1)

        res.innerHTML = methods[i].fn.apply(str, pr)
    })
}