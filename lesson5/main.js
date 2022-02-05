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
];

console.log([...students].sort((x, y) => x.score - y.score)) // по очкам по возрастанию

console.log(students.sort((x, y) => x.name.toLowerCase() < y.name.toLowerCase() ? -1 : 1))// по имени по возрастанию



