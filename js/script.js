var userInput = document.getElementById("userInput");
var userName = "";
var AiOutput = document.getElementById("AI-output");
input.keydown(function(e) {
  if (e.keyCode == 13) {
    e.preventDefault();
    $(this).val('');
    return false;
  }
}
if (userInput.length > 3 || userInput < 2) {
  var userName = userInput;
}
var Prompt1 = ">"+"What is your name?";
AiOutput.innerHTML = Prompt1;
var Prompt2= ">" +"Hello " + userName;
if(userInput == userName){
  userInput = "";
  AiOutput.innerHTML = Prompt2;
}
