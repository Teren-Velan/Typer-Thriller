let words_array = ["bottle" , "sticker" , "photo" , "mouse" , "bag" , "water" , "cork", "curriculum" , "determined",  "cat", "engagement" , "government" , "incredibly" , "management" ,"dog" , "philosophy" , "recognized" , "situations" , "technology","mask" ,"complexity", "basically" , "test" , "breakfast" , "concerned" , "javascript" , "cascading" , "style", "sheet" , "hyper" , "text", "markup", "language", "hello", ]
 
let score = 0
let wordCounter = 0
let wordsArrayPos = Math.floor(Math.random() * words_array.length)
let currentWord = ""
let appear = false

// "picture" , "watermelon" , "appearance" , "background",

// <--------------- DOM --------------->

// creating the element
let $zombieChar = document.createElement("div")
let $zombWordDisplay = document.createElement("div")
// let modal = document.querySelector(".modal")
let modal = document.getElementById("myModal");
let modal2 = document.querySelector("#myModal2")


// selecting elements
let userPoints = document.querySelector("#score") //score selector
let wordCount = document.querySelector("#word-count")
let userInput = document.querySelector("#user_input") //userinput
let zombieContainer = document.querySelector("#zombie-container")
let movingMan = document.querySelector(".man")
let road = document.querySelector(".road")

let sweetAlert = document.querySelector(".swal-overlay")

let endScore = document.querySelector(".end-score")
let endWordCount = document.querySelector(".end-word-count")

// setting element attributes
$zombieChar.classList.add("zombie");
$zombWordDisplay.classList.add("word-display")


// // appending DOMS
// while (gamePlay) {
  // let r00 = $zombieChar.getClientRects()
  // console.log(r00)
// }

document.addEventListener("DOMContentLoaded", function(event) {     
      modal.style.display = "block"
      $zombieChar.style.display = "none"
      movingMan.style.display = "none"
      road.style.display = "none"
     
      document.addEventListener("click" , function(e){
      modal.style.display = "none"
      $zombieChar.style.display = "block"
      movingMan.style.display = "block"
      road.style.display = "block"
      appear = true
      
    })
  }

);


// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// starter()




function updateWordArrayPos(){
   if(wordsArrayPos < words_array.length -1){
    wordsArrayPos = Math.floor(Math.random() * words_array.length)
      }
      else{
        wordsArrayPos = 0
      }
}


function gameStart(){
    $zombWordDisplay.textContent = null
    currentWord = words_array[wordsArrayPos]
    console.log(wordsArrayPos)
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

  

// let zombieSpeed = 10;
// let startTime = Date.now()
// let playerX = 950;

// $zombieChar.style.transform = "translate(950px, 750px)";

function hitDetection(r1, r2) {
  return !(
      r2.left > r1.right ||
      r2.right < r1.left ||
      r2.top > r1.bottom ||
      r2.bottom < r1.top
    );  
   
}

function gameLoop(){
  // let currentTime = Date.now();
  // let dt = (currentTime - startTime) / 1000;
  // playerX -= dt * zombieSpeed
  // $zombieChar.style.transform = `translate(${playerX}px, 750px)`;

  // check intersection
  let r1 = $zombieChar.getBoundingClientRect();
  
  let r2 = movingMan.getBoundingClientRect();

  if(appear){
    if(hitDetection(r1 , r2)){
    modal2.style.display = "block"
    endScore.innerText = `Score: ${score}`
    endWordCount.innerText = `Word Count: ${wordCounter}`
    $zombieChar.style.display = "none"
    movingMan.style.display = "none"
    road.style.display = "none" 
    }
  }
  
  //  startTime = currentTime;
   window.requestAnimationFrame(gameLoop)
}
gameStart()
window.requestAnimationFrame(gameLoop)


