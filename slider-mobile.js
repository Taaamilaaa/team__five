
// Берём кнопку вперёд
let btnRight = document.querySelector(".reviews__btn--next-mobile");
let btnLeft = document.querySelector(".reviews__btn--prev-mobile");
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
    document.getElementById("current-number-mobile").value = i + 1;
})

// Объявляем событие нажатия на кнопку назад
btnLeft.addEventListener("click", function () {
    // Увеличиваем переменную i
   
    // Условие если переменная i больше или равна количеству слайдов
    if (i < 5 && i > 0) {
        
        // Удаляем класс block предыдущему слайду
        slides[i].classList.remove("block");
        // Присваиваем переменной i ноль
        //i = 0;
        // Добавляем класс block следующему слайду
        slides[i-1].classList.add("block");

    } else {
        // Иначе
        // Удаляем класс block предыдущему слайду
        i = 4;
            slides[i-4].classList.remove("block");
        
            // Добавляем класс block следующему слайду
            slides[i].classList.add("block");
        ++i
        
    }
    --i
    document.getElementById("current-number-mobile").value = i + 1;
   
})


