var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",playAudio);
}

function playAudio(){
    var crash_audio = new Audio('sounds/crash.mp3');
    var kick_audio = new Audio('sounds/kick-bass.mp3');
    var snare_audio = new Audio('sounds/snare.mp3');
    var tom_1_audio = new Audio('sounds/tom-1.mp3');
    var tom_2_audio = new Audio('sounds/tom-2.mp3');
    var tom_3_audio = new Audio('sounds/tom-3.mp3');
    var tom_4_audio = new Audio('sounds/tom-4.mp3');
    console.log(this.innerHTML);
    switch (this.innerHTML) {
        case 'w':
            tom_1_audio.play();
            break;
        case 'a':
            tom_2_audio.play();
            break;
        case 's':
            tom_3_audio.play();
            break;
        case 'd':
            tom_4_audio.play();
            break;
        case 'j':
            snare_audio.play();
            break;
        case 'k':
            crash_audio.play();
            break;
        case 'l':
            kick_audio.play();
            break;
    }
}

