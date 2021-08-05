const randomWordElement = document.querySelector('.randomWord');
let pointsValue = document.querySelector('.number');
const buttonElement = document.querySelector('button');
const answerElement = document.querySelector('.answer');
const data = [
  'Football',
  'Basketball',
  'Tennis',
  'Boxing',
  'Volleyball',
  'impress',
  'deprive',
  'disappoint',
  'spokesperson',
  'admission',
  'community',
  'restless',
  'wind',
  'barrier',
  'innovation',
  'convention',
  'appointment',
  'reinforce',
  'activity',
];
const incorrectLetters = document.querySelector('.incorrectLetters');
const hiddenWord = [];
let selectedWord = '';
let points;
let number = 0;
let minusPoints = 0;
const images = ['2.png', '3.png', '4.png', '5.png', '6.png', '7.png'];
const imgElement = document.querySelector('img');
let imgIndex = 0;

// Functions

const showRandomWord = () => {
  const DataLength = data.length;
  const randomNumber = Math.floor(Math.random() * DataLength);
  const word = data[randomNumber];
  console.log(word);
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
  const findLetter = selectedWord.find((item) => item === letter);
  if (!findLetter) {
    incorrectLetters.textContent += letter.toUpperCase() + ' ';
  }

  minusPoints = number - selectedWord.length;
  changePointsValue(minusPoints);
};

const changePointsValue = (number) => {
  if (points > 1) {
    if (number === 0) {
      points--;
      pointsValue.textContent = points;
      if (imgIndex <= images.length) {
        imgElement.src = './img/' + images[imgIndex];
        imgIndex++;
      }
    }
  } else {
    pointsValue.textContent = 0;
    imgElement.src = './img/' + images[images.length - 1];
    answerElement.textContent = 'Unfortunately, you are out of lives';
    answerElement.classList.add('red');
    buttonElement.classList.add('showBtn');
  }
};

const checkWord = (hiddenWord) => {
  if (JSON.stringify(selectedWord) === JSON.stringify(hiddenWord)) {
    answerElement.textContent = 'Congratulations, you survived!';
    answerElement.classList.add('green');
    buttonElement.classList.add('showBtn');
  }
};

const readKey = (e) => {
  points = Number(pointsValue.innerHTML);
  number = 0;
  minusPoints = 0;
  const keyValue = e.key;
  checkLetter(keyValue);
  console.log(e.key);
};

// Events
// Load random word
document.addEventListener('DOMContentLoaded', showRandomWord());
// Load random word

// Read enter key
document.addEventListener('keydown', (e) => readKey(e));
// Read enter key

buttonElement.addEventListener('click', () => {
  location.reload();
  buttonElement.classList.remove('showBtn');
});
