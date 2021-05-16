
// Берём кнопку вперёд
let btnRight = document.querySelector(".btnRight");
let btnLeft = document.querySelector(".btnLeft");
// Берём слайды
let slides = document.querySelectorAll(".reviews-item");
// Объявляем переменную i 
let i = 1;
 
// Объявляем событие нажатия на кнопку вперёд
btnRight.addEventListener("click", function () {
    // Увеличиваем переменную i
    
    ++i
    // Условие если переменная i больше или равна количеству слайдов
    if (i >= slides.length) {
        // Удаляем класс block предыдущему слайду
        slides[i-1].classList.remove("block");
        // Присваиваем переменной i ноль
        i = 0;
        // Добавляем класс block следующему слайду
        slides[i].classList.add("block");
    } else { // Иначе
        // Удаляем класс block предыдущему слайду
        slides[i-1].classList.remove("block");
        // Добавляем класс block следующему слайду
        slides[i].classList.add("block");
    }
    document.getElementById("mytext").value = i + 1;
})

// Объявляем событие нажатия на кнопку назад
btnLeft.addEventListener("click", function () {
    // Увеличиваем переменную i
   
    // Условие если переменная i больше или равна количеству слайдов
    if (i < 3 && i > 0) {
        
        // Удаляем класс block предыдущему слайду
        slides[i].classList.remove("block");
        // Присваиваем переменной i ноль
        //i = 0;
        // Добавляем класс block следующему слайду
        slides[i-1].classList.add("block");

    } else {
        // Иначе
        // Удаляем класс block предыдущему слайду
        i = 2;
            slides[i-2].classList.remove("block");
        
            // Добавляем класс block следующему слайду
            slides[i].classList.add("block");
        ++i
        
    }
    --i
    document.getElementById("mytext").value = i + 1;
   
})


