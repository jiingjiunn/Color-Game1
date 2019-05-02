console.log("Connected!")
var colorbox = document.querySelectorAll(".colorbox");
var grid = document.querySelector("#grid .container");
var h1 = document.querySelector("h1"); 
var newcolor = document.querySelectorAll(".btn")[0];
var easy = document.querySelectorAll(".btn")[1];
var hard = document.querySelectorAll(".btn")[2];
var wrong = document.querySelector("#wrong");
var difficultyHard = true; 
var boxCount = 6;
var won = false;
var inner = "";
// generate question and the correct option
var question;
var option;
initialize();

// toggle difficulty
easy.addEventListener("click", function(){
    if(difficultyHard ==true){
        difficultyHard = false;
        easy.classList.toggle("selected");
        hard.classList.toggle("selected");
    }   
    initialize();
})

hard.addEventListener("click", function(){
    if(difficultyHard == false){
        difficultyHard = true;
        hard.classList.toggle("selected");
        easy.classList.toggle("selected");
    }
    initialize();
})

// new colour
newcolor.addEventListener("click", initialize);



function newGame(){
    for(var i = 0; i < boxCount; i++){
        colorbox[i].addEventListener("click",function(){
            // console.log(this.id);
            // console.log(option);
            if(won == false){
                if(this.id == option){
                    for(var j = 0; j < boxCount; j++){
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
    
}

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
    if(difficultyHard == true){
        option = Math.floor((Math.random()*5));
        boxCount = 6;
    }else if(difficultyHard == false){
        option = Math.floor((Math.random()*2));
        boxCount = 3;
    }
    h1.innerHTML = question;
    wrong.classList.remove("win");
    wrong.innerHTML = "Try Again!";
    // creating colorboxes
    grid.innerHTML = "";
    inner = "";
    for(var i = 0; i < boxCount; i++){
        inner = inner + '<div id = "'+i+'"class="colorbox"></div>';
    }
    grid.innerHTML = inner;
    colorbox = document.querySelectorAll(".colorbox");
    newGame();
    for(var i = 0; i < boxCount; i++){
        colorbox[i].style.visibility = "visible";
        colorbox[i].style.background = randColour();
        colorbox[option].style.background = question;
        wrong.style.visibility = "hidden";
    }
    won = false;
} 