// IMPORT MODULES under test here:
import { renderMeal, renderSaveLi } from '../utils.js';

const test = QUnit.test;

test('renderMeal should return an object with info', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li>Just a little - monday - ingredients are rice</li>';
    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderMeal({
        name: 'Just a little',
        day: 'monday',
        ingredient: 'rice',
    });
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('renderSaveLi should return an object with info', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li>burrito - 1 item</li>';
    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderSaveLi({
        input: 'burrito',
        count: 1,
    });
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
