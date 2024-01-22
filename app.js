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
console.log(wordArray[random]);

let x = ("random");

const input = document.querySelector(".wordInput");
const button1 =  document.querySelector(".btn");
const button2 = document.querySelector(".btnn");
const container= document.querySelector(".container");
const card = document.querySelector(".card")

let inputValue = input.value;

let buttons = document.querySelector(".btn", ".btnn")


function insert(){
    button1.addEventListener("click", (e) => {
    e.preventDefault();
    input.value="";
    document.querySelector("h3").textContent = (wordArray[random]);
    })
  }

// setTimeout(function(){
//     console.log("Hello World");
// }, 2000);

function submit(){
    button2.addEventListener("click", () =>{
    input.value="";
    document.querySelector("h3").textContent ="";

    })
}

function check(){
  button2.addEventListener("submit", () => {
  if ((input.value) == (wordArray[random])) {
    console.log("correct")}
  else {
    console.log("incorrect")
}})}


  submit()
  insert()
  check()

//   DOMSelectors.container.insertAdjacentHTML(
//     "afterbegin",
//     `<div class= "card" 
//     <h3 class="wordd"></h3>
// </div>`
//   )


