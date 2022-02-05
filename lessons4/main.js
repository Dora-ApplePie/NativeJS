const todoList_ID1 = "13kd-98kd" //v1()
const todoList_ID2 = "23kd-57kd" //v1()
const todoList_ID3 = "33kd-60kd" //v1()

const todoLists = [
    {
        id: todoList_ID1,
        title: "What to learn",
        filter: 'all',
    },
    {
        id: todoList_ID2,
        title: "What to buy",
        filter: 'completed',
    },
    {
        id: todoList_ID3,
        title: "What to drink",
        filter: 'active',
    },
]

const tasks = {
    [todoList_ID1]: [
        {id: "99ut-06kf", title: "React", isDone: false},
        {id: "99ut-06kr", title: "Redux", isDone: false},
        {id: "99ut-06kw", title: "HTML", isDone: false},
        {id: "99ut-06kz", title: "CSS", isDone: false},
    ],
    [todoList_ID2]: [
        {id: "99ut-06kf", title: "Vodka", isDone: false},
        {id: "99ut-06kf", title: "Rom", isDone: false},
        {id: "99ut-06kf", title: "Cola", isDone: false},
        {id: "99ut-06kf", title: "Martini", isDone: false},
    ],
    [todoList_ID3]: [
        {id: "99ut-06kf", title: "Food", isDone: false},
        {id: "99ut-06kf", title: "Drink", isDone: false},
        {id: "99ut-06kf", title: "Clothes", isDone: false},
        {id: "99ut-06kf", title: "Bicycle", isDone: false},
    ]
}

//обращение к массиву -> обращение к объекту и его свойству тайтл
console.log(tasks[todoList_ID1].find(t => t.id === '99ut-06kf').title)

console.log({...tasks, [todoList_ID1]: [...tasks[todoList_ID1], {id: "e-06kr", title: "Redux", isDone: false}]})
//добавление таски в ассоциативный массив

console.log(tasks[todoList_ID1]) //обращение к массиву

//--- "reduce" part 2 of lesson 4 ---

let students = [
    {
        name: 'Nick',
        age: 32,
        isMarried: false,
        score: 239
    },
    {
        name: 'Bob',
        age: 23,
        isMarried: true,
        score: 213
    },
    {
        name: 'Alex',
        age: 37,
        isMarried: false,
        score: 342
    },
];

const numbers = [1, 2, 3, 4, 7, 5, 6]

console.log(numbers.reduce((acc, elements) => {
    return acc + elements // при запуске будет в acc 1 так как в el 1, а затем и в el теперь будет 2 после в acc будет 1+2=3 и в конце будет 28
}, 0))

console.log(students.reduce((acc, el) => {
    return acc + el.score
}, 0))

console.log(students.reduce((acc, el) => {
    if (el.score >= 250){
        acc.push(el)
    }
    return acc
}, []))

//поверхностная копия массива
console.log(students.reduce((acc, el) => {
    acc.push(el)
    return acc
}, []))

//поверхностная копия массива
console.log([...students])

