# The Meal Tracker Plan

REMEMBER: If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## HTML

Add ingredient feature -<form
use <label, <inputs, <buttons

<ul for listing ingredients
Remove feature
<remove button

Save Feature
<save button
<input for meal

<ul to list the meals

## Events

form submit
-make new formData object to access form data
-make ingredient object
-render ingredients <ul

remove button
-.pop last ingredient from list
-render ingredients <ul

save meal button
-grab meal name from <input
-make meal object
-render meals

## State

ingredient and meal array of objects
FOOD ITEM {name: 'Burrito', quantity: 1, ingredients: 'rice', 'beans', 'veggies', calories: 400}

MEAL {name: 'dinner', time: '5:00PM'}

## Order of Operations

html
grab dom elements
add form event listener -validate using console.log
test <li render function
create first array variable
push form data to ingredients array
add <ul to HTML
add rendIngredients function and loop through all ingredients, create an LI and render

Remove last item
add button
add event listener
.pop last item
render
Save Meal Function
add the input and button to html
add the event listener, validate using console.log
test <li render function
create second array
add <ul to HTML
add renderMeals function, loop through meals, create <li, render
reset ingredients
render ingredients
