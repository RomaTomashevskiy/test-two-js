// import countryCards from './templates/country-cards.hbs';
import { map } from 'lodash';
import Notiflix, { Block } from 'notiflix';
// var debounce = require('lodash.debounce');

// const inputEl = document.querySelector('.input');
// const list = document.querySelector('.list');
// const box = document.querySelector('.box');

// inputEl.addEventListener('input', debounce(onInputCountry, 400));

// function onInputCountry(e) {
//     const inputValue = (inputEl.value).trim();
//     clearMurkup()
//     if (inputValue) {
//         fetchCounter(inputValue)
//             .then(country => {
//                 if (country.length === 1) {
//                     createMarkurCounterList(country);
//                     markurBox(country);
//                 } else if (country.length >= 2 && country.length <= 10) {
//                     createMarkurCounterList(country);
//                 }
//                 else if (country.length > 10) {
//                     Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
//                 }
//             })
//             .catch(err => {
//             console.dir(err);
//             Notiflix.Notify.failure('Oops, there is no country with that name');
//         })
//     }
// };

// function createMarkurCounterList(country) {
//     list.innerHTML = countryCards(country);
// };

// function markurBox(country) {
//     box.innerHTML = countryMarkup(country[0]);
// };
// function clearMurkup(){
//     list.innerHTML = '';
//     box.innerHTML = '';
// }

// function countryMarkup({capital, population, languages}){
//     const langList = Object.values(languages).join(' ')

//     return `<p class="text-info"><b>Capital:</b>${capital}</p>
//             <p class="text-info"><b>Population:</b>${population}</p>
//             <p class="text-info"><b>Languages:</b>${langList}</p>`
// }

// const params = 'name,capital,population,flags,languages';
// function fetchCounter(name) {
//   return fetch(`https://restcountries.com/v3.1/name/${name}?fields=${params}`)
//       .then(response => {
//           return response.json()
//     });
// };

// import NewApiServes from './api-serves'
// import countryCards from './templates/country-cards.hbs';

// const form = document.querySelector('.search-form');
// const btn = document.querySelector('.btn');
// const box = document.querySelector('.box');

// const newApiServes = new NewApiServes();

// form.addEventListener('submit', onSubmitForm);
// btn.addEventListener('click', onClickBtn);



// function onSubmitForm(e) {
//     e.preventDefault();
//     clearArticleBox()
//     newApiServes.query = e.target.elements.searchQuery.value;
 
//         newApiServes.resetPage();
//         newApiServes.fetchApi().then(hits => {
//         createMarkurHTML(hits)
//         console.log(hits)
//     }).catch(error => {
        
//     Notiflix.Notify.warning('Memento te hominem esse');
//         console.log(error)
//     }).finally(e.target.reset())
    
    
// };




// function onClickBtn() {
//      newApiServes.fetchApi().then(hits => {
//         createMarkurHTML(hits)
//         console.log(hits)
//     })
// };


// function createMarkurHTML(hits) {
//     box.insertAdjacentHTML('beforeend', countryCards(hits));
// };

// function clearArticleBox() {
//     box.innerHTML = '';
// }

// Notiflix.Notify.failure('Qui timide rogat docet negare');

// Notiflix.Notify.warning('Memento te hominem esse');

// Notiflix.Notify.info('Cogito ergo sum');


// import NewApiService from './api-serves';
// import templateFunction from './templates/country-cards.hbs'

// const form = document.querySelector('.form');
// const container = document.querySelector('.box');
// const button = document.querySelector('.button');
// const newApiService = new NewApiService()




// form.addEventListener('submit', onSubmitForm);
// button.addEventListener('click' , onClickButton);

// function onSubmitForm(e) {
//     e.preventDefault()

//     newApiService.query = e.target.input.value;
//     newApiService.resetPage()
//     newApiService.fetchArtic().then(articles => cardsContainer(articles))
    
//     // form.reset();
// };


// function onClickButton() {
//      newApiService.fetchArtic().then(articles => cardsContainer(articles))
// }

// function cardsContainer(articles) {
//      const murkup = templateFunction(articles);
//     container.innerHTML = murkup;
// }



// const atTheOldToad = {
//   potions: [
 //     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     // this.potions.push(newPotion)
//     if (this.potions.includes(newPotion)) {
//       return 'rpofvrore'
//     }
    
    
//   },
//   // Change code above this line
// };

// // console.log(atTheOldToad.getPotions(''))

// // console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }))
// console.log(atTheOldToad.addPotion({ name: "Speed potion", price: 460 }))

// // console.log(atTheOldToad.removePotion(''))
// // console.log(atTheOldToad.updatePotionName(''))
// console.log(atTheOldToad.potions)

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

const btn3 = document.querySelector('.btn3');


btn2.addEventListener('click', onClickAdd);

function onClickAdd() {
  console.log('Добавляю');
  btn1.addEventListener('click', iAmHere)
}

function iAmHere() {
  console.log('Я тут є ');
}


btn3.addEventListener('click', removeClick)

function removeClick() {
  console.log('удаляю')
  btn1.removeEventListener('click', iAmHere)
};