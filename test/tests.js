//get the add function from the .js file
import add from '../add.js';

const test = QUnit.test;

test('adds two numbers', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 3;
    const y = 4;
    const expected = 7;

    //Act 
    // Call the function you're testing and set the result to a const
    const sum = add(x,y);

    //Assert
    // What should the result be? use convention of 'expected'
    //open on Chrome and change URL to the local host number, delete html and add test/ to the URL
    assert.equal(sum, expected);
});