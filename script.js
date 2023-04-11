//this variables will help us to select each class whenever they are called 
var info_box = document.querySelector(".info-box"); 
var start_btn = document.querySelector(".start-btn button"); 
var quiz_box = document.querySelector(".quiz-box"); 
var timeCount = document.querySelector(".timer .time-sec"); 


// when star btn clicked the quiz will start 
start_btn.onclick = ()=>{
    quiz_box.classList.add("activeInfo");
    info_box.classList.add("activeInfo");  

 //This functions will stars as soon as the start button its clicked 
    showQuestions(que_count); 
    startTimer(59); 
    
}

var que_count = 0; 

var counter; 
var timeValue = 59; 

//the "questions" array will store our questions and their options 
var questions = [
    {
        //index: 0,
        number: 1,
        question: "Strings and values must be enclosed whitin ______ when being assigned to variables.",
        correct: "2. curly brackets", 
        options: [
            "1. commas",
            "2. curly brackets",
            "3. quotes",
            "4. parenthesis"

        ] 

    },

    {
        //index: 1,
        number: 2,
        question: "The condition in an if / else statement is enclosed with ______. ",
        correct: "3. parenthesis",
        options: [
            "1. quotes",
            "2. curly brackets",
            "3. parenthesis",
            "4. square brackets"

        ] 
    },

    {
        //index: 2,
        number: 3,
        question: "Commonly used data types DO not include:",
        correct: "3. alerts",
        options: [
            "1. strings",
            "2. booleans",
            "3. alerts",
            "4. numbers"
    
            ] 
    
    },


    {
        //index: 3,
        number: 4,
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        correct: "4. console.log", 
        options: [
            "1. JavaScript",
            "2. terminal/bash",
            "3. for loops",
            "4. console.log"
    
        ] 
    
    },

    {
        //index: 4, 
        number: 5,
        question: "Arrays in JavaScript can be used to strore _______:",
        correct: "4. all of the above",
        options: [
            "1. numbers and string",
            "2. other arrays",
            "3. booleans",
            "4. all of the above"
        ] 
    },
]; 

// This function will alow us to print a diferent question in the que-text area according to the index of each 
function showQuestions(index) {
    var que_text = document.querySelector(".que-text");
    var op_list = document.querySelector(".option-list"); 
    var que_tag = "<span>" + questions[index].number + "." + questions[index].question + "</span>";
    var option_tag = '<div class="option">' + questions[index].options[0]+ '<span></span></div>'
                        + '<div class="option">' + questions[index].options[1]+ '<span></span></div>'
                        +'<div class="option">' + questions[index].options[2]+ '<span></span></div>'
                        +'<div class="option">' + questions[index].options[3]+ '<span></span></div>';
    que_text.innerHTML = que_tag;
    op_list.innerHTML = option_tag; 

    //here i declare a variable called option that will select all the posible options 
    var option = op_list.querySelectorAll(".option"); 
    
    //this loop will aplly the attribute of selected if clicked any of the options (wont evaluate if correct or wrong)
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}


function optionSelected(answer) {
    //here we declare wich are the right answers according to each question
    var userAnswer = answer.textContent; 
    var correctAnswer = questions[que_count].correct; 
    var answerResult = document.querySelector("#result");

    //this conditions will evaluate if the answer its correct or wrong 
    if (userAnswer === correctAnswer) {
        answerResult.textContent = "Correct!"; 
        showQuestions(que_count);
        que_count++;
    } else if (userAnswer !== correctAnswer) {
        answerResult.textContent = "Wrong!"; 
        showQuestions(que_count);
        que_count++;    
    }

}







//the starTimer function will make the time start running when you start the quiz and will end if the time is smaller than 0 
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if (time < 0) {
            clearInterval(counter); 
            timeCount.textContent = "00";
            
        }
  }
}

