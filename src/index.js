module.exports = function check(str, bracketsConfig) {

  let bracketsConfigFlat = bracketsConfig.flat();
  let bracketsPairs = {};
  let stack = [];  
  
  for (let i = 0; i < bracketsConfigFlat.length - 1; i = i + 2) {
    bracketsPairs[bracketsConfigFlat[i + 1]] = bracketsConfigFlat[i];
  };
  
  let openBrackets = [];
  for (let index = 0; index < bracketsConfigFlat.length; index++) {
    if (index % 2 == 0) {openBrackets.push(bracketsConfigFlat[index])};
  };
  
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];
  
    if (stack.length != 0 && bracketsPairs[currentSymbol] === topElement ) {
      stack.pop();
    } else {
      stack.push(currentSymbol); 
    }
  }
  
  return stack.length === 0;
}