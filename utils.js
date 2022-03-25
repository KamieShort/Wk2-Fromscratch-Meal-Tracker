export function renderMeal(meal) {
    const li = document.createElement('li');
    li.textContent = `${meal.name} - ${meal.day} - ingredients are ${meal.ingredient}`;
    return li;
}

export function renderSaveLi(save) {
    const li = document.createElement('li');
    li.textContent = `${save.input} - ${save.count} item`;
    return li;
}
