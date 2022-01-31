//---урок номер 3--
//событие =>
//генерирует объект, со сведениями о произошедшем событии =>
//вызов функции-обработчика с этим объектом в качестве параметра

//объект, со сведениями о событии => e && ev && event
//Функция => обработчик, handler, сдушатель, listener, подписчик, subscriber
//eTarget => элемент, который сгенерировал событие(первый получил клик)
//e.currentTarget => элемент, который вызвал обработчик в процессе всплытия, оно меняется при всплытии события

const small = document.getElementById('small')
const med = document.getElementById('medium')
const big = document.getElementById('big')



function onClickHandler(e) {
    e.stopPropagation() // остановка распространения по цепочке родителя - выполнил и пока
    console.log(e.target.name)
    //return undefined если нет ретурна
}

//() - вызов функции, а название это ссылка на функцию
// в качестве обработчика исп или имя или литерал! но не вызов
small.onclick = onClickHandler
big.onclick = () => alert('yo')
// big.onclick = onClickHandler

//small.onclick = null //обработчика больше нет

//small.addEventListener('click', onClickHandler) //позволяет исп-ть несколько функций  и принимает 3-й параметр для обработки события не ток на стадии всплытия
//small.removeEventListener('click', onClickHandler)//обработчика больше нет