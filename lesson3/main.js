//---урок номер 3--
//событие =>
//,браузер генерирует объект, со сведениями о произошедшем событии => event
// вызов функции-обработчика с этим объектом в качестве параметра

//объект, со сведениями о событии => e && ev && event
//Функция => обработчик, handler, сдушатель, listener, подписчик, subscriber
//eTarget => элемент, который сгенерировал событие(первый получил клик)
//e.currentTarget => элемент, который вызвал обработчик в процессе всплытия, оно меняется при всплытии события

const small = document.getElementById('small')
const medium = document.getElementById('medium')
const big = document.getElementById('big')

small.addEventListener('click', handler)
medium.addEventListener('click', handler)
big.addEventListener('click', handler)


function handler(e){
    console.log(e.target)
}

function onClickHandler(e) {
    alert('yo')
    e.stopPropagation() // остановка распространения по цепочке родителя -> выполнил и пока
    console.log(e.target.name)
    //return undefined если нет ретурна
}

//() - вызов функции, а название это ссылка на функцию
// в качестве обработчика исп или имя или литерал! но не вызов
small.onclick = onClickHandler
big.onclick = () => alert('yo')
// small.onclick = null //обработчика больше нет, мы его сняли

medium.addEventListener('click', onClickHandler) //позволяет исп-ть несколько функций  и принимает 3-й параметр для обработки события не ток на стадии всплытия
// medium.removeEventListener('click', onClickHandler)//удаление -> обработчика больше нет

medium.addEventListener('click', () => {alert('HI')}) // сработает при вызове и после отрисовки
//medium.addEventListener('click', alert('HI')) // сработает при загрузке страницы перед отрисовкой, так как передали параметр в функцию