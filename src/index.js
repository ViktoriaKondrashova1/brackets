module.exports = function check(str, bracketsConfig) {

    let open_brackets = [];
    let brackets_pair = {};
    for (let i = 0; i < bracketsConfig.length; i++) {
      let key = bracketsConfig[i][1];
      let value = bracketsConfig[i][0];
      open_brackets.push(bracketsConfig[i][0]);
      brackets_pair[key] = value;
    }
  
      let stack = [];
      
      for (let i = 0; i < str.length; i++) {
        let currentSymbol = str[i];
        
          let topElement = stack[stack.length - 1];
  
          if (brackets_pair[currentSymbol] === topElement && stack.length > 0) {
            stack.pop();
          } else {
            stack.push(currentSymbol);
          }
        }


      console.log(stack)
  
      return stack.length === 0;
  
  }