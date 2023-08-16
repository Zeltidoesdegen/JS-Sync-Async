//##########################
// console.log(x);
//##########################
// try {
//   console.log(x);  
// } catch (error) {
//   console.log("Error: " + error);
// }
//##########################
function double(number){
    if(isNaN(number)) {
      throw new Error(number + " is not a number!");
    }
  
    return number * number
  }
  
  try {
    const y = double(97)
    console.log(y);
  } catch (error) {
    console.log(error);
  }
  
  //##########################
  //##########################
  //##########################
  //##########################
  //##########################
  //##########################