
// Берём кнопку вперёд
let btnRight1 = document.querySelector(".btnRight1");
let btnLeft1 = document.querySelector(".btnLeft1");
// Берём слайды
let slides = document.querySelectorAll(".reviews-item");
// Объявляем переменную i 
let  i = 1;
 
// Объявляем событие нажатия на кнопку вперёд
btnRight1.addEventListener("click", function () {
    switch (i) {
        case 3:
            
              slides[i].classList.remove("center");
              slides[i].classList.add("left");
              slides[i].classList.add("around");
           
                slides[i - 4].classList.remove("right");
             slides[i - 4].classList.remove("around");
             slides[i - 4].classList.add("center");

              slides[i - 1].classList.remove("left");
              slides[i - 1].classList.remove("around");
              slides[i - 1].classList.add("display-none");
           
          slides[i - 3].classList.remove("display-none");
              slides[i - 3].classList.add("around");
              slides[i - 3].classList.add("right");
            break;
            
        
   
        case 4:

                slides[i].classList.remove("around");
              slides[i].classList.remove("right");
              slides[i].classList.add("center");
           
                slides[i - 3].classList.remove("right");
             slides[i - 3].classList.remove("around");
             slides[i - 3].classList.add("center");

              slides[i - 1].classList.remove("left");
              slides[i - 1].classList.remove("around");
              slides[i - 1].classList.add("display-none");
           
          slides[i - 3].classList.remove("display-none");
              slides[i + 1].classList.add("around");
              slides[i + 1].classList.add("right");
            break;
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
    document.getElementById("mytext1").value = i + 1;
    ++i;
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


