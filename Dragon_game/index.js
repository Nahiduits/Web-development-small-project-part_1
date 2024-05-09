document.onkeydown = function(e){
    if(e.keyCode==38){
        const animateDino = document.getElementsByClassName(".animateDino");
        const dino = document.getElementsByClassName("dino");
        dino.classList.add(animateDino);
    }
}