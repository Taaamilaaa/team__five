
function Function() {
        var dots = document.getElementById("dotsa");
        var moreText = document.getElementById("morea");
        var btnText = document.getElementById("myBtna");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Less";
            moreText.style.display = "inline";
        }
    }