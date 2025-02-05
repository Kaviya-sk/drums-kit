var drumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML)
  buttonAnimation(buttonInnerHTML)

  switch (buttonInnerHTML) {
    case "w":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(this.innerHTML);
      break;
  }
}


document.addEventListener("keypress", function(event){
makeSound(event.key); // which key board key was pressed
buttonAnimation(event.key)
});

function makeSound(key){
  switch (key) {
    case "w":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(this.innerHTML);
      break;
  }
}


function buttonAnimation(currentKey){
var activeButton= document.querySelector("." +currentKey);
activeButton.classList.add("pressed");

setTimeout(function() {
  activeButton.classList.remove("pressed");
}, 100);
}


// var audio= new Audio("/sounds/tom-1.mp3");
// audio.play();

// this---The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.


// document.addEventListener("keypress", function() {
//   alert("pressed");
// })
