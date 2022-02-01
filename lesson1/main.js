//CRUD
//Обновление интерфейса при изменении state =-> передача модифицированной копии state
//Всегда будем брать те данные которые уже отрисованны, делать их копию, вносить изменения и обратно передавать реакту
//реакт получает данные и проводит сравнение, получил он тот же объект или другой, если другой - перерисовка интерфейса

//Приметивы - string, number, bigInt, boolean

// Объекты - функции, объекты и массивы
//1. Более сложная структура данных
//2. Умения от рождения - наличие методов и св-в
//3. Ссылочный тип данных (сравнение по ссылке, переменная хранит ссылку на данный объект)

const studentFirst = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Donald"] // ссылка № А-345
} // ячейка памяти #789

const studentSecond = {} // ячейка #123

console.log(studentFirst === studentSecond) //False т.к. в переменной храниться ссылка (адресс) на объект - 789 ??? 123

const newStudent = studentFirst // присвоили ссылку на другой объект
newStudent.name = "Helga" // переделали общий объект
console.log(newStudent)
console.log(studentFirst)

const copyStudent = {...studentFirst} //#243 новая сущность - объект
// три точки это спред оператор - копирование объекта!!
// ...StudentFirst это анологично: {
//     name: studentFirst.name,
//     age: studentFirst.age,
//     friends: studentFirst.friends
//     }

copyStudent.name = "Bob"
console.log(copyStudent)
console.log(studentFirst)

copyStudent.friends.push("Ann") // ann добавится ко всем
console.log(copyStudent)
console.log(studentFirst)

const trueCopyStudent = {
    ...studentFirst, friends: [...studentFirst.friends], // #A-098
    name: "John"
} //#567 - глубокое копирование

trueCopyStudent.friends.pop()
console.log(trueCopyStudent)
console.log(studentFirst)

//--Деструктуризация--

function func(num) {
    const fn = () => console.log(`Число: ${num}`) // Замыкание
    return [num, fn]
}

//const toolKit = func(100)
//const hundred = toolKit[0]
//const getHundred = toolKit[1]

const [hundred, getHundred] = func(100) // = [num, fn] - диструктурирующее присваивание
const [ten, getTen] = func(10)

alert(hundred)
getHundred();

//Тема 3 мап

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

const copyStudents1 = students.map(s => s) //поверхностная копия

const copyStudents2 = students.map(s => (s.name === "Nick") ? {...s, scores: s.scores + 10} : s) //глубокая копия
console.log(copyStudents2)

const copyStudents3 = students.map(s => {
    return {...s}
}) //глубокая копия

const getName = (st) => st.name   //кол бэк функция (вставляем в мап ниже)
const names = students.map(getName)  //метод мэп не мутирует исходный массив

const names2 = students.map(st => `Hi, I'm ${st.name}. I'm ${st.age}.`)

console.log(names)
console.log(names2)

//--DEEP COPY VALERA SAFRONOV TASKS--

//1
let man = {
    name: 'John',
    age: 28
};

let manFullCopy = {...man}


// 2. Array of primitives
let numbers = [1, 2, 3];

let numbersFullCopy = [...numbers]

// 3. Object inside an object
let man1 = {
    name: 'John',
    age: 28,
    mother: {
        name: 'Kate',
        age: 50
    }
};

let man1FullCopy = {...man1, mother: {...man1.mother}}


// 4. Array of primitives inside an object
let man2 = {
    name: 'John',
    age: 28,
    friends: ["Peter", "Steven", "William"]
};

let man2FullCopy = {...man2, friends: [...man2.friends]}


// 5 Array of objects
let people = [
    {name: "Peter", age: 30},
    {name: "Steven", age: 32},
    {name: "William", age: 28}
];


let peopleFullCopy = people.map(p => {
    return {...p}
})


// 6 Array of objects inside object
let man3 = {
    name: 'John',
    age: 28,
    friends: [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ]
};

let man3FullCopy = {...man3, friends: [...man3.friends]}


// 7 Object inside an object, inside an object
let man4 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        }
    }
};

let man4FullCopy = {...man4, mother: {...man4.mother, work: {...man4.mother.work}}}

// 8 Array of objects inside object -> object
let man5 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {name: "Kevin", age: 80},
            {name: "Jennifer", age: 78},
        ]
    }
};

let man5FullCopy = {
    ...man5,
    mother: {
        ...man5.mother,
        work: {...man5.mother.work},
        parents: man5.mother.parents.map(p => {
            return {...p}
        })
    }
}


// 9 Object inside an object -> array -> object ->  object
let man6 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht"
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi"
                }
            },
        ]
    }
};

let man6FullCopy = {
    ...man6,
    mother: {
        ...man6.mother,
        work: {
            ...man6.mother.work
        },
        parents: man6.mother.parents.map(p => {
            return {...p, favoriteDish: {...p.favoriteDish}}
        })
    }
}


//10 Array of objects inside an object -> object -> array -> object ->  object
let man7 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht",
                    ingredients: [
                        {title: "beet", amount: 3},
                        {title: "potatoes", amount: 5},
                        {title: "carrot", amount: 1},
                    ]
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi",
                    ingredients: [
                        {title: "fish", amount: 1},
                        {title: "rise", amount: 0.5}
                    ]
                }
            },
        ]
    }
};

let man7FullCopy = {
    ...man7,
    mother: {...man7.mother,
        work: {...man7.mother.work},
        parents: man7.mother.parents.map(p => {
            return {...p, favoriteDish: {...p.favoriteDish, ingredients: p.favoriteDish.ingredients.map(i => {
                return {...i}
                    })} }
        })
    },
}



