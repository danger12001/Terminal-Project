var userName = prompt("Please enter you name");
var userInput = document.getElementById("userInput");
var userInputs = document.querySelector("input");
var AiOutput = document.getElementById("AI-output");

var Prompt2 = ">" +"Hello " + userName + ", INSERT QUESTION HERE, type: either 'yes' or 'no' to continue";
var Prompt3 = ">" + "INSERT NEXT QUESTION HERE";
var Prompt4 = ">" + "FINAL EXAMPLE QUESTION";
var Prompt5 = ">" + "Splooof";
AiOutput.innerHTML = Prompt2;
userInputs.onkeydown = function(e){
   if (e.keyCode === 13) {
     if(userInput.value == ">" + "yes"){
       AiOutput.innerHTML = Prompt3;
     }
     userInput.value = ">";
   }
   if (e.keyCode === 13) {
     if(userInput.value == ">" + "yes"){
       AiOutput.innerHTML = Prompt4;
     }
     userInput.value = ">";
   }
   if (e.keyCode === 13) {
     if(userInput.value == ">" + "yes"){
       AiOutput.innerHTML = Prompt5;
     }
     userInput.value = ">";
   }
}
