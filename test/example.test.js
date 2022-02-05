// IMPORT MODULES under test here:
import { renderMeal } from '../utils.js';

const test = QUnit.test;

test('renderMeal should return an <li> element', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li>burrito - quantity 2 - ingredients are rice</li>';
    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderMeal('burrito' - 'quantity 1' - 'ingredients are rice');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
