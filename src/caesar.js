// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    // check for min max shift amounts
    if (shift < -25 || shift > 25 || !shift) {
      return false;
    };
    if (encode === false) {
      shift *= -1;
    };
    // creates variables for key, changes input to lowerCase and creates variable e to hold result
    const key = "abcdefghijklmnopqrstuvwxyz".split("");
    let lowerCase = input.toLowerCase();
    let result = "";
    // loops though the input
    for (let index of lowerCase)
    // if character does not match key then added to result
    if (!key.includes(index)) result += index;
      else {
        // input character matched to key index
        let indexkey = key.indexOf(index);
        // creates new index after shift
        let shiftIndex = indexkey + shift;
        shiftIndex = shiftIndex > 25 ? shiftIndex -= 26 : shiftIndex < 0 
        ? shiftIndex += 26 : shiftIndex;
        result += key[shiftIndex];
      };
    return result;
  };
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
