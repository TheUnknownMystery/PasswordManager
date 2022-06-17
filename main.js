const SYMBOLS = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "=",
  "~",
  "`",
  "|",
  "}",
  "{",
  "]",
  "[",
  ":",
  ";",
  "'",
  '"',
  ",",
  "<",
  ".",
  ">",
  "/",
  "?",
];
const NUMBERS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const LETTERS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let password = "";
//elements
const isAllowedSymbols = document.getElementsByClassName("symbols");
const isAllowedNumbers = document.getElementsByClassName("numbers");
const isAllowedLetters = document.getElementsByClassName("letters");
const copyButton = document.getElementsByClassName("box-container__generate");

const CopyText = () => {
  const copiedText = document.getElementById("input");

  if (copiedText.value.trim() === "") return;

  copiedText.select();
  navigator.clipboard.writeText(copiedText.value);
  console.log("Copied");
};

const GetRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

isAllowedLetters[0].addEventListener("click", function () {
  if (this.checked) {
    for (let i = 0; i < 4; i++) {
      password += GetRandomElement(LETTERS);
    }

    document.getElementById("input").value = password;
  }
});

isAllowedNumbers[0].addEventListener("click", function () {
  if (this.checked) {
    for (let i = 0; i < 4; i++) {
      password += GetRandomElement(NUMBERS);
    }

    document.getElementById("input").value = password;
  } else {
    console.log("not checked");
    NUMBERS.forEach((NUMBER) => {
      password = password.replace(NUMBER, "");
      console.log(password);
    });

    document.getElementById("input").value = password;
  }
});

isAllowedSymbols[0].addEventListener("click", function () {
  if (this.checked) {
    for (let i = 0; i < 4; i++) {
      password += GetRandomElement(SYMBOLS);
    }

    document.getElementById("input").value = password;
  }
});

copyButton[0].addEventListener("click", CopyText);
