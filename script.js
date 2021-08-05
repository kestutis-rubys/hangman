const randomWordElement = document.querySelector('.randomWord');
let pointsValue = document.querySelector('.number');
const answerElement = document.querySelector('.answer');
const data = ['Football', 'Basketball', 'Tennis', 'Boxing', 'Valleyball'];
const hiddenWord = [];
let selectedWord = '';
let points;
let number = 0;
let minusPoints = 0;

// Functions

const showRandomWord = () => {
  const DataLength = data.length;
  const randomNumber = Math.floor(Math.random() * DataLength);
  const word = data[randomNumber];
  const newWord = word.toLowerCase().split('');
  for (item of newWord) {
    randomWordElement.innerHTML += `<span> _ </span>`;
    hiddenWord.push('_');
  }
  selectedWord = newWord;
  return selectedWord;
};

const checkLetter = (letter) => {
  const letters = document.querySelectorAll('span');
  selectedWord.forEach((item, i) => {
    if (item === letter) {
      letters[i].textContent = ` ${letter.toUpperCase()} `;
      hiddenWord[i] = letter;
      checkWord(hiddenWord);
    } else {
      number++;
    }
  });
  minusPoints = number - selectedWord.length;
  changePointsValue(minusPoints);
};

const changePointsValue = (number) => {
  if (points > 1) {
    if (number === 0) {
      points--;
      pointsValue.textContent = points;
    }
  } else {
    pointsValue.textContent = 0;
    answerElement.textContent = 'Unfortunately, you are out of lives';
  }
};

const checkWord = (hiddenWord) => {
  if (JSON.stringify(selectedWord) === JSON.stringify(hiddenWord)) {
    answerElement.textContent = 'Congratulations, you survived!';
  }
};

// Events
// Load random word
document.addEventListener('DOMContentLoaded', showRandomWord());
// Load random word

// Read enter key
document.addEventListener('keypress', (e) => {
  points = Number(pointsValue.innerHTML);
  number = 0;
  minusPoints = 0;
  const keyValue = e.key;
  checkLetter(keyValue);
  // console.log(hiddenWord);
  // console.log(selectedWord);
});
// Read enter key
