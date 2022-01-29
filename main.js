class Method {
    constructor(definition, fn) {
        this.definition = definition
        this.fn = fn
    }
}

const methods = [
	new Method("Właściwość length obiektu String zawiera długość ciągu w jednostkach kodu UTF-16. length jest właściwością danych tylko do odczytu wystąpień ciągu.", function () { return this.length }),
	new Method("Metoda charAt() obiektu String zwraca nowy ciąg składający się z pojedynczej jednostki kodu UTF-16 znajdującej się w określonym przesunięciu w ciągu.", String.prototype.charAt),
	new Method("Metoda charCodeAt() zwraca liczbę całkowitą z przedziału od 0 do 65535, reprezentującą jednostkę kodu UTF-16 o podanym indeksie.", String.prototype.charCodeAt),
	new Method("Metoda toUpperCase() zwraca wartość ciągu wywołującego przekonwertowaną na wielkie litery (wartość zostanie przekonwertowana na ciąg znaków, jeśli nim nie jest).", String.prototype.toUpperCase),
	new Method("Metoda toLowerCase() zwraca wartość ciągu wywołania przekonwertowanego na małe litery.", String.prototype.toLowerCase),
	new Method("Metoda indexOf(), mając jeden argument: podciąg do wyszukania, przeszukuje cały ciąg wywołujący i zwraca indeks pierwszego wystąpienia określonego podciągu. Biorąc pod uwagę drugi argument: liczbę, metoda zwraca pierwsze wystąpienie określonego podciągu o indeksie większym lub równym określonej liczbie.", String.prototype.indexOf),
	new Method("Metoda lastIndexOf(), mająca jeden argument: podciąg do wyszukania, przeszukuje cały ciąg wywołujący i zwraca indeks ostatniego wystąpienia określonego podciągu. Biorąc pod uwagę drugi argument: liczbę, metoda zwraca ostatnie wystąpienie określonego podciągu o indeksie mniejszym lub równym określonej liczbie.", String.prototype.lastIndexOf),
	new Method("Metoda substr() zwraca część ciągu, zaczynając od określonego indeksu i rozciągając się na określoną liczbę znaków później.", String.prototype.substr),
	new Method("Metoda substring() zwraca część ciągu między indeksami początkowym i końcowym lub na końcu ciągu.", String.prototype.substring),
	new Method("Metoda slice() wyodrębnia fragment ciągu i zwraca go jako nowy ciąg bez modyfikowania oryginalnego ciągu.", String.prototype.slice),
	new Method("Metoda replace() zwraca nowy ciąg z niektórymi lub wszystkimi dopasowaniami wzorca zastąpionymi przez zamiennik. Wzorzec może być ciągiem lub RegExp, a zamiennik może być ciągiem lub funkcją, która ma być wywołana dla każdego dopasowania. Jeśli wzorzec jest ciągiem, tylko pierwsze wystąpienie zostanie zastąpione.", String.prototype.replace),
]

const menuInputs = document.querySelectorAll('.sel > input')
const header = document.querySelector('.content > h2')
const content = document.querySelector('.content > p')
const params = document.querySelectorAll('.inputPanel > div > input')
const res = document.querySelector('#res')

let lastI = 0

function select(i)
{
	lastI = i

	header.innerText = menuInputs[i].value
	content.innerText = methods[i].definition

	let str = params[0].value
	let pr = params[1].value.split(',').map(x => x.trim())

	res.innerHTML = methods[i].fn.apply(str, pr)
}

for (let i = 0; i < menuInputs.length; i++)
    menuInputs[i].addEventListener('click', () => select(i))

params.forEach(x => x.addEventListener('change', () => select(lastI)))

select(0)