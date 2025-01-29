import test from "./test.mjs";

/*
    Challenge: Implement the `multiply` function.

    The function `multiply` takes an indefinit number of parameters (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
    It should return the product of the numbers, with the following constraints:

    1. If one or more of the parameters are not valid numbers, the function should return NaN (Not a Number).
    2. If either parameter is a string that can be converted to a number (e.g., "3"), it should be parsed into a number before multiplying.
    3. If either parameter is Infinity or -Infinity, return Infinity or -Infinity based on the rules of multiplication.
    4. Handle edge cases like multiplying by 0 and NaN appropriately.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `multiply` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.

function multiply(...n){
    let product = 1;

    return product;
}

//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.

const tests = test("Multiplication function")

tests.isEqual(multiply(5), 5, "Product of 5 should be 5");
tests.isEqual(multiply(4, 8, 10), 320, "Product of 4, 8 and 10 should be 320");
tests.isEqual(multiply(4, -3, 1.5), -18, "Product of 4, -3 and 1.5 should be -18");
tests.isEqual(multiply(2, -5, -7), 70, "Product of 2, -5 and -7 should be 70");

tests.isNotANumber(multiply(5, 'Hello', 2), "Multiplying any number with 'Hello' should return NaN");
tests.isNotANumber(multiply(3, 8, undefined), "Multiplying any number with undefined should return NaN");
tests.isNotANumber(multiply(null, 4, 6), "Multiplying any number with null should return NaN");
tests.isNotANumber(multiply(7, NaN, 9), "Multiplying any number with NaN should return NaN");

//#endregion