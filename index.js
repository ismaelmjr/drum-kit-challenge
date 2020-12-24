var numberOfDrums = document.querySelectorAll(".drum").length; // create a variable containing the length of all the buttons with the class of drum.

for( i = 0; i < numberOfDrums; i++){ // create a loop using the numberOfDrum.

    document.querySelectorAll(".drum")[i].addEventListener("click", function () { // Detects what button was pressed.

        var buttonPressed = this.innerHTML; //add an event listener click to detect what button was clicked. use "this.innerHTML" to identify what button was pressed.

        makeSound(buttonPressed);
        buttonAnimation(buttonPressed);
        
       
    });
    
}

document.addEventListener("keydown", function(event) { //Get the keyboard button that was pressed when a key event occured
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key) { // create a function that passes the buttonPressed trough the key parameter. 

    switch (key) {  // use the switch statement to check for what button or key was pressed. 
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
                snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
                crash.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
            break;

        default: console.log(buttonPressed);
            
    }

}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 200);

}








