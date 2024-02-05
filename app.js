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



const input = document.querySelector(".wordInput");
const button1 = document.querySelector(".btn");
const button2 = document.querySelector(".btnn");
const button3 = document.querySelector(".logButton");
const button4 = document.querySelector(".difficultyButton");
const feedbackMessage = document.querySelector(".feedback-message");


let currentRandomWord = RandomWord();
let currentDifficulty = "";


function RandomWord() {
  const randomIndex = Math.floor(Math.random() * wordArray.length);
  return wordArray[randomIndex];
}


function insert() {
  button1.addEventListener("click", (e) => {
    e.preventDefault();
    input.value = "";
    currentRandomWord = RandomWord();


    document.querySelector("h3").textContent = currentRandomWord;
    feedbackMessage.textContent = "";


    setTimeout(() => {
      document.querySelector("h3").textContent = "";
      document.querySelector("h5").textContent = "";
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


function difficulty() {
  for (let i = 0; i < wordArray.length; i++) {
    const currentWord = wordArray[i];
    console.log("Word:", currentWord);


    const currentDifficulty = getDifficulty(currentWord);
    console.log("Difficulty:", currentDifficulty);
  }
}


button3.addEventListener("click", (e) => {
  e.preventDefault();
  difficulty();
});


button4.addEventListener("click", (e) => {
  e.preventDefault();
  currentDifficulty = getDifficulty(currentRandomWord);
  document.querySelector("h5").textContent = currentDifficulty;
});


function getDifficulty(word) {
  if (word.length < 7) {
    return "Level Difficulty: Easy";
  } else if (word.length === 7) {
    return "Level Difficulty: Medium";
  } else {
    return "Level Difficulty: Hard";
  }
}


insert();
submit();
