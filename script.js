// define the object for the question entity
let question = {
    title: '1. What is a^2 + b^2 in the pythagorean theorum?',
    alternatives: ['triangle', 'c^2', 'd^2', 'math'],
    correctAnswer: 1
  };

  let question2 = {
    title: '2. x +5 = 30',
    alternatives: ['5', 'c^2', '20', '25'],
    correctAnswer: 3
  };

  let question3 = {
    title: '3. y = mx + b. What does m stand for?',
    alternatives: ['slope', 'line', 'graph', 'x intercept'],
    correctAnswer: 0
  };

  let question4 = {
    title: '4. What is the area of a triangle if the base is 5 and the height is 10?',
    alternatives: ['20 square units', '25 sq units', '25', '20'],
    correctAnswer: 1
  };

  let question5 = {
    title: '5. If there are 4 blue marbles in a bag and 5 red marbles, what is the probability of bicking a blue marble?',
    alternatives: ['4/5', '5/4', '4/9', '9/4'],
    correctAnswer: 2
  };

  const questions = [question, question2, question3, question4, question5]
  let count = 0;
  let score = 0;
  let total = 0;

  function changeColor(elem){
  elem.style.color = "black";
}
  // function for showing the question
function showQuestion() {

  let q = questions[count]
 //code
    let titleDiv = document.getElementById('title');
  titleDiv.textContent = q.title;

  let answerDiv = document.getElementById('answer');
  titleDiv.textContent = q.title;
  answerDiv.textContent = "" ;
   // new code
   let alts = document.querySelectorAll('.alternative');
   console.log(alts);
   alts.forEach(function(element, index){
     element.textContent = q.alternatives[index];
     element.style.color="black" ;
     element.addEventListener('click', function(){
         alts.forEach(changeColor);
        console.log("index: " + index);
        if (q.correctAnswer == index) {
          console.log('Correct Answer!');
          element.style.color="DarkSeaGreen" ;
          answerDiv.style.color="DarkSeaGreen";
          answerDiv.textContent = "Correct Answer!" ;
          score = score + 1;
          total = total + 1;
          console.log("add total correct." + total);
          document.getElementById("score").innerHTML = score;
        } else {
          console.log('Wrong Answer!');
          answerDiv.textContent = "Wrong Answer!" ;
          element.style.color="Salmon";
          answerDiv.style.color="Salmon";
          total = total + 1;
          console.log("add total incorrect." + total);
        }
        document.getElementById("total").innerHTML = total;
        document.getElementById("score").innerHTML = score;

      }, {once: true});
  });
  count = count + 1;
  if (count == 5) {
    count = 0 ;
  }
  console.log(count) ;
  
}
  // call the function
  showQuestion();