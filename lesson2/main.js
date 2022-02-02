//---урок номер 2--

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 120
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 85
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 89
    },
    {
        name: "Jhon",
        age: 19,
        isMarried: false,
        scores: 100
    }
]

const getName = s => s.name

console.log(students.map(getName)) //используем имя функции в кач-ва callback
//console.log(students.map(st => st.name)) используем ЛИТЕРАЛ функции в кач-ва callback

console.log(itMap(getName, students)) // map по нашей функции

// --Мэп метод--
//объявили функцию по старинке, поэтому функция работает до ее объявления, так как она инициализируется, а стрелочная нет
function itMap(callback, array) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        //newArray[i] = itemOfNewArray тоже что и push
        newArray.push(callback(array[i]))
    }
    return newArray
}

// --Фильтер метод--
callbackFilter = (s) => {
    return s.scores > 100
}
console.log(itFilter(callbackFilter, students))

function itFilter(callback, array) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            newArray.push(array[i])
        }
    }
    return newArray;
}

const getMarried = stStatus => stStatus.isMarried //колбэк
console.log(students.filter(getMarried)) //фабричная мэп
console.log(itFilter(getMarried, students)) //наша функция
//три разные функции занимающие 3 разные ячейки в памяти но работающие одинаково и литералы одинаковые


// --Файнд метод--
function itFind(callback, array) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            return array[i];
        }
    }
}

const getJhon = s => s.name === 'Jhon' //колбэк
console.log(itFind(getJhon, students)) //наша функция
console.log(itFind(getMarried, students)) //наша функция
