let video1 = document.querySelectorAll(".verVideo");

for (var i = 0; i < video1.length; i++){
    video1[i].addEventListener("mouseover", function () {
        this.play();
    })

    video1[i].addEventListener("mouseout", function () {
        this.pause();
    })
}

    var button = document.getElementById('mute');
    button.onmouseover = function () {
        video1.muted = true;
    };






