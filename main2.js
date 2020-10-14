let words_array = ["hello" , "test" , "bottle" , "sticker" , "photo" , "mouse" , "dog" , "cat" , "mask" , "bag" , "water" , "cork" , "picture"]

let score = 0
let wordCounter = 0
let wordsArrayPos = Math.floor(Math.random() * words_array.length)
let currentWord = ""
let gamePlay = true
let gameBegin = true


// <--------------- DOM --------------->

// creating the element
let $zombieChar = document.createElement("div")
let $zombWordDisplay = document.createElement("div")
// let modal = document.querySelector(".modal")
var modal = document.getElementById("myModal");

// selecting elements
let userPoints = document.querySelector("#score") //score selector
let wordCount = document.querySelector("#word-count")
let userInput = document.querySelector("#user_input") //userinput
let zombieContainer = document.querySelector("#zombie-container")
let movingMan = document.querySelector(".man")
let road = document.querySelector(".road")




// setting element attributes
$zombieChar.classList.add("zombie");
$zombWordDisplay.classList.add("word-display")


// // appending DOMS
// while (gamePlay) {
  // let r00 = $zombieChar.getClientRects()
  // console.log(r00)
// }

document.addEventListener("DOMContentLoaded", function(event) {
// if(gameBegin){
    modal.style.display = "block"
    $zombieChar.style.display = "none"
    movingMan.style.display = "none"
    road.style.display = "none"
    document.addEventListener("click" , function(e){
      modal.style.display = "none"
      $zombieChar.style.display = "block"
      movingMan.style.display = "block"
      road.style.display = "block"
      
    })
     
  }
// }

);


// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// starter()




function updateWordArrayPos(){
   if(wordsArrayPos < words_array.length -1){
        wordsArrayPos++
      }
      else{
        wordsArrayPos = 0
      }
}


function gameStart(){
    $zombWordDisplay.textContent = null
    currentWord = words_array[wordsArrayPos]
    currentWord.split("").forEach(char => {
    let charSpan = document.createElement("span")
    charSpan.innerText = char
    $zombWordDisplay.appendChild(charSpan)
    $zombieChar.appendChild($zombWordDisplay)
    zombieContainer.appendChild($zombieChar)
  })
  updateWordArrayPos()
}



// Event Listener for userInput
userInput.addEventListener("input" , () =>{
  let current_input_array = userInput.value.split("")
  
  let word_display_array = $zombWordDisplay.querySelectorAll("span")

  word_display_array.forEach((char , index) =>{
    let currentSpan = current_input_array[index]
    if(currentSpan == null){
      char.classList.remove("correct")
    }else if(currentSpan === char.innerText){
      char.classList.add("correct")
    }
  })

  if(word_display_array[word_display_array.length -1].classList == "correct"){
    // $zombieChar.classList.add("zombie-dead") 
    // $zombieChar.classList.remove("zombie-dead")
    zombieContainer.removeChild($zombieChar)
    gameStart()
    zombieContainer.appendChild($zombieChar)
    userInput.value = ""
    userPoints.innerText = `Score: ${score += 10}`
    wordCount.innerText = `Word Count: ${wordCounter += 1}`
  }
})



let zombieSpeed = 100;
let startTime = Date.now()
let playerX = 950;

$zombieChar.style.transform = "translate(950px, 750px)";

function hitDetection(r1, r2) {
  return !(
      r2.left > r1.right ||
      r2.right < r1.left ||
      r2.top > r1.bottom ||
      r2.bottom < r1.top
    );
}

function gameLoop(e){
  let currentTime = Date.now();
  // console.log(currentTime)
  // console.log(startTime)
  let dt = (currentTime - startTime) / 1000;
  playerX -= dt * zombieSpeed
  // console.log(playerX)
  $zombieChar.style.transform = `translate(${playerX}px, 750px)`;

  // check intersection
  let r1 = $zombieChar.getBoundingClientRect();
  let r2 = movingMan.getBoundingClientRect();

  if(hitDetection(r1,r2)){
    $zombieChar.style.display = "none"
    movingMan.style.display = "none"
    road.style.display = "none"
      // swal({
      //   title: "Too Slow",
      //   text: "The zombie killed Micheal!",
      //   // text: `Score: ${score}`,
      //   icon: "success",
      //   button: "Try Again",
      // });
      

  }  

   startTime = currentTime;
   window.requestAnimationFrame(gameLoop)
}
gameStart()
window.requestAnimationFrame(gameLoop)




// Get the modal
// var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}