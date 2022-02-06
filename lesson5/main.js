//---СОРТИРОВКА СТРОК---
const names = ["майк", "Боб", "Alex", "Jobs", 100500]

console.log(names.sort().reverse()) //сортировка в обратном порядке в соответствии с таблицей юникодов
// сортировка мутирует исходный массив


//---СОРТИРОВКА ЧИСЕЛ---
const numbers = [11, 47, 34, 13, 99, 400]

console.log(numbers.sort(function (a, b) {
    if (a < b) {
        return 1
    } else {
        return -1
    }
}))//сортировка по убыванию

console.log(numbers.sort((a, b) => a - b).reverse())//сортировка по убыванию

console.log(numbers.sort(function (a, b) {
    return a - b;
}))//сортировка по возрастанию


//---СОРТИРОВКА ОБЪЕКТОВ---
let students = [
    {
        name: 'Nick',
        age: 32,
        isMarried: false,
        score: 42
    },
    {
        name: 'Bob',
        age: 23,
        isMarried: true,
        score: 888
    },
    {
        name: 'Alex',
        age: 37,
        isMarried: false,
        score: 666
    },
    {
        name: 'kate',
        age: 37,
        isMarried: false,
        score: 666
    }
];

console.log([...students].sort((x, y) => x.score - y.score)) // по очкам по возрастанию

console.log([...students].sort((x, y) => x.name.toLowerCase() < y.name.toLowerCase() ? -1 : 1))// по имени по возрастанию


//--МОЯ СОРТИРОВКА--
const arrayNum = [80, 5, 1000, 90, 22, 4, 1, 10, 55, 41, -30]

const mySort = (arr) => {
    let sortArr = [];
    const copyArr = [...arr]
    for (let i = 0; i < copyArr.length; i++) {
        sortArr.push(...arr.splice(arr.indexOf(Math.min(...arr)), 1))
    }
    return sortArr
}

console.log(mySort(arrayNum))

//--ПУЗЫРЬКОВАЯ СОРТИРОВКА--

const newArray = [80, 5, 1000, 90, 22, 4, 1, 10, 55, 41, -20]

const sorting = (arr) => {
    let isSorted;
    for (let i = 0; i < arr.length; i++) {
        isSorted = true
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                isSorted = false;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        if (isSorted) {
            return arr
        }
    }
}
console.log(sorting(newArray))