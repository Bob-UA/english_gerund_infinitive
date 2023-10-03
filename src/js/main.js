// Add imports above this line
import { listItems } from './words.js';

const section = document.querySelector("#section");
const gallery = document.querySelector(".list");
const toggle = document.querySelector(".toggle");

gallery.addEventListener('click', handleWordIconClick);
toggle.addEventListener('click', changeTheme);

function changeTheme() {
  if (!section.className) {
    return (section.className = 'dark');
  }
  section.className = "";
}

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}; 

const shuffledArray = shuffle(listItems); 

function handleWordIconClick(e) {

  const { localName, nextSibling, children, className } = e.target;
  if (localName !== 'li' && localName !== 'p' || className === "") {
    return;
  }
  if (localName === 'p') {
    return nextSibling.className = 'type-text';
  }

  children[1].className = 'type-text';

}

const markupCards = createCardsMarckup(shuffledArray);
gallery.insertAdjacentHTML("afterbegin", markupCards);

function createCardsMarckup(elements) {
  return elements
    .map(({ word, type }) => {
      return `<li class="word_item">
          <p class="text">${word}</p><div class="is_hidden"><p>${type}</p></div>
        </li>`;
    })
    .join('');
}


// Change code below this line

