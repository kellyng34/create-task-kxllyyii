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

const DOMselectors = {
    input : document.querySelector(".wordInput"),
    button: document.querySelector(".button"),
    startButton: document.querySelector(".start"),
}
  let inputValue = input.value;

  function game(){
    startButton.addEventListener("click", (x) => {
        x.preventDefault();
        input.value="";
    });
  }
  game()
  
  https://www.youtube.com/watch?v=B7pTIpUo9P4