function readMore() {
    var mydots = document.getElementById("mydots")
    var all = document.getElementById("all");
    var btn = document.getElementById("btn");
    
    if (mydots.style.display === 'none') {
        mydots.style.display === 'inline';
        btn.innerHTML = 'Read more';
        all.style.display = 'none';
    }
    else {
        mydots.style.display = 'none';
        btn.innerHTML = 'Lees';
        all.style.display = 'inline';
    }
}

