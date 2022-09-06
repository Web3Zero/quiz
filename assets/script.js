const btnStartGame = document.getElementById('button-start-game');
const sectionLanding = document.getElementById('section-landing');
const sectionQuestion = document.getElementById('section-question');
const sectionEndGame = document.getElementById('section-end-game');
const spanTimer = document.getElementById('span-timer');
const questionTitle = document.getElementById('question-title');

let timerId;

//define a question
//title
//choices
    //title
    //isCorrect

//array
//obj
//string
//number
//boolean
//null



//when the start button is clicked
btnStartGame.addEventListener('click', function(event){

showQuestionSection();

});

function endGame(){

    // end game
    // show the end game page
    sectionEndGame.classList.remove('hide');
  
    // stop the timer
    stopTimer()
    // hide the question section
    sectionQuestion.classList.add('hide');
  
  }

function startTimer(){

    timerId = setInterval(function(){

//deduct the time by 1
const timeRemaining = Number(spanTimer.textContent) -1;
spanTimer.textContent = timeRemaining;

//if time remaining goes below 0
if(timeRemaining <= 0){
    endGame();
}
//end game
    }, 1000);
}

function stopTimer(){
    clearInterval(timerId);
}

function showQuestion(index){

    const question = questions[index];

    questionTitle.textContent = question.title;
}

function showQuestionSection(){
    //hide the landing page
    sectionLanding.classList.add('hide');
    //show the question section
    sectionQuestion.classList.remove('hide');

    //once we are int he question section, start the timer
    startTimer();

}

showQuestion(0)

//!! TO DO !!

//When the question is presented and the user clicks on it check if the choice is correct or not.


//if correct - display correct feedback and move to the next question


//if incorrect - display the wrong feedback & deduct 10secs from the time


//if after deducting the time, and the remaining time becomes negative  then --end game.

//if time left is positive - move on to the next question. 

//if the user clicks on a choice in the last question, then end game. 

//user can type in their name and click submit
//store the name and high score in local storage
//hide the end game page
//show the high score page

//highscore page - show all the previous high scores
//grab the datafrom localstorage

//when a user clicks "back to home" -- refresh the page












