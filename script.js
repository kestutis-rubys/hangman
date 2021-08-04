const randomWordElement = document.querySelector('.randomWord');
// const pointsElement = document.querySelector('.points > span');
// const pointsValue = Number(pointsElement.innerHTML);
const data = ['Futbolas', 'Krepsinis', 'Tenisas', 'Rankinis', 'Boksas'];
let selectedWord = '';

// Functions

const showRandomWord = () => {
  const DataLength = data.length;
  const randomNumber = Math.floor(Math.random() * DataLength);
  const word = data[randomNumber];
  console.log(word);
  const newWord = word.toLowerCase().split('');
  for (item of newWord) {
    randomWordElement.innerHTML += `<span> _ </span>`;
  }
  selectedWord = newWord;
  return selectedWord;
};

const checkLetter = (letter) => {
  const letters = document.querySelectorAll('span');
  selectedWord.forEach((item, i) => {
    if (item === letter) {
      letters[i].innerHTML = ` ${letter.toUpperCase()} `;
    }
  });
};

// Events
// Load random word
document.addEventListener('DOMContentLoaded', showRandomWord());
// Load random word

// Read enter key
document.addEventListener('keypress', (e) => {
  const keyValue = e.key;
  checkLetter(keyValue);
});
// Read enter key
