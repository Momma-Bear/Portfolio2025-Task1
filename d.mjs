import test from "./test.mjs";

/*
    Challenge: Implement the `guessNumber` function.

    The function `guessNumber` takes two parameters:
    1. `target` (an integer) - the number to guess.
    2. `guess` (an integer) - the player's guess.

    The function should:
    - Return "Too low" if the guess is less than the target.
    - Return "Too high" if the guess is greater than the target.
    - Return "Correct!" if the guess matches the target.
    - Return null if either input is not a valid integer.

    Your task:
    1. Complete the tests below to verify the functionality.
    2. Implement the `guessNumber` function so it passes all the tests.

    
*/

//#region function -----------------------------------------------------------------
// Write your function her.

function guessNumber(target, guess) {
    let guessOutcome = null;
    
    if (target > guess){
        guessOutcome = "Too low";
    } else if (target < guess){
        guessOutcome = "Too high";
    } else if (target == guess){
        guessOutcome = "Correct!";
    }

    return guessOutcome;
}


//#endregion

//#region Tests --------------------------------------------------------------------

const tests = test("Number Guessing");

// Basic cases
tests.isEqual(guessNumber(10, 5), "Too low", "If target is 10 and guess is 5, return 'Too low'");
tests.isEqual(guessNumber(10, 15), "Too high", "If target is 10 and guess is 15, return 'Too high'");
tests.isEqual(guessNumber(10, 10), "Correct!", "If target is 10 and guess is 10, return 'Correct!'");

// Invalid inputs
tests.isEqual(guessNumber(20, NaN), null, "If the guess is not an integer, return null (20, NaN)");
tests.isEqual(guessNumber(undefined, 15), null, "If the target is not an integer, return null (undefined, 15)");
tests.isEqual(guessNumber(null, Infinity), null, "If neither the target or the guess are integers, return null (null, Infinity)");
tests.isEqual(guessNumber(30, 10.5), null, "A decimal guess should not count as an integer (30, 10.5)");
tests.isEqual(guessNumber(7.5, 25), null, "A decimal target should not count as an integer (7.5, 25)");

// Edge cases
tests.isEqual(guessNumber(-12, -7), "Too high", "Function should treat negative numbers correctly (-12 < -7)");
tests.isEqual(guessNumber(-12, -17), "Too low", "Function should treat negative numbers correctly (-12 > -17)");
tests.isEqual(guessNumber(-12, -12), "Correct!", "Function should treat negative numbers correctly (-12 = -12)");
tests.isEqual(guessNumber(0, -1), "Too low", "Function should treat close numbers correctly (0 > -1)");
tests.isEqual(guessNumber(0, 1), "Too high", "Function should treat close numbers correctly (0 < 1)");

//#endregion
