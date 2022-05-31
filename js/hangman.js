var words = [
    "apple",
    "house",
    "horse",
    "ground",
    "table",
    "haven",
    "bonus",
    "banana",
    "games",
    "sugar",
    "cheese",
    "student",
    "teacher",
    "youtube",
    "amazon",
    "happy",
    "fish",
    "donkey",
    "employee",
    "sad",
    "angry",
    "cherry"
  ];

var letters = document.getElementById("letters");
var prompt = document.getElementById("wrapper");
var guessEl = document.getElementById("guess");
var guessInput = document.getElementById("guessinput");
var button = document.getElementById("submit");
var restartBtn = document.getElementById("reset");


var parts = ["lefteye", "righteye", "mouth", "leftribon", "rightribon", "middleribon"];


var word = words[Math.floor(Math.random() * words.length)];


var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "🖤";
}

var remainingLetters = word.length;


letters.innerHTML = answerArray.join(" ");
var guess;
var answer;

if (remainingLetters > 0) {
  var submission = () => {
    guess = guessInput.value;
    var existingLetters = remainingLetters;


    if (guess.length !== 1) {
      alert("Please submit a single letter");
    } else {
     
      for (var j = 0; j < word.length; j++) {

        if (word[j] === guess) {
          answerArray[j] = guess;
          letters.innerHTML = answerArray.join(" ");
          remainingLetters--;
        }
      }

    if (existingLetters === remainingLetters) {
        if (parts.length > 0) {
          var part = document.getElementById(parts[0]);
          part.style.display = "block";
          parts.shift();
        }
        else {
          alert("You lost🥲 Please try again! Push the new game button");
          
        }
        
    }
      
    if (remainingLetters === 0) {
        letters.innerHTML = answerArray.join(" ");
        alert("Awesome!! You did good job😁 Push the new game button");
    }


      guessInput.value = "";
    }
  };
  
  button.addEventListener('click', submission, false)
  guessInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      submission()
    }
  }, true)
}


function colorChange() {
    var color = ["#FC5C7D", "#6A82FB", "#FFFBD5", "#CCF3EE", "#9C64CC" ];

    var num = Math.floor(Math.random() * color.length);

    var bodyTag = document.getElementById("colorCont");
    bodyTag.style.backgroundColor = color[num];
}


$('.btn').click(function() {
  var i = sessionStorage.length;
  while(i--) {
    var key = sessionStorage.key(i);
      if(/dontLoad/.test(key)) {
      sessionStorage.removeItem(key);
    }  
  }
});

