
// Берём кнопку вперёд
let btnRight1 = document.querySelector(".btnRight1");
let btnLeft1 = document.querySelector(".btnLeft1");
// Берём слайды
let slides = document.querySelectorAll(".reviews-item");
// Объявляем переменную i 
let  i = 1;
 
// Объявляем событие нажатия на кнопку вперёд
btnRight1.addEventListener("click", function () {
    // Увеличиваем переменную i
    
    ++i;
    // Условие если переменная i больше или равна количеству слайдов
    if (i >= slides.length) {
        // Работа с левым слайдом


        //slides[i - 1].classList.remove("block");
        //slides[i - 1].classList.remove("center");
        
        //slides[i - 1].classList.add("left");
        //slides[i - 1].classList.add("around");
//slides[i - 1].classList.remove("center");
        // Присваиваем переменной i ноль
        i = 0;
        // Добавляем класс block следующему слайду
        //slides[i].classList.add("block");
       // slides[i].classList.add("center");
        //slides[i+1].classList.add("around");
        //slides[i].classList.add("center");
    } else { // Иначе
        // Работа с левым слайдом
       // slides[i - 2].classList.remove("around");
        //slides[i - 2].classList.remove("left");
        //slides[i - 2].classList.add("display-none");

       // Работа с центральным слайдом
        //slides[i - 1].classList.remove("center");
        //slides[i - 1].classList.add("left");
        //slides[i - 1].classList.add("around");

        // Работа с правым слайдом
        //slides[i].classList.remove("right");
        //slides[i].classList.remove("around");
        //slides[i].classList.add("center");
        

        
       // slides[i].classList.remove("right");
        // Добавляем класс block следующему слайду
        //slides[i].classList.add("block");
       // slides[i].classList.add("center");
        //slides[i+1].classList.add("around");
    }
    document.getElementById("mytext1").value = i + 1;
})

// Объявляем событие нажатия на кнопку назад
btnLeft1.addEventListener("click", function () {
     document.getElementById("mytext1").value = i;
        switch (i) {
            case slides.length - 1:
                //Left slide
                slides[i - 2].classList.remove("display-none");
                slides[i - 2].classList.add("around");
                slides[i - 2].classList.add("left");
                //Center slide
                slides[i - 4].classList.remove("around");
                slides[i - 4].classList.remove("right");
                slides[i - 4].classList.add("display-none");
                //Right slide
                slides[i - 1].classList.remove("left");
                slides[i - 1].classList.remove("around");
                slides[i - 1].classList.add("center");

                slides[slides.length - 1].classList.remove("center");
                slides[slides.length - 1].classList.add("around");
                slides[slides.length - 1].classList.add("right");
                break;
            
            case 1:
                //Left slide
                slides[i - 1].classList.remove("left");
                slides[i - 1].classList.remove("around");
                slides[i - 1].classList.add("center");
                //Center slide
                slides[i].classList.remove("center");
                slides[i].classList.add("right");
                slides[i].classList.add("around");
                //Right slide
                slides[i + 1].classList.remove("right");
                slides[i + 1].classList.remove("around");
                slides[i + 1].classList.add("display-none");

                slides[slides.length - 1].classList.remove("display-none");
                slides[slides.length - 1].classList.add("left");
                slides[slides.length - 1].classList.add("around");
                break;
   
            case 0:
                //Left slide
                slides[slides.length - 2].classList.remove("display-none");
                slides[slides.length - 2].classList.add("around");
                slides[slides.length - 2].classList.add("left");
                //Center slide
                slides[i].classList.remove("center");
                slides[i].classList.add("right");
                slides[i].classList.add("around");
                //Right slide
                slides[i + 1].classList.remove("right");
                slides[i + 1].classList.remove("around");
                slides[i + 1].classList.add("display-none");

                slides[slides.length - 1].classList.remove("left");
                slides[slides.length - 1].classList.remove("around");
                slides[slides.length - 1].classList.add("center");
                break;
                
            default:
                //Left slide
                slides[i].classList.remove("center");
                slides[i].classList.add("around");
                slides[i].classList.add("right");
                //Center slide
                slides[i + 1].classList.remove("around");
                slides[i + 1].classList.remove("right");
                slides[i + 1].classList.add("display-none");
                //Right slide
                slides[i - 1].classList.remove("left");
                slides[i - 1].classList.remove("around");
                slides[i - 1].classList.add("center");

                slides[i - 2].classList.remove("display-none");
                slides[i - 2].classList.add("around");
                slides[i - 2].classList.add("left");
            
                break;
        
    }
     
    if (i <= 0) {
        i = 5;
    } 
   
    
   
 
     --i;
    //document.getElementById("mytext1").value = i + 1;
    document.getElementById("mytext2").value = slides.length;
})


