var RGSlides = document.querySelectorAll('.RGSlides li'); //собираем все li элементы в ul классе RGSlides
var RGSkContKnobs = document.querySelector('.RGSlCont-knobs'); //берем элемент с клссаом RGSlCont-knobs (добавим туда кнопки)
var RGcurrentSlide = 0; //текущий слайд по умолчению
var RGintervalTime = 4000; //время переключение слайда
var RGSlideTransition = setInterval(RGNextSlide, RGintervalTime); // цикл переключения слайда

for(var i=0; i<RGSlides.length; i++){
    RGaddKnobs(i);
}
function RGaddKnobs(num){
    var RGcreateSliderKnob = document.createElement('button'); //создаем эдемент
    RGcreateSliderKnob.setAttribute('onclick', 'RGKnopSellSlide(' +num+ ')'); //задаем ему атрибут клика и заставляем при клике обращатся к класу и перезаем ему ему параметр
    if(num == 0){ // если элемент первый, то присваиваем ему значение select по умолчанию
       RGcreateSliderKnob.classList.add('RGSliderKnob-select');
       }
    RGSkContKnobs.appendChild(RGcreateSliderKnob);
}
function RGKnopSellSlide(num){
    RGToggleSlide(num);
    clearInterval(RGSlideTransition);
    RGSlideTransition = setInterval(RGNextSlide, RGintervalTime);
}

function RGNextSlide(){ //следующий слайд
    RGToggleSlide(RGcurrentSlide + 1);
    clearInterval(RGSlideTransition); //удаляем интервал запуска
    RGSlideTransition = setInterval(RGNextSlide, RGintervalTime); // запускаем интервал запуска
    // удалять и запускать интервал необходимо, иначе первый интервал бует вести отчет для переключения, при этом если листать слайды то таймер не будет считать что слайд перелиснулся.
}
function RGЗreviousSlide() // предыдущий слйд
{
    RGToggleSlide(RGcurrentSlide - 1);
    clearInterval(RGSlideTransition);
    RGSlideTransition = setInterval(RGNextSlide, RGintervalTime);
}

var RGSlideKnob = document.querySelectorAll('.RGSlCont-knobs button'); //собираем все button элементы

function RGToggleSlide(num){ //функция смена слайда
    RGSlides[RGcurrentSlide].classList.remove('RGSlide-select'); //удаляем класс
    RGSlideKnob[RGcurrentSlide].classList.remove('RGSliderKnob-select');
    RGcurrentSlide = (RGSlides.length + num) % RGSlides.length; // вписываем след. слайд
    RGSlides[RGcurrentSlide].className = 'RGSlide-select'; // присваеваем сл слайду новый класс
    RGSlideKnob[RGcurrentSlide].className = 'RGSliderKnob-select';
}