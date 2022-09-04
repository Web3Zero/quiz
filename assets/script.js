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

/ Landing Page:
    // When the start game button is clicked:
        // Hide the landing page
        // Show the question section
        // Start the timer on question page
// Question Page:
    // Timer should have already started
    // When the user clicks on one of the question choices
        // Check if the if the choice is correct or not
            // If correct, display correct feedback, move on to next Q
            // If incorrect, display incorrect feedback
                // Deduct 10 sec from remaining time
                // if after deducting the time, time remaining <=0
                    // end game
                // if time remains positive
                    // move on to next question
            // If user clicks on a choice in the last Q
                // end game
// Endgame Function:
    // Hide Question Page, show Endgame section
    // Stop the timer
    // Show the save initials and save score functions
// End Game Section:
    // If the user clicks on submit button without entering anything
        // display alert, tell user to type in an input
    // If the user types in something and clicks submit
        // store the user high score & initial in local storage
        // show the high score page, hide the end game page
// High Score Page:
    // Show all the previous high scores
    // get the data from local storage
    // when user clicks back to home
        // redirect user to landing page









