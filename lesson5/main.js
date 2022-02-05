//---СОРТИРОВКА СТРОК---
const names = ["майк", "Боб", "Alex", "Jobs", 100500]

console.log(names.sort().reverse()) //сортировка в обратном порядке в соответствии с таблицей юникодов
// сортировка мутирует исходный массив


//---СОРТИРОВКА ЧИСЕЛ---
const numbers = [11, 47, 34, 13, 99, 400]

console.log(numbers.sort(function (a, b) {
    if(a < b)return 1
    else return -1
}))//сортировка по убыванию

console.log(numbers.sort(function (a, b) {
        return a - b;
    }))//сортировка по возрастанию

