const myGlobal = 10;
let oopsGlobal = 5;
function fun1(oopsGlobal) {
  return oopsGlobal = 5;

}
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}