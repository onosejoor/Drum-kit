var buttonNumber = document.querySelectorAll(".drum").length

for(var i = 0; i<buttonNumber; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;   
        sound(buttonInnerHTML);
        animation(buttonInnerHTML);
    });
}

document.addEventListener("keyup", function (hi) {
    sound(hi.key);
    animation(hi.key);
});

function sound (key) {
switch (key) {
    case "w":
        var tom1 = new Audio('./tom-1.mp3');
        tom1.play();
        break;

        case "a":
            var tom2 = new Audio('./tom-2.mp3');
        tom2.play();
            break;
            
        case "s":
              var tom3 = new Audio('./tom-3.mp3');
        tom3.play();
           break;

        case "d":
              var tom4 = new Audio('./tom-4.mp3');
        tom4.play();
            break;

        case "j":
               var crash = new Audio('./sounds_crash.mp3');
               crash.play();
            break;
        case "k":
               var kick = new Audio('./kick.wav');
              kick.play();
            break;

        case "l":
                var snare = new Audio('./snare.mp3');
             snare.play();
            break;
    default:
        break;
}
}
function animation (currentKey) {
    switch (currentKey) {
        case "w":
            var activeKey = document.querySelector(".w");
            activeKey.classList.add("pressed");
            setTimeout(function () {
                activeKey.classList.remove("pressed")},
                100);
            break;
    
            case "a":
                var activeKey = document.querySelector(".a");
                activeKey.classList.add("pressed");
                setTimeout(function () {
                    activeKey.classList.remove("pressed")},
                    100);
                break;
                
            case "s":
                var activeKey = document.querySelector(".s");
                activeKey.classList.add("pressed");
                setTimeout(function () {
                    activeKey.classList.remove("pressed")},
                    100);
               break;

               case "d":
                var activeKey = document.querySelector(".d");
                activeKey.classList.add("pressed");
                setTimeout(function () {
                    activeKey.classList.remove("pressed")},
                    100);
                break;
        
                case "j":
                    var activeKey = document.querySelector(".j");
                    activeKey.classList.add("pressed");
                    setTimeout(function () {
                        activeKey.classList.remove("pressed")},
                        100);
                    break;
                    
                case "k":
                    var activeKey = document.querySelector(".k");
                    activeKey.classList.add("pressed");
                    setTimeout(function () {
                        activeKey.classList.remove("pressed")},
                        100);
                   break;

                   case "l":
                    var activeKey = document.querySelector(".l");
                    activeKey.classList.add("pressed");
                    setTimeout(function () {
                        activeKey.classList.remove("pressed")},
                        100);
                   break;
                   default:
                    break;
}

}
