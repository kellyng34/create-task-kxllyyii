const wordArray = [
  "art","amaranthaceous","aspiring",
  "barefoot","barterer","beguilementss",
  "cottager","calamostachys","cesspool",
  "delight","diaminogen","daily",
  "edifying","electromagnetics","equalize",
  "fore","follicle","framboesia",
  "gally","graphics","guanabano",
  "heart","hydrolytically","homewards",
  "ice","immobile","intersocietal",
  "junk","junkyard","jocooserie",
  "kilo","kangaroo","khwarazmian",
  "light","ligneous","leathercraft",
  "monoxide","macaroni","miscarriage",
  "neatness","negotiation","nope",
  "overbold","organisation","only",
  "proud","prevalence","prideful",
  "qualification","quackery","quit",
  "reducing","reaccustoms","rude",
  "stimulus","sneering","supranaturalist",
  "turbaned","twilight","tetrapyramid",
  "unanachronously","unionism","underscrub",
  "vacuolations","violator","vite",
  "west","wainscotings","wiriness",
  "xanthophores","xenology","xolo",
  "youth","youngish","yesternights",
  "zucchini","zin","zincographer",
];

//levels
// x < 7 (easy) x = 7 (medium) x > 7 (hard)


const input = document.querySelector(".wordInput");
const button1 = document.querySelector(".btn");
const button2 = document.querySelector(".btnn");
const button3 = document.querySelector(".logButton");
const feedbackMessage = document.querySelector(".feedback-message");

let currentRandomWord = getRandomWord();

function getRandomWord() {
  const random = Math.floor(Math.random() * wordArray.length);
  return wordArray[random];
}

function insert() {
  button1.addEventListener("click", (e) => {
    e.preventDefault();
    input.value = "";
    currentRandomWord = getRandomWord();
    document.querySelector("h3").textContent = currentRandomWord;
    feedbackMessage.textContent = "";
    setTimeout(() => {
      document.querySelector("h3").textContent = "";
    }, 3000);
  });
}

function submit() {
  button2.addEventListener("click", (e) => {
    e.preventDefault();
    const inputValue = input.value.trim();
    if (inputValue === currentRandomWord) {
      feedbackMessage.textContent = "Correct";
    } else {
      feedbackMessage.textContent = "Incorrect";
    }
    input.value = "";
  });
}

function logWords() {
  for (let i = 0; i < wordArray.length; i++) {
    console.log("Word:", wordArray[i]);
  }
}

button3.addEventListener("click", (e) => {
  e.preventDefault()
  logWords();
});

insert();
submit();

