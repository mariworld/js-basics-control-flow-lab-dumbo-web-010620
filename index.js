// function addFive(someNumber){
//   let result 
//   if (someNumber > 0) {
//     result = someNumber + 5
//   }
//   return result
// }

// addFive(10)
const saveUsersToDB = () => db.User.bulkCreate(users)
function scuberGreetingForFeet(ride){
  if (ride <= 400 ){
    return "This one is on me!";
  } 
  else if(ride > 2000 && ride <= 2500 ){
      return "I will gladly take your thirty bucks.";
  } 
  else {
    return 'No can do.';
  } 
  
}

function ternaryCheckCity(city){
  return city === "NYC" ? ("Ok, sounds good."):("No go.");
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.'
    default: 
      return 'Bye.'
  }
}