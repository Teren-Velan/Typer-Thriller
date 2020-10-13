let words_array = ["hello" , "test" , "bottle" , "sticker" , "photo" , "mouse" , "dog" , "cat" , "mask" , "bag" , "water" , "cork" , "picture"]

let score = 0
let wordsArrayPos = 0
let currentWord = ""


// <--------------- DOM --------------->


// creating the element
let $zombieChar = document.createElement("div")
let $zombWordDisplay = document.createElement("div")

// selecting elements
let userPoints = document.querySelector("#score") //score selector
let userInput = document.querySelector("#user_input") //userinput
let zombieContainer = document.querySelector("#zombie-container")



// setting element attributes
$zombieChar.classList.add("zombie");
$zombWordDisplay.classList.add("word-display")


// appending DOMS


// function for updating word

function appendWord(){
   $zombWordDisplay.textContent = null
    currentWord = words_array[wordsArrayPos]
    currentWord.split("").forEach(char => {
    let charSpan = document.createElement("span")
    charSpan.innerText = char
    $zombWordDisplay.appendChild(charSpan)
    $zombieChar.appendChild($zombWordDisplay)
    zombieContainer.appendChild($zombieChar)
  })

   if(wordsArrayPos < words_array.length -1){
        wordsArrayPos++
      }
      else{
        wordsArrayPos = 0
      }
}
appendWord()


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
    zombieContainer.removeChild($zombieChar)
    appendWord()
    zombieContainer.appendChild($zombieChar)
    userInput.value = ""
  }
})