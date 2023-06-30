// define the object for the question entity
let question = {
    title: '1. What is a^2 + b^2 in the pythagorean theorum?',
    alternatives: ['triangle', 'c^2', 'd^2', 'math'],
    correctAnswer: 1
  };

function changeColor(elem){
  elem.style.color = "white";
}
  // function for showing the question
function showQuestion(q) {
 
    let titleDiv = document.getElementById('title');
  titleDiv.textContent = q.title;

  let answerDiv = document.getElementById('answer');
  titleDiv.textContent = q.title;
  
   // new code
   let alts = document.querySelectorAll('.alternative');
   console.log(alts);
   alts.forEach(function(element, index){
     element.textContent = q.alternatives[index];
     element.addEventListener('click', function(){
        alts.forEach(changeColor);
        if (q.correctAnswer == index) {
          console.log('Correct Answer!');
          element.style.color="DarkSeaGreen" ;
          answerDiv.style.color="DarkSeaGreen";
          answerDiv.textContent = "Correct Answer!" ;
        } else {
          console.log('Wrong Answer!');
          answerDiv.textContent = "Wrong Answer!" ;
          element.style.color="Salmon";
          answerDiv.style.color="Salmon";
        }
      });



 });

}
  // call the function
  showQuestion(question);