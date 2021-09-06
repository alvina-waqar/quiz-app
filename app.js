q1 = {
    question: "Find the sum of 111 + 222 + 333",
    answer: [700, 666, 100, 10],
    correctAns: 666,
  };
  q2 = {
    question: " Subtract 457 from 832",
    answer: [375, 57, 376, 970],
    correctAns: 375,
  };
  q3 = {
    question: "50 times 5 is equal to",
    answer: [ 2500,505, 500,'None of these'],
    correctAns:'None of these' ,
  };
  q4 = {
    question: " Simplify: 26 + 32 - 12",
    answer: [0, 56, 32, 46],
    correctAns: 46,
  };
  q5 = {
    question: "Simplify : 3 + 6 x (5 + 4) ÷ 3 - 7",
    answer: [14, 15, 16, 11],
    correctAns: 14,
  };
   
  
  
  var arr = [q1,q2,q3,q4,q5];
  var question = document.getElementById("question");
  var currentQuestionNumber = document.getElementById("currentQuesNo");
  var totalQuestionQuantity = document.getElementById("totalQuesQuantity");
  var optionsParent = document.getElementById("options");
  var resultParent = document.getElementById("result");
  var resultProgress = document.getElementById("Progress");
  var resultText = document.getElementById("resultText");
  var ind = 0;
  var score = 0;
  
  function displayQuestion() {
    options.innerHTML = "";
    question.innerHTML = arr[ind].question;
    currentQuesNo.innerHTML = ind + 1;
    totalQuesQuantity.innerHTML = arr.length;
    for (var i = 0; i < arr[ind].answer.length; i++) {
      options.innerHTML += `<div class="col-md-6 py-3">
      <button onclick="checkAnswer('${arr[ind].answer[i]}')" class="btn px-5  rounded-pill btn-light">${arr[ind].answer[i]}</button>
  </div>`;
    }
  }
  displayQuestion();
function nextQuestion() {
    ind++;
    displayQuestion();
  }
 
  
  function checkAnswer(e) {
    var userAnswer = e;
   
    var correctAnswer = arr[ind].correctAns;
   
    if (userAnswer == correctAnswer) {
      score++;
      console.log(score, "score");
    }
    if (ind + 1 == arr.length) {
      displayResult();
    } else {
      nextQuestion();
    }
  }
  
  function displayResult() {
    result.style.display = "block";
    Progress.max = arr.length;
    Progress.value = score;
    options.style.display = "none";
    question.style.display = "none";
    var resultPercentage = (score / arr.length) * 100;
    resultText.innerHTML = resultPercentage + "%";
    if (resultPercentage < 50) {
      resultText.className += " text-danger";
    } else {
      resultText.className += " text-success";
    }
  }
