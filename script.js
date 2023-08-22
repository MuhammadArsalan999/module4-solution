// This function is the solution of module 4 assignment
(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    
    for (var i = 0; i < names.length; i++) {
    
      var firstLetter = names[i][0].toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } 
      else {
        helloSpeaker.speak(names[i]);
      }
    }
    
})();


// You can test your own name to see the changes
function greetMe(){
    var userInput = document.getElementById("userInput").value;
    if (userInput[0].toLowerCase() === 'j') {
        console.log("Good Bye" + " " + userInput);
    } 
    else {
        console.log("Hello " + userInput);
    }
};