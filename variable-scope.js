// import { moduleScope } from "./module-scope";
const { moduleScope } = require("./module-scope")

// Global scope
let globalVariable = "global Variable";

function scopeVariable(argumen) {
  let functionVariable = "function Variable";
  //   console.log(functionVariable);
  if (argumen === true) {
    let blockVariable = true;
    var varFunctionVariable = "var Variable";
    console.log(globalVariable, functionVariable, blockVariable);
  } else {
    let blockVariable = false;
    console.log(globalVariable, functionVariable, blockVariable);
  }

  console.log(globalVariable, functionVariable, varFunctionVariable);
}

scopeVariable(true);
console.log(moduleScope);
// console.log(globalVariable);
// console.log(functionVariable);
