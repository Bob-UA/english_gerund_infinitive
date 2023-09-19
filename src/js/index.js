// Add imports above this line
import { listItems } from './words.js';

const gallery = document.querySelector(".list");

gallery.addEventListener('click', handleWordIconClick);

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}; 

const shuffledArray = shuffle(listItems); 

function handleWordIconClick(e) {
  if (e.target.localName !== 'li') {
    return;
  }
  e.target.children[1].className = 'type-text';

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

