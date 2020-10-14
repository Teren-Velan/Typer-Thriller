let words_array = ["hello" , "test" , "bottle" , "sticker" , "photo" , "mouse" , "dog" , "cat" , "mask" , "bag" , "water" , "cork" , "picture"]

let score = 0
let wordCounter = 0
let wordsArrayPos = 0
let currentWord = ""
let gamePlay = true


// <--------------- DOM --------------->

// creating the element
let $zombieChar = document.createElement("div")
let $zombWordDisplay = document.createElement("div")

// selecting elements
let userPoints = document.querySelector("#score") //score selector
let wordCount = document.querySelector("#word-count")
let userInput = document.querySelector("#user_input") //userinput
let zombieContainer = document.querySelector("#zombie-container")
let movingMan = document.querySelector(".man")




// setting element attributes
$zombieChar.classList.add("zombie");
$zombWordDisplay.classList.add("word-display")

// // appending DOMS
// while (gamePlay) {
  // let r00 = $zombieChar.getClientRects()
  // console.log(r00)
// }




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
  let r3 = $zombieChar.getClientRects()
  console.log(r3)
  let r4 = movingMan.getClientRects()
  console.log(r4)
  updateWordArrayPos()
  // window.requestAnimationFrame(gameStart);
}
gameStart()

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



// collision detection

// let checkDead = setInterval(function(){
//   // let manRight = parseInt(window.getComputedStyle(movingMan).getPropertyValue("right"));
//   // console.log(manRight) //974

//   let zombieleft = parseInt(window.getComputedStyle($zombieChar)
//   .getPropertyValue("y"));
//   console.log(zombieleft)//831

//   // if(zombieleft > 0 && zombieleft < 350){
//   //   console.log("wazzp")
//   // }
  
// },1000);

// checkDead

// let r1 = $zombieChar.getClientRects()
// // console.log(zombieCol)
// let r2 = movingMan.getClientRects()
// // console.log(manCol)

// let r3 = $zombieChar.getClientRects()
//  console.log(r3)
// let r4 = movingMan.getClientRects()
// console.log(r4)


// if((hitDetection(r1,r2))){
//   console.log("wazzup")
// }


