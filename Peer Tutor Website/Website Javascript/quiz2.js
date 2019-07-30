function check(){
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;


  var correct = 0;

  if (question1==="13 hours"){
    correct ++;
  }
  if (question2==="Yokohama"){
    correct ++;
  }
  if (question3==="Shinto and Buddhism"){
    correct ++;
  }
  if (question4==="Baseball"){
    correct ++;
  }
  if (question5==="Nagasaki and Hiroshima"){
    correct ++;
  }
  if (question6==="True" || question6==="true"){
    correct ++;
  }
  if (question7==="The Land of The Rising Sun" || question7==="Land of The Rising Sun" || question7 === "the land of the rising sun" || question7==="land of the rising sun" || question7==="Land of the Rising Sun"){
    correct ++;
  }

  var messages = ["You're a master!!", "So close!", "Could be better..","Do you even know Japan?", "I'm a little concerned..."];
  var pictures = ["Website Javascript/images/queen.gif","Website Javascript/images/congrats.gif","Website Javascript/images/kirby.gif","Website Javascript/images/molang.gif","Website Javascript/images/sad.gif"];
  var range;

  if (correct===0){
    range = 4;
  }
  if (correct>0 && correct<3){
    range = 3;
  }
  if (correct>2 && correct<5){
    range=2;
  }
  if (correct>4 && correct<7){
    range=1;
  }
  if (correct === 7){
    range=0;
  }

  var percent = Math.round((correct/7)*100)

  document.getElementById("number_correct").innerHTML="You got " + correct + " correct! That's " + percent + "%.";
  document.getElementById("message").innerHTML=messages[range];
  document.getElementById("picture").src=pictures[range];

}
