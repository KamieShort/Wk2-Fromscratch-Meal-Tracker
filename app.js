// import functions and grab DOM elements
import { renderMeal, renderSaveLi } from './utils.js';

const mealFormEl = document.getElementById('meal-form');
const mealListEl = document.getElementById('meal-list');
const removeEl = document.getElementById('remove');
const saveListEl = document.getElementById('save-meal');
const saveInputEl = document.getElementById('save-input');
const saveButtonEl = document.getElementById('save-button');

// let state
let meals = [];
let saves = [];
// set event listeners
function renderList() {
    mealListEl.textContent = '';

    for (let meal of meals) {
        const li = renderMeal(meal);
        mealListEl.append(li);
    }
}

function renderSave() {
    saveListEl.textContent = '';
    for (let save of saves) {
        const li = renderSaveLi(save);
        saveListEl.append(li);
    }
}

mealFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(mealFormEl);

    const meal = {
        name: formData.get('food-item'),
        day: formData.get('day'),
        ingredient: formData.get('ingredient'),
    };
    meals.push(meal);
    renderList();
    mealFormEl.reset();
});

removeEl.addEventListener('click', () => {
    meals.pop();
    renderList();
});

saveButtonEl.addEventListener('click', () => {
    const input = saveInputEl.value;
    const count = meals.length;
    // saveEl.textContent = '';
    saves.push({ input, count });
    renderSave();
});

// save.addEventListener('click', () => {
//     const name = mealName.value;
//     const count = ingredients.length;
//     meals.push({ name, count });
//     renderMeals();
// });
