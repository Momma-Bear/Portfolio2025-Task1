import test from "./test.mjs";

/*
    Challenge: Implement the `formatName` function.

    The function `formatName` takes a single parameter `name` (a string) and formats it based on the following rules:

    1. If `name` is not a string, return null.
    2. Remove any leading or trailing whitespace from the string.
    3. Capitalize the first letter of each word in the name (e.g., "john doe" becomes "John Doe").
    4. If the string is empty (after trimming), return an empty string.
    5. If the string contains special characters (e.g., "@", "#", etc.), return null.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `formatName` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.

let specialCharacters = ["|", "!", '"', "@", "#", "£", "¤", "$", "%", "&", "/", "{", "(", "[", "]", ")", "}", "=", "+", "?", "\\", "`", "^", "¨", "~", "*", "'", "-", "_", "<", ">"];

function formatName(name){
    let formattedName = "";

    if (typeof name != "string"){
        return null;
    }

    let nameStarted = false;
    for (let i = 0; i < name.length; i++){
        
        if (specialCharacters.includes(name[i])){
            return null;
        }

        if (name[i] == " " && (name[i+1] == " " || name[i+1] == undefined)){}
        else if (name[i] != " " || nameStarted == true){
            nameStarted = true;
            if (name[i] != " " && (name[i-1] == " " || name[i-1] == undefined)){
                formattedName += name[i].toUpperCase();
            } else {
                formattedName += name[i];
            }
        }
    }
    

    return formattedName;
}

//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.

let tests = test("Name Formatting Function");

// Invalid inputs
tests.isEqual(formatName(1), null, "A number should not be a string");
tests.isEqual(formatName(null), null, "Null should not be a string");
tests.isEqual(formatName(NaN), null, "NaN should not be a string");
tests.isEqual(formatName(undefined), null, "Undefined should not be a string");
tests.isEqual(formatName(Infinity), null, "Infinity should not be a string");
tests.isEqual(formatName(true), null, "true/false should not be a string");
tests.isEqual(formatName(["Jane", "John", "Doe"]), null, "Array should not be a string");
tests.isEqual(formatName([]), null, "An empty array should not be a string");

// Whitespace cases
tests.isEqual(formatName(" Jane Doe "), "Jane Doe", "Leading and trailing whitespace should be removed");
tests.isEqual(formatName("    Jake Doe   "), "Jake Doe", "Multiple leading and trailing whitespaces should be removed");

// Capitalisation
tests.isEqual(formatName("jane"), "Jane", "Name should be capitalised");
tests.isEqual(formatName("jake Doe the tHird"), "Jake Doe The THird", "All parts of name should be capitalised");

// Empty input
tests.isEqual(formatName(""), "", "Empty string should return an empty string");
tests.isEqual(formatName("   "), "", "String consisting of only whitespace should return an empty string");

// Special characters
tests.isEqual(formatName("J@ne Doe"), null, "String containing '@' should return null");
tests.isEqual(formatName("Ja#e Doe"), null, "String containing '#' should return null");
tests.isEqual(formatName("Jake D¤e"), null, "String containing '¤' should return null");
tests.isEqual(formatName("£ane Doe"), null, "String containing '£' should return null");

for (let i = 0; i < specialCharacters.length; i++){
    tests.isEqual(formatName(specialCharacters[i]), null, "String containing " + specialCharacters[i] + " should return null");
}

//#endregion