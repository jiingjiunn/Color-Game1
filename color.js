console.log("Connected!")
var colorbox = document.querySelectorAll(".colorbox");
var h1 = document.querySelector("h1"); 
var newcolor = document.querySelectorAll(".btn")[0];
var easy = document.querySelectorAll(".btn")[1];
var hard = document.querySelectorAll(".btn")[2];
var wrong = document.querySelector("#wrong");
var difficultyHard = true; 
var won = false;
// generate question and the correct option
var question;
var option;
initialize();

// toggle difficulty


// new colour
newcolor.addEventListener("click", initialize);
for(var i = 0; i < colorbox.length; i++){
    colorbox[i].addEventListener("click",function(){
        console.log(this.id);
        console.log(option);
        if(won == false){
            if(this.id == option){
                for(var j = 0; j < colorbox.length; j++){
                    colorbox[j].style.background = question;
                    wrong.innerHTML = "Congratulations!";
                    wrong.style.visibility = "visible";
                    wrong.classList.add("win");
                    won = true;
                }
            }else{
                this.style.background = "black";
                wrong.style.visibility = "visible";
            }
        }
    });
};



// generate random colour
function randColour(){
    var color = "RGB(" + randomNumber() + ", " + randomNumber() + ", " + randomNumber() + ")";
    return color;
}

function randomNumber(){
    return Math.floor((Math.random()*255));
}

//Function to initialize
function initialize(){
    question = randColour();
    option = Math.floor((Math.random()*5));
    h1.innerHTML = question;
    wrong.classList.remove("win");
    wrong.innerHTML = "Try Again!";
    for(var i = 0; i <= 5; i++){
        colorbox[i].style.visibility = "visible";
        colorbox[i].style.background = randColour();
        colorbox[option].style.background = question;
        wrong.style.visibility = "hidden";
    }
    won = false;
} 