//https://www.triviaplaying.com/619-Easy-Kids-Trivia-Toy-Story.htm innblástur að spurningum 
console.log("virkar")

var container = document.querySelector("#container");
var header = document.querySelector("#header");
var quizContainer = document.querySelector("#quiz_container");
var quizInfo = document.querySelector("#quiz-info");
var quizContent = document.querySelector("#quiz-content");
var question = document.querySelector("#question");
var button = document.querySelector("#prevBtn");
var button = document.querySelector("#nxtBtn");
var radioButtons = document.querySelector("#radioInput");
var resultsContainer = document.querySelector("#resultsContainer");
var tryAgain = document.querySelector("#tryAgain");
//////////////////////////////////////////////////////
alert("Welcome to the Toy Story quiz! Click Ok to play");//alert sem býður þig velkominn á síðuna

var myQuestions = [//allar spurningar og svör sem ég mun nota í verkefninu og númer á spurningum
    {
      options: [
        {
          option: 'Alien',
          answer: false
        },
        {
          option: 'Cowboy',
          answer: true
        },
        {
          option: 'Dinosaur',
          answer: false
        },
      ],
      title: 'Question #1',
      question: 'What is Woody?',
  },
  {
    options: [
      {
        option: 'Spaceman action figure named Buzz Lightyear',
        answer: true,
        
      },
      {
        option: 'Rocket',
        answer: false
      },
      {
        option: 'Robotic dog',
        answer: false
      },
    ],
    title: 'Question #2',
    question: 'What toy does Andy recieve at the beginning of the movie?',
  },
  {
    options: [
      {
        option: 'Andy',
        answer: false,
        
      },
      {
        option: 'Barnabus Stinson',
        answer: false
      },
      {
        option: 'The other toys',
        answer: true
      },
    ],
    title: 'Question #3',
    question: 'Woody becomes resentful, especially as Buzz also gets attention from who?',
  },
  {
    options: [
      {
        option: 'Sandy',
        answer: false
      },
      {
        option: 'Anton',
        answer: false
      },
      {
        option: 'Andy',
        answer: true
      },
    ],
    title: 'Question #4',
    question: 'What is the name of the toys owner?',
  },
  {
    options: [
      {
        option: 'Ted',
        answer: false,
        
      },
      {
        option: 'Sid',
        answer: true
      },
      {
        option: 'Tod',
        answer: false
      },
    ],
    title: 'Question #5',
    question: 'Who is the antagonist of the story?',
  },
  {
    options: [
      {
        option: 'Birthday',
        answer: true,
        
      },
      {
        option: 'Christening',
        answer: false
      },
      {
        option: 'Party',
        answer: false
      },
    ],
    title: 'Question #6',
    question: 'Andys family is moving away one week before his what?',
  },
  {
    options: [
      {
        option: 'Ankle',
        answer: false
      },
      {
        option: 'Left arm',
        answer: true
      },
      {
        option: 'Right leg',
        answer: false
      },
    ],
    title: 'Question #7',
    question: 'Buzz tries to fly, but instead crashes down the stairs, breaks his what?',
  },
  {
    options: [
      {
        option: 'Throw him out the window',
        answer: false
      },
      {
        option: 'Make fun of him',
        answer: false
      },
      {
        option: 'Repair his arm',
        answer: true
      },
    ],
    title: 'Question #8',
    question: 'What do Sids toys do to Buzz Lightyear?',
  },
  {
    options: [
      {
        option: 'War',
        answer: false,
        
      },
      {
        option: 'Another trip to Pizza Planet',
        answer: false,
      },
      {
        option: 'New toy arrivals',
        answer: true
      },
    ],
    title: 'Question #9',
    question: 'On Christmas Day, Woody and Buzz stage another mission to prepare for the what?',
  },
  {
  options: [
    {
      option: 'Cat',
      answer: false,
      
    },
    {
      option: 'Dog',
      answer: true,
    },
    {
      option: 'Lion',
      answer: false
    },
  ],
  title: 'Question #10',
  question: 'Woody and Buzz share a worried smile as they discover Andys new Christmas gift is a what?',
},
]


var displayQuestion = function(currentQuestion){
  console.log(currentQuestion)

  var options = '<form>'//radio buttons virka mögulega ekki almennilega nema þeir séu innan í formi
  for( var i = 0; i < currentQuestion.options.length; i++){
    options += `<label><input name="options" class="radioInput" type="radio"> ${currentQuestion.options[i].option}</label>` // hvar erum við að taka inn svar gildið?
  }
  options += '</form>';

quizContainer.innerHTML = `
    <div id="quiz-info">
    <h1>${currentQuestion.title}</h1>
        <div id="quiz-content">
            <div id="question">
              <h2>${currentQuestion.question}</h2>
              <form>${options}</form>
            </div>
        </div>
        <div id="btns">
        <button id="prevBtn" onclick="previousQuestion()">Back</button>
        <button id="nxtBtn" onclick="nextQuestion()">Next</button>
        </div>
    </div>
    `//þegar síðan loadast kemur þetta upp í html-inu, og sýnir fyrstu spurningu, svör og titil
    console.log('div keyrt');
} 


//Hún kallar á þetta þegar quiz-ið renderast fyrst
//  -----------------------
var value = 0;
displayQuestion(myQuestions[value]);//kallar á displayquestions svo að 1 spurning sjáist þegar það er loadað síðunni
//  -----------------------
var currentPage = 0;//spurning byrjar í núlli
var points = 0;//stig byrja í núlli

var nextQuestion = function(){//næsta spurning, þegar ýtt er á next takkann loopar síðan í gegnum þetta function til að sýna næstu spurningu
  console.log("next question");

  var radioButtons = document.getElementsByClassName("radioInput")

  var isSomethingChecked = false //false er default stilling á radio buttons þangað til þeir eru checked
    for(var i = 0; i < myQuestions[currentPage].options.length; i++){
      // console.log("array:",myQuestions[currentPage].options[i].answer === true)
      // console.log("radiobutton:",radioButtons[i].checked)
    if(myQuestions[currentPage].options[i].answer === true && radioButtons[i].checked === true){//ef rétt svar er valið kemstu áfram í quizinu
      points += 1//ef rétt svar er valið færðu +1 stig
      console.log(points)
      // console.log(myQuestions)
      }   
    if (radioButtons[i].checked === true){
      isSomethingChecked = true 
      
      }
    }

    if(!isSomethingChecked){//ef ekkert er valið birtist alert sem segir þér að það verði að velja svar
      alert("You have to choose an answer!")
      return
    }
    if(currentPage < myQuestions.length -1){//bætir við næstu svörum á síðuna þegar það er svarð rétt, eða fer til baka um einn. fer eftir hvort þú ýtir á backe ða next.
      currentPage += 1
    }
    //
    else{//þegar það eru komnar 10 spurningar birtist þessi container innan í html-ið sem inniheldur stigatölu  og takka sem gerir þér kleyft að prufa aftur
      quizContainer.innerHTML = `
      <div id="resultsContainer">
        <h2>You got ${points} out of ${myQuestions.length}</h2>
        <button id="tryAgain" onclick="window.location.href = window.location.href;">Try again?</button>
      </div>`;
      
    }//ég verð að nota window.location.href=window.location.href; því að location.refresh() reloadar síðunni bara endalaust aftur og aftur þótt að það sé function á onclick takka. Skrítið og veit ekki afhverju sp. albert eða smára

  value++ // fer áfram um eina spurningu þegar ýtt er a Next takkann
  displayQuestion(myQuestions[value]);
}



//////////////////////////////////

var previousQuestion = function(){//bakkar um eina spurningu þegar ýtt er á Back takkann
  console.log("previous question")
  value--
  displayQuestion(myQuestions[value]);
  return;
}

//////////////////////////////


//Anton Örn Kærnested