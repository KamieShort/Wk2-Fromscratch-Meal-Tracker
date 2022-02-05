export function renderMeal(meal) {
    const li = document.createElement('li');
    li.textContent = `${meal.name} - quantity ${meal.quantity} - ingredients are ${meal.ingredient}`;
    return li;
}

export function renderSaveLi(save) {
    const li = document.createElement('li');
    li.textContent = `${save.input} - quantity ${save.count}`;
    return li;
}
