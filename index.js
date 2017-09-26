var katzDeli = [];
function takeAName(katzDeli, name) {
  //push the new name into array
  katzDeli.push(name);
  //give the customer a massage with their number
  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line.";
}

var n = 0;
function takeANumber(katzDeli) {
   n++;
   if(n==101){
     n=1;
   }
   katzDeli.push(n);
   return n;
}

function nowServing(line) {
    if (line.length > 0){
        //shift will remove the first element from an array and return it.
      return ("Currently serving " + line.shift() + ".");
    }
    else {
        return "There is nobody waiting to be served!";
      }
}
/*
var people = [];
var line = [];
function currentLine(people){
  if(people.length === 0) {
    return "The line is currently empty."
  }
    for (var i=0; i<people.length; i++) {
      //"join" joins all the elements of an array into a string.
    return "The line is currently " + (i+1) + (people[i].join(", "))
}
}
*/
var people = [];
var line = [];
function currentLine(people){
  if(people.length === 0) {
    return "The line is currently empty."
  }
    else {
      for (var i=0; i<people.length; i++) {
        line.push((i+1) + ". " + people[i])
      }
    return "The line is currently: " + line.join(', ');

  }
}
