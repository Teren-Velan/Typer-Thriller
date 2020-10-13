// let words_array = ["hello" , "test" , "bottle" , "sticker" , "photo" , "mouse" , "dog" , "cat" , "mask" , "bag" , "water" , "cork" , "picture"]

// let score = 0
// let wordsArrayPos = 0
// let currentQuote = ""

// // DOM selection, from top of page to bottom

// // selecting score amt
// let $score = document.querySelector("#score");
// // selecting word display above zombie head
// let $wordDisplay = document.querySelector(".word-display");
// // selecting the input box
// let $userInput = document.querySelector("#user_input")
// // selecting the zombie container
// $zombieContainer = document.querySelector("#zombie-container")
// // selecting the zombie class
// let $zombieChar = document.querySelector(".zombie")

// let nextZombie = document.createElement("div")
// let nextZombieWordDisplay = document.createElement("div")



// // setting attritbutes
// nextZombie.classList.add("zombie")
// nextZombieWordDisplay.classList.add("word-display")
// nextZombie.appendChild(nextZombieWordDisplay)


// // working on display the text over zombie head

// function updateWord(){
//   nextZombieWordDisplay.textContent = null
//   $wordDisplay.textContent = null
//   currentQuote = words_array[wordsArrayPos]
//   currentQuote.split("").forEach(char => {
//     let charSpan = document.createElement("span")
//     charSpan.innerText = char
//     $wordDisplay.appendChild(charSpan)
//   })
  
//   if(wordsArrayPos < words_array.length -1){
//     wordsArrayPos++
//   }
//   else{
//     wordsArrayPos = 0
//   }
//   currentQuote.split("").forEach(char => {
//     let charSpan = document.createElement("span")
//     charSpan.innerText = char
//     nextZombieWordDisplay.appendChild(charSpan)
    
//   })
 

// }
// updateWord()  

// // whenever input has a value it will activate this event listener
// $userInput.addEventListener("input" , ()=> {
//  curr_input_array = $userInput.value.split("")
//   word_display_array = $wordDisplay.querySelectorAll("span")


//   word_display_array.forEach((char , index) => {
//     let currentSpan = curr_input_array[index]
//     if(currentSpan == null){
//       char.classList.remove("correct")
//     }else if(currentSpan == char.innerText){
//       char.classList.add("correct")  
//   }
// })
//     if(word_display_array[word_display_array.length -1].classList == "correct"){
//       $zombieContainer.removeChild($zombieChar)
//       $zombieContainer.appendChild(nextZombie)
//       nextZombieWordDisplay.classList.remove("word-display")
//       nextZombieWordDisplay.classList.add("word-display-dead")
//       // $zombieChar.classList.remove("zombie")
//       // $zombieChar.classList.add("zombie-dead")
//       // $wordDisplay.classList.remove("word-display")
//       // $wordDisplay.classList.add("word-display-dead")
//       $userInput.value = ""

//     }
    

// })


// // redo your functions

// // make a new <div class="zombie"><div class="word-display"></div></div>(HTML line 19-21)

// // then redo all functions to only include these new selfmade in DOM elements.

// // for the event listener, do a add and remove the entire zombie element(not the container just the element)

// // figure out a way to make sure the words always keeps coming out.

// // even better if can find a way to speed up the keyframe from DOM after each monster comes out

// // try to organise into functions for cleaner and neater code




// // do not so priority todo list
// // add a 