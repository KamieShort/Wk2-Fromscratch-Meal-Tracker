// import functions and grab DOM elements
import { renderMeal, renderSaveLi } from './utils.js';

const mealFormEl = document.getElementById('meal-form');
const mealListEl = document.getElementById('meal-list');
const removeEl = document.getElementById('remove');
const saveEl = document.getElementById('save-input');
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
    saveEl.textContent = '';
    for (let save of saves) {
        const li = renderSaveLi(save);
        saveEl.append(li);
    }
}

mealFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(mealFormEl);

    const meal = {
        name: formData.get('food-item'),
        quantity: Number(formData.get('quantity')),
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
    const input = saveEl.value;
    const count = saves.length;
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
