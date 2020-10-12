let words_array = ["hello" , "test" , "bottle" , "sticker" , "photo" , "mouse" , "dog" , "cat" , "mask" , "bag" , "water" , "cork" , "picture"]

let score = 0
let wordsArrayPos = 0
let currentQuote = ""

// DOM selection, from top of page to bottom

// selecting score amt
let $score = document.querySelector("#score");
// selecting word display above zombie head
let $wordDisplay = document.querySelector(".word-display");
// selecting the input box
let $userInput = document.querySelector("#user_input")

let $zombieChar = document.querySelector(".zombie")


// working on display the text over zombie head

function updateWord(){
  $wordDisplay.textContent = null
  currentQuote = words_array[wordsArrayPos]
  currentQuote.split("").forEach(char => {
    let charSpan = document.createElement("span")
    charSpan.innerText = char
    $wordDisplay.appendChild(charSpan)
  })
  if(wordsArrayPos < words_array.length -1){
    wordsArrayPos++
  }
  else{
    wordsArrayPos = 0
  }
}
updateWord()  

// whenever input has a value it will activate this event listener
$userInput.addEventListener("input" , ()=> {
 curr_input_array = $userInput.value.split("")
  word_display_array = $wordDisplay.querySelectorAll("span")


  word_display_array.forEach((char , index) => {
    let currentSpan = curr_input_array[index]
    if(currentSpan == null){
      char.classList.remove("correct")
    }else if(currentSpan == char.innerText){
      char.classList.add("correct")  
  }
})
    if(word_display_array[word_display_array.length -1].classList == "correct"){
      $zombieChar.classList.remove("zombie")
      $zombieChar.classList.add("zombie-dead")
      $wordDisplay.classList.remove("word-display")
      $wordDisplay.classList.add("word-display-dead")
      $userInput.value = ""
    }
    
})



