

    


// Берём кнопку вперёд
let btnPrevD = document.querySelector(".reviews__btn--prev-desktop");
let btnNextD = document.querySelector(".reviews__btn--next-desktop");
// Берём слайды
let slides = document.querySelectorAll(".reviews-item");
// Объявляем переменную i 
let i = 1;

//Функция для контроля и вывода количества отзывов
  window.onload = function () {
      i = 1;

        document.getElementById("all-number-mobile").value = slides.length;
      document.getElementById("all-number-desktop").value = slides.length;
     
 };
    

// Объявляем событие нажатия на кнопку вперёд
btnNextD.addEventListener("click", function () {
    //alert(i);
   
    switch (i) {
        case 3:
            
              slides[i].classList.remove("center");
              slides[i].classList.add("left");
              slides[i].classList.add("around");
           
                slides[i + 1].classList.remove("right");
             slides[i + 1].classList.remove("around");
             slides[i + 1].classList.add("center");

              slides[i - 1].classList.remove("left");
              slides[i - 1].classList.remove("around");
              slides[i - 1].classList.add("display-none");
           
          slides[i - 3].classList.remove("display-none");
              slides[i - 3].classList.add("around");
              slides[i - 3].classList.add("right");
            break;
            
        
   
        case 4:

                slides[i].classList.remove("center");
              slides[i].classList.add("left");
              slides[i].classList.add("around");
           
                slides[i - 4].classList.remove("right");
             slides[i - 4].classList.remove("around");
             slides[i - 4].classList.add("center");

              slides[i - 3].classList.remove("display-none");
              slides[i - 3].classList.add("around");
              slides[i - 3].classList.add("right");
           
          slides[i - 1].classList.add("display-none");
              slides[i - 1].classList.remove("around");
            slides[i - 1].classList.remove("left");
            
            i = -1;
            break;
            
         case 0:

               slides[i].classList.remove("center");
               slides[i].classList.add("left");
               slides[i].classList.add("around");
           
              slides[i + 1].classList.remove("right");
              slides[i + 1].classList.remove("around");
              slides[i + 1].classList.add("center");

               slides[i + 2].classList.remove("display-none");
               slides[i + 2].classList.add("around");
               slides[i + 2].classList.add("right");
           
               slides[i + 4].classList.add("display-none");
               slides[i + 4].classList.remove("around");
               slides[i + 4].classList.remove("left");
             break;
                
        default:
                slides[i].classList.remove("center");
              slides[i].classList.add("left");
              slides[i].classList.add("around");
           
          slides[i + 1].classList.remove("right");
              slides[i + 1].classList.remove("around");
              slides[i + 1].classList.add("center");

              slides[i - 1].classList.remove("left");
              slides[i - 1].classList.remove("around");
              slides[i - 1].classList.add("display-none");
           
          slides[i + 2].classList.remove("display-none");
              slides[i + 2].classList.add("around");
              slides[i + 2].classList.add("right");
            
            break;
    }
    
    ++i;
    document.getElementById("current-number-desktop").value = i + 1;
})



// Объявляем событие нажатия на кнопку назад
btnPrevD.addEventListener("click", function () {
   
    //alert(i);
   
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
   
    
    document.getElementById("current-number-desktop").value = i;
    --i;
})
 
     
    //document.getElementById("mytext1").value = i + 1;
   


