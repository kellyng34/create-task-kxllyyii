const wordArray = [
    "artistic", "alkaloid","aspiring", 
    "barefoot", "barterer", "bontanist",
    "cottager", "catheter", "cesspool",
    "devoutly", "demeanor", "danseuse",
    "edifying", "enthrone", "equalize",
    "feasible", "follicle", "fourthly",
    "glazzing", "graphics", "gendarme",
    "herdsman", "huckster", "homeward",
    "incoming", "immobile", "interact",
    "jostling", "junkyard", "jewelled",
    "kilowatt", "kangaroo", "kedgeree",
    "laminate", "ligneous", "logician",
    "monoxide", "macaroni", "meekness",
    "neatness", "nontoxic", "newsroom",
    "overbold", "ofttimes", "optician",
    "perforce", "pilchard", "prideful",
    "quotient", "quackery", "quickset",
    "reducing", "reaffirm", "rashness",
    "stimulus", "sneering", "swerving",
    "turbaned", "twilight", "thoracic",
    "upstroke", "unionism", "ulterior",
    "varicose", "violator", "villager",
    "westard", "wretched", "wiriness",
    "xenotime", "xenology", "xeronate",
    "youthful", "youngish", "yeanling",
    "zucchini", "zincking", "zoneless",
    ]   

const random = Math.floor(Math.random() * wordArray.length);
console.log(random, wordArray[random]);

let x = ("random");

const input = document.querySelector(".wordInput");
const button =  document.querySelector(".button");
const startButton = document.querySelector(".start");
const container= document.querySelector(".container");
const card = document.querySelector(".card")

let inputValue = input.value;


function game(){
    startButton.addEventListener("click", (event) => {
        event.preventDefault();
        input.value="";

        // document.getElementById("thing").textContent = "random";
    })
  }
        
function insert(){
  document.querySelector("h3").textContent = "bye";
}
//   DOMSelectors.container.insertAdjacentHTML(
//     "afterbegin",
//     `<div class= "card" 
//     <h3 class="wordd></h3>
// </div>`
//   )
// }  
game()
insert()

