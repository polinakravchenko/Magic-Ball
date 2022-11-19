// const N = 7;
// alert ("Варіант: " + N + "\nКравченко Поліна");

document.body.innerHTML='<div id="content"><h1>Магічна куля</h1><p id="info">Запитай мене, про що ти хочеш знати</p><input type="text" id="question"/><div id="ball" class="ball"><div class="answer"><p id="answ"></p></div><p id="answer"></p></div></div>';

var answers = ["Так", "Ні", "Можливо"];

var answ = document.getElementById("answ");
var answer = document.getElementById("answer");
var ball = document.getElementById("ball");
var question = document.getElementById("question");
       
    ball.addEventListener("click", function() {
        if (question.value.length < 1) 
         {
           alert("Уведіть питання!");
         } 
        else 
         {
           answ.innerText = "";
           var res = Math.floor(Math.random() * Math.floor(answers.length));
           answer.innerText = answers[res];
         }
   });
