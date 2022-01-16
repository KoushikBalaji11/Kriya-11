var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

document.addEventListener('contextmenu', event => event.preventDefault());

$icon = document.querySelector('.icon');
$arrow1 = document.querySelector('.arrow1');
$arrow2 = document.querySelector('.arrow2');
$arrow3 = document.querySelector('.arrow3');
$arrow4 = document.querySelector('.arrow4');
$arrow5 = document.querySelector('.arrow5');
$arrow6 = document.querySelector('.arrow6');

function arrow() {
  $arrow1.animate([
    {left: '0'},
    {left: '10px'},
    {left: '0'}
  ],{
    duration: 700,
    iterations: Infinity
  });

  $arrow2.animate([
    {left: '0'},
    {left: '10px'},
    {left: '0'}
  ],{
    duration: 700,
    iterations: Infinity
  });

  $arrow3.animate([
    {left: '0'},
    {left: '10px'},
    {left: '0'}
  ],{
    duration: 700,
    iterations: Infinity
  });

  $arrow4.animate([
    {left: '0'},
    {left: '10px'},
    {left: '0'}
  ],{
    duration: 700,
    iterations: Infinity
  });

  $arrow5.animate([
    {left: '0'},
    {left: '10px'},
    {left: '0'}
  ],{
    duration: 700,
    iterations: Infinity
  });

  $arrow6.animate([
    {left: '0'},
    {left: '10px'},
    {left: '0'}
  ],{
    duration: 700,
    iterations: Infinity
  });
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal = document.getElementById("myModal");

var circuitModal1 = document.getElementById("circuit_modal1");
var circuitModal2 = document.getElementById("circuit_modal2");
var circuitModal3 = document.getElementById("circuit_modal3");
var circuitModal4 = document.getElementById("circuit_modal4");
var circuitModal5 = document.getElementById("circuit_modal5");

var brainiacModal1 = document.getElementById("brainiac_modal1");
var brainiacModal2 = document.getElementById("brainiac_modal2");
var brainiacModal3 = document.getElementById("brainiac_modal3");
var brainiacModal4 = document.getElementById("brainiac_modal4");
var brainiacModal5 = document.getElementById("brainiac_modal5");
var brainiacModal6 = document.getElementById("brainiac_modal6");
var brainiacModal7 = document.getElementById("brainiac_modal7");
var brainiacModal8 = document.getElementById("brainiac_modal8");

var codingModal1 = document.getElementById("coding_modal1");
var codingModal2 = document.getElementById("coding_modal2");

var designModal1 = document.getElementById("design_modal1");
var designModal2 = document.getElementById("design_modal2");
var designModal3 = document.getElementById("design_modal3");
var designModal4 = document.getElementById("design_modal4");
var designModal5 = document.getElementById("design_modal5");

var quizModal1 = document.getElementById("quiz_modal1");
var quizModal2 = document.getElementById("quiz_modal2");
var quizModal3 = document.getElementById("quiz_modal3");
var quizModal4 = document.getElementById("quiz_modal4");
var quizModal5 = document.getElementById("quiz_modal5");
var quizModal6 = document.getElementById("quiz_modal6");
var quizModal7 = document.getElementById("quiz_modal7");
var quizModal8 = document.getElementById("quiz_modal8");

var managementModal1 = document.getElementById("management_modal1");
var managementModal2 = document.getElementById("management_modal2");

circuitModal1.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "ELECTRIQUE";  
  document.getElementById("modal_descriptionPara").innerHTML = "Well, well, well...Are you a tech geek who is acquainted with the field of electrical machines? Waiting to \
      showcase your skills and knowledge? Then this event is right for you. \
      Introducing Electrique from team IEEE SC - 12951. \
      We have designed this event as a mixture of both fun and facts in the right amount. \
      Now, what are you waiting for? Register, participate, win and celebrate.";
  document.getElementById("modal_rulesPara").innerHTML = "\
      <ul class=\"lists\"> \
        <li class=\"points\">Participants should be present 10 minutes before the scheduled time.</li> \
        <li class=\"points\">Participants should be sat properly in a lighted place.</li> \
        <li class=\"points\">A proper network should be available.</li> \
        <li class=\"points\">The camera should be ON for Round - 2.</li> \
        <li class=\"points\">Audio and Video should be perfect.</li> \
      </ul>";
  document.getElementById("round1").innerHTML = "ROUND 1: THINK-A-THON";
  document.getElementById("round2").innerHTML = "ROUND 2: MAKE OR BREAK";
  document.getElementById("modal_teamSizePara").innerHTML = "Team of 2 Members";
  document.getElementById("modal_round1Para").innerHTML = "<h4>PLATFORM: Kahoot, Puzzle.org, Google Meet</h4> \
      Put your thinking cap on!<br> \
      In this round, the team of 2 members will be divided into an individual. The individual candidate will play \
      an interesting game. The game contains electrical-based questions, puzzles, etc. The marks scored by both \
      persons in the team will be evaluated and the average score will be taken. After this fun-filled round, the \
      team will force their way into the second round.<br> \
      Prerequisite for this round: \
      <ul> \
        <li>Stable internet connection</li> \
        <li>Rapid problem-solving skills</li> \
      </ul> \
      \"When you have confidence, you can do anything\".<br> \
      If you believe in yourself, you do not have to fear any challenge. Wishing you all the success for this \
      round!!";
  document.getElementById("modal_round2Para").innerHTML = "<h4>PLATFORM: Google Meet, Canvas</h4> \
      Turning coins into components!<br> \
      This round is based on the technological aspects of electricity, especially the design and application of circuitry and electronic equipment. \
      The participants will be given one main question which will be related \
      to building a circuit. But to build the circuit they’ll need components, to buy the components they’ll need \
      coins and to earn the coins they need to work, i.e solve the questions. So, they'll be given a set of questions \
      in 2 separate G-forms where each member of the team will have to attend one g-form. Later the team can \
      use the cumulative points as coins to get the components to build their main circuit.";
  document.getElementById("round3").innerHTML = "";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("modal_round3Para").innerHTML = "";
  document.getElementById("time").innerHTML = "1:30 PM - 4:30 PM";
  document.getElementById("date").innerHTML = "February 19, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/916374108812\"target=\"_blank\">Dheeksha C - 6374108812</a><br><a class=\"whatsapp\"href=\"https://wa.me/919361277079\"target=\"_blank\">Preethi S - 9361277079</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/917358733985\"target=\"_blank\">Ajay Shekar D - 7358733985</a><br><a class=\"whatsapp\"href=\"https://wa.me/918300898773\"target=\"_blank\">Mavsi Aadhavan C - 8300898773</a>";
  document.getElementById('modal_start').scrollIntoView();
}

circuitModal2.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "CLIP AND CLAMP";  
  document.getElementById("modal_descriptionPara").innerHTML = "Clip and Clamp is a design event based on Digital Electronics. Participants are supposed to design the \
      circuit and simulate the appropriate output. This event serves as a platform to showcase the participants \
      individuality by examining the technical thinking of them. Participate to excite your creative neurons.";
  document.getElementById("modal_rulesPara").innerHTML = "\
  <ul class=\"lists\"> \
    <li class=\"points\">Everyone should use kriya id as a name for entire event.</li> \
    <li class=\"points\">Should be present in the meeting on time.</li> \
    <li class=\"points\">Video should be enabled throughout the event.</li> \
    <li class=\"points\">Participants should come in proper dress code.</li> \
    <li class=\"points\">Malpractice is strictly prohibited.</li> \
    <li class=\"points\">Proper internet connection is required.</li> \
    <li class=\"points\">Time limit will be strictly adhered to.</li> \
    <li class=\"points\">Usage of laptops is preferred over mobile phones.</li> \
    <li class=\"points\">Judge’s decision will be final.</li> \
  </ul>";
  document.getElementById("round1").innerHTML = "ROUND 1";
  document.getElementById("round2").innerHTML = "ROUND 2";
  document.getElementById("round3").innerHTML = "";
  document.getElementById("modal_teamSizePara").innerHTML = "Individual Participation";
  document.getElementById("modal_round1Para").innerHTML = "<h4>PLATFORM: Zoom</h4> \
      In this round, participants are initially given PDFs in a drive. Each PDF contains a circuit \
      diagram, and the participants are asked to crack the circuit and obtain the output. The first \
      PDF will have no password, whereas the remaining contains a password that is the output of \
      the previous circuit. The last PDF contains a google form to which the participants need to \
      respond.<br> Participants for Round 2 will be scrutinized based on their responses.";
  document.getElementById("modal_round2Para").innerHTML = "<h4>MEETING PLATFORM: Zoom<br><br>EVENT PLATFORM: Circuitverse</h4> \
      This round is to test design skills and logical thinking. The shortlisted participants will be \
      asked to join the online platform – ‘Zoom’ through breakout room option we will be \
      monitoring the participants. The circuit designing event will be conducted through an online \
      digital circuit designing platform called ‘Circuitverse’.<br> \
      Participants will be given a circuit with a missing component and an output for the circuit. \
      The participants are expected to find and simulate the circuit in the above-said platform. \
      After completion, participants need to present their output. Winners will be carefully chosen \
      based on their outputs and their rapid designing skills.";
  document.getElementById("modal_round3Para").innerHTML = "";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("time").innerHTML = "9:30 AM - 12:00 PM";
  document.getElementById("date").innerHTML = "February 19, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919360542213\"target=\"_blank\">Dhinakar B - 9360542213</a><br><a class=\"whatsapp\"href=\"https://wa.me/917010252221\"target=\"_blank\">Abishek P - 7010252221</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919487748935\"target=\"_blank\">Dharani K - 9487748935</a><br><a class=\"whatsapp\"href=\"https://wa.me/919442671132\"target=\"_blank\">Aksaya Karthika A - 9442671132</a>";
  document.getElementById('modal_start').scrollIntoView();
}

circuitModal3.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "TECHKNACK";  
  document.getElementById("modal_descriptionPara").innerHTML = "TechKnack, rack your brain for Round 1 of Electrocade to finish the crossword puzzle by solving \
  the technical questions. The ones with the knack will move to Round 2 Bidtronics, where they'll get to bid \
  and build a functional circuit with the electronic components bought from auction.";
  document.getElementById("modal_rulesPara").innerHTML = "\
  <ul class=\"lists\"> \
    <li class=\"points\">The participant must attend the event using Laptop/PC.</li> \
    <li class=\"points\">Participants involving in any sorts of malpractice will be disqualified.</li> \
    <li class=\"points\">The participant must switch on their video for the entire event.</li> \
    <li class=\"points\">Per team one solution can be given.</li> \
    <li class=\"points\">Time of submission will be considered as a tie breaker.</li> \
  </ul>";
  document.getElementById("round1").innerHTML = "ROUND 1: ELECTROCADE";
  document.getElementById("round2").innerHTML = "ROUND 2: BIDTRONICS";
  document.getElementById("modal_teamSizePara").innerHTML = "Minimum: 1 Member<br>Maximum: 2 Members";
  document.getElementById("modal_round1Para").innerHTML = "<h4>PLATFORM: Google Meet or Microsoft Teams</h4> \
      Each Team (2 members per team) will be given a crossword puzzle in a document. The Questions \
      will be displayed in the screen one by one. The Team members will have to fill the crossword puzzle and \
      submit it within the specified time. The teams will be shortlisted based on the number of questions \
      answered correctly.<br> \
      Rules:<br> \
      <ul> \
        <li>The questions will be based on electrical and electronics.</li> \
        <li>Participants should send the solved puzzle within the given time.</li> \
        <li>Per team one solution can be given.</li> \
        <li>Time of submission will be considered as a tie breaker.</li> \
      </ul> \
      ";
  document.getElementById("modal_round2Para").innerHTML = "<h4>PLATFORM: Google Meet</h4> \
      Every team will be given a base point of 1000. With that they will have to bid for circuit components \
      in the auction we conduct. It is must that they have to buy at least three components in the auction. Besides \
      there will be a store where you can buy other necessary components for higher price. With all the \
      components they have bought, a complete circuit with a proper functionality must be built. They will have \
      to brief the circuit and convincingly sell it to the judges. Points will be awarded based on auction and \
      functionality of the circuit.<br> \
      Rules:<br> \
      <ul> \
        <li>Each team should buy atleast 3 components in the bid.</li> \
        <li>Participants can be also able to sell the components in the store.</li> \
        <li>Participants can use any simulators for their circuit.</li> \
        <li>Bid price should not get lower than the base price.</li> \
        <li>Judge will be the faculty and the decision of the judge is the final.</li> \
      </ul> \
      ";
  document.getElementById("round3").innerHTML = "";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("modal_round3Para").innerHTML = "";
  document.getElementById("time").innerHTML = "10:30 AM - 12:30 PM & 1:30 PM - 4:30 PM";
  document.getElementById("date").innerHTML = "February 19, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919344785172\"target=\"_blank\">Bharath R - 9344785172</a><br><a class=\"whatsapp\"href=\"https://wa.me/916382549485\"target=\"_blank\">Swetha Dharshini M - 6382549485</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919345003669\"target=\"_blank\">Harita J - 9345003669</a><br><a class=\"whatsapp\"href=\"https://wa.me/919488612886\"target=\"_blank\">Siddharth V - 9488612886</a>";
  document.getElementById('modal_start').scrollIntoView();
}

circuitModal4.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "TECHTRIX";  
  document.getElementById("modal_descriptionPara").innerHTML = "Capturing the audience in the circuit and make them to tinker their brain to solve the problems on the Embedded \
      Systems. The Participants are tested for their knowledge in the domain of embedded systems and Interfacing. The \
      rounds are structured to know their level of understanding and shortlist them to the final round wherein they will \
      be asked to design a solution for a real life problem statement for the given constrains.";
  document.getElementById("modal_rulesPara").innerHTML = "\
  <ul class=\"lists\"> \
    <h3>ROUND 1</h3> \
    <li class=\"points\">Participants can use pen and paper if required./PC.</li> \
    <li class=\"points\">Adhere to time limit and avoid malpractice.</li> \
    <li class=\"points\">Participants should make sure that they have stable network connection.</li> \
    <li class=\"points\">Please be present 10 minutes prior to the event commencement.</li> \
    <li class=\"points\">Participants will be selected on the basis of the time of submission and accuracy.</li> \
    <h3>ROUND 2</h3> \
    <li class=\"points\">Participants can use pen and paper if required./PC.</li> \
    <li class=\"points\">Adhere to time limit and avoid malpractice.</li> \
    <li class=\"points\">Participants should make sure that they have stable network connection.</li> \
    <li class=\"points\">The code should be constructed by the constraints which will be provided by the convenors.</li> \
    <li class=\"points\">Participants will be monitored continuously during the event, Laptop is preferred.</li> \
  </ul>";
  document.getElementById("round1").innerHTML = "ROUND 1: PRELIMS";
  document.getElementById("round2").innerHTML = "ROUND 2: FINAL";
  document.getElementById("modal_teamSizePara").innerHTML = "Minimum: 1 Member<br>Maximum: 2 Members";
  document.getElementById("modal_round1Para").innerHTML = "This will be conducted in canvas platform this round consists of MCQ ‘S, Crosswords. Time duration for this \
      round is 1 hour .This round is to test the knowledge of participants with respect to the domain the questions \
      includes basic circuit theory, sensors, Microcontrollers, etc. The participants will be asked to login in canvas \
      platform at the time of the event they also will be asked to join the Google meet the shortlisted participants will \
      be selected for second round. Judge decision will be final.";
  document.getElementById("modal_round2Para").innerHTML = "This round will be conducted through Tinkercad and the participants will be monitored through google meet \
      .The Problem statement will be provided to the selected participants and they will be asked to design a solution \
      (circuit) and simulate that circuit for the given problem. Time duration for this round will be 1 hour 30 minutes. \
      The winners will be selected based on the circuit they designed and the efficiency of the code .Judge decision \
      will be final";
  document.getElementById("round3").innerHTML = "";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("modal_round3Para").innerHTML = "";
  document.getElementById("time").innerHTML = "1:30 AM - 4:30 PM";
  document.getElementById("date").innerHTML = "February 20, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/917092704779\"target=\"_blank\">Srikanth - 7092704779</a><br><a class=\"whatsapp\"href=\"https://wa.me/917598883011\"target=\"_blank\">Anjana V R - 7598883011</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/917975406326\"target=\"_blank\">Uttkarsh - 7975406326</a><br><a class=\"whatsapp\"href=\"https://wa.me/917708765116\"target=\"_blank\">Arun Kumar - 7708765116</a>";
  document.getElementById('modal_start').scrollIntoView();
}

circuitModal5.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "ELECTXPLORE";  
  document.getElementById("modal_descriptionPara").innerHTML = "Electxplore is an electrical based event. Electricity laid foundation to the modern \
      technology and its wonders, and A circuit is more than just a closed loop with \
      components. Are you capable of designing the heart of modern world functioning? \
      Isn't itmore fascinating to team up with a friend and light sparks to your \
      Knowledge. “Technology without heart is not enough”.";
  document.getElementById("modal_rulesPara").innerHTML = "\
  <ul class=\"lists\"> \
    <li class=\"points\">Any discrepancy during the event should be immediately reported to the event convener to take necessary actions.</li> \
    <li class=\"points\">Any late response will not be taken into consideration.</li> \
    <li class=\"points\">ParThe judges’ decision is final for all the events and will not be subjected to further discussions.</li> \
    <li class=\"points\">Indulging in any malpractices will lead to immediate disqualification.</li> \
    <li class=\"points\">Prompt submission of the forms.</li> \
    <li class=\"points\">No extra time will be given.</li> \
    <li class=\"points\">Webcams need to be turned on throughout the event.</li> \
  </ul>";
  document.getElementById("round1").innerHTML = "ROUND 1";
  document.getElementById("round2").innerHTML = "ROUND 2";
  document.getElementById("modal_teamSizePara").innerHTML = "Team of 2 Members";
  document.getElementById("modal_round1Para").innerHTML = "In this round team members play individually for their team. Each member will answer everyquestion \
      separately. Marks are given as per below \
      If any one member given correct answer and other one didn't answer, or both given correctanswer, \
      question’s marks will be given. \
      If anyone given correct answer and other answered wrongly or both given wrong answer or both \
      didn't answer the question, no mark will given.";
  document.getElementById("modal_round2Para").innerHTML = "The round 2 has two parts.<br> \
      <b>PART A:</b><br> \
      It has output wave forms as questions and participating teams must find the circuit of theoutput \
      waveforms. Part A will be in conducted in canva platform. \
      Separate set of questions will be given to both participants of team. Both team mates pointswill be \
      cumulated and average mark is taken.<br>\
      <b>PART B:</b><br> \
      In this part, errored circuit will be given, teams must spot the error in the circuit and should give \
      the correct answer. \
      Whichever team completes this round with maximum score and in short duration of time,have an \
      added advantage. \
      That is, they’ll be allowed get one bonus question to get additional mark or allowed to shoot a \
      question to rest of the teams and their mark depends upon that question too. All these marks will be \
      tallied at last for the final results of round 2. Top 5 teams from round 2 will be qualified for the 3rd \
      round.";
  document.getElementById("round3").innerHTML = "ROUND 3";
  document.getElementById("modal_round3Para").innerHTML = "Finalist picks their component from the lucky draw, which will be held in online. \
      The team has to draw a circuit diagram of a real time application of the electrical component \
      mentioned in the draw. Moreover, the teams shall be asked to describe their circuitdiagram to the \
      judge. Any participant who comes close to drawing and explaining the circuit diagram will be the \
      winner.";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("time").innerHTML = "9:00 AM - 12:30 PM";
  document.getElementById("date").innerHTML = "February 20, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919698231726\"target=\"_blank\">Venkatesh Raju V S - 9698231726</a><br><a class=\"whatsapp\"href=\"https://wa.me/917358733985\"target=\"_blank\">Ajay Shekar D - 7358733985</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/917448452533\"target=\"_blank\">Karthikeyan N - 7448452533</a><br><a class=\"whatsapp\"href=\"https://wa.me/918554965245\"target=\"_blank\">Divyashree M - 8554965245</a>";
  document.getElementById('modal_start').scrollIntoView();
}

brainiacModal1.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "SET TO SCAVENGE";  
  document.getElementById("modal_descriptionPara").innerHTML = "Interested in solving mysteries ? Fan of thrillers ? This is the right game for you ! Puzzle hunt \
      through Google form! In the first round, Players will have to complete/solve challenges to find a code \
      to move on to the next round. In the second and final round, the participants will have to work \
      through a set of 4 Google forms to find the final code. Winners and runners will be selected based on \
      how fast they solve the puzzle and put together the code."; 
  document.getElementById("modal_rulesPara").innerHTML = "\
  <ul class=\"lists\"> \
    <li class=\"points\">Participants are requested to join the Google meet on time.</li> \
    <li class=\"points\">Participants are expected to be in the Google meet throughout the session.</li> \
    <li class=\"points\">Judge's decision will be final.</li> \
    <li class=\"points\">Only individual participation.</li> \
  </ul>";
  document.getElementById("round1").innerHTML = "ROUND 1";
  document.getElementById("round2").innerHTML = "ROUND 2";
  document.getElementById("modal_teamSizePara").innerHTML = "Individual Participation";
  document.getElementById("modal_round1Para").innerHTML = "A set of 10 to 15 questions will be presented to the participants. \
      Each question will have a small clue which will help them in their quest to find the final code.";
  document.getElementById("modal_round2Para").innerHTML = "A set of 4 Google forms will be given to the participants. The first google form will contain a \
      set of questions/puzzles and instructions on how to find the first digit of the 3-digit code. The \
      second and third form will also contain a set of questions/puzzles and instructions on how to find \
      the second and third digit respectively. The fourth Google form will provide provisions to enter the final \
      code found by the participants";
  document.getElementById("round3").innerHTML = "";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("modal_round3Para").innerHTML = "";
  document.getElementById("time").innerHTML = "1:30 PM - 4:30 PM";
  document.getElementById("date").innerHTML = "February 19, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/918300898773\"target=\"_blank\">Mavsi Aadhavan C - 8300898773</a><br><a class=\"whatsapp\"href=\"https://wa.me/918754429240\"target=\"_blank\">G Janani - 8754429240</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/918903772674\"target=\"_blank\">Annie Iniya J - 8903772674</a><br><a class=\"whatsapp\"href=\"https://wa.me/919361242014\"target=\"_blank\">Toshini Rajesh - 9361242014</a>";
  document.getElementById('modal_start').scrollIntoView();
}

brainiacModal2.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "TECH TALK";  
  document.getElementById("modal_descriptionPara").innerHTML = "Are you someone who reads Tech news, but doesn’t know where to show off your talent? This \
      event tests the participants' understanding of the recent technological development, Notable technology \
      milestones and other new and upcoming technologies. Gear up for a crossword puzzle testing your basic \
      understanding of the tech industry followed by a rapid-fire round challenging not just your knowledge but \
      your presence of mind. Keep your content ready for a short speech in the final round.";
  document.getElementById("modal_rulesPara").innerHTML = "\
    <ul class=\"lists\"> \
      <li class=\"points\">Make sure your internet connection is strong.</li> \
      <li class=\"points\">Consider your background and camera should be ON through out the course of the event.</li> \
      <li class=\"points\">Unmute the mic only when required.</li> \
      <li class=\"points\">During rounds 2 and 3, participants must unmute the mic to answer the questions.</li> \
      <li class=\"points\">Answers through chat are not accepted.</li> \
      <li class=\"points\">The judges’ decision is the final one. It is not negotiable.</li> \
    </ul>";
  document.getElementById("round1").innerHTML = "ROUND 1: TECH BUZZ";
  document.getElementById("round2").innerHTML = "ROUND 2: MAKE YOUR HANDS DIRTY";
  document.getElementById("round3").innerHTML = "ROUND 3: SPREAK IT OUT";
  document.getElementById("modal_teamSizePara").innerHTML = "Minimum: 1 Member<br>Maximum: 2 Members";
  document.getElementById("modal_round1Para").innerHTML = "<h4>PLATFORM: Microsoft Teams</h4> \
      Each team will be provided with a link for a crossword puzzle. A total of 25 questions to be solved in \
      15 minutes. The teams are asked to find the answers and fill the crossword using the given questions. After \
      finding the answers, an individual from a team should download the completed crossword and upload it in \
      the form provided within 5 minutes. No negative marks. The teams will be graded based on the number of \
      questions answered correctly and the time of submission.";
  document.getElementById("modal_round2Para").innerHTML = "<h4>PLATFORM: Microsoft Teams</h4> \
      Identify the theme and provide a short description/explanation of the picture provided. The team \
      which raises the hand first will be allowed to answer. For every correct answer, 5 points will be provided and \
      for every wrong answer, 3 points will be reduced. Points will be provided only when a clear explanation of \
      the identified theme is provided. Pictures will be displayed one after the other that signify recent Tech \
      trends/events.";
  document.getElementById("modal_round3Para").innerHTML = "<h4>PLATFORM: Microsoft Teams</h4> \
      Each team will be provided with a spot-on topic on current affairs on technology. \
      Once the topic is provided, the team will be moved to a separate room in Microsoft teams where they can discuss within them \
      for a maximum of a minute. Then, a talk on the given topic for a maximum of 3 minutes has to be delivered. \
      Marks will be based on clarity, quality and the delivery of the content.";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("time").innerHTML = "9:30 AM - 12:00 PM";
  document.getElementById("date").innerHTML = "February 19, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919150251876\"target=\"_blank\">Balasarath B S - 9150251876</a><br><a class=\"whatsapp\"href=\"https://wa.me/917339604503\"target=\"_blank\">Udhayakumaran H - 7339604503</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919487760401\"target=\"_blank\">Ajay Deepak. P.M - 9487760401</a><br><a class=\"whatsapp\"href=\"https://wa.me/919384568642\"target=\"_blank\">Koushik Balaji P - 9384568642</a>";
  document.getElementById('modal_start').scrollIntoView();
}

brainiacModal3.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "CONNECT AND THINK";  
  document.getElementById("modal_descriptionPara").innerHTML = "This event that brings your imagination out of you, goes on with a \
      series of rounds. First round is a connections round where the final answers will be basic engineering \
      terms. Top 20 participants will be called off for the next round. In second round, you will be asked to \
      propose an innovative solution for a given commonplace product which has some flaw in it. In this way, \
      you could unleash your power of imagination to solve the problem.";
  document.getElementById("modal_rulesPara").innerHTML = "\
      <ul class=\"lists\"> \
        <li class=\"points\">Referring answers in any other device during the time of the event are strictlyprohibited.</li> \
        <li class=\"points\">Single participant will be able to attend this event.</li> \
        <li class=\"points\">Decision taken by the event conveners will be final.</li> \
        <li class=\"points\">Time limit will be strictly adhered to.</li> \
        <li class=\"points\">Proper Internet connection is required.</li> \
      </ul>";
  document.getElementById("round1").innerHTML = "ROUND 1: TECHNO CONNECTIONS";
  document.getElementById("round2").innerHTML = "ROUND 2: INNO THINK";
  document.getElementById("modal_teamSizePara").innerHTML = "Individual Participation";
  document.getElementById("modal_round1Para").innerHTML = "<h4>PLATFORM: Cisco Webex</h4> \
      It’s time to connect different pictures into a single word. It is a basic technical \
      round that tests your knowledge. Different pictures (2 or more) will be displayed on the screen, \
      Participants will be asked to connect the pictures and to come up with a single technical term.";
  document.getElementById("modal_round2Para").innerHTML = "<h4>PLATFORM: Cisco Webex</h4> \
      The Top 20 participants will be shortlisted from techno Connections will enter this event. \
      Shortlisted participants will be asked to propose a detailed and best innovative solution for a given \
      product (commonplace product with some flaws in it) either by using PPT or the Manual method (using \
      your sketch). The situation will be provided on the day of the event. Time will be provided to prepare for \
      the proposal.";
  document.getElementById("round3").innerHTML = "";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("modal_round3Para").innerHTML = "";
  document.getElementById("time").innerHTML = "9:30 AM - 12:30 PM";
  document.getElementById("date").innerHTML = "February 19, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919626856796\"target=\"_blank\">Ramanathan V - 9626856796</a><br><a class=\"whatsapp\"href=\"https://wa.me/918903488848\"target=\"_blank\">Yogesh V S - 8903488848</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919994992959\"target=\"_blank\">Shri Hari Prasad R - 9994992959</a><br><a class=\"whatsapp\"href=\"https://wa.me/918825766834\"target=\"_blank\">Ramanathan R - 8825766834</a>";
  document.getElementById('modal_start').scrollIntoView();
}

brainiacModal4.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "CONNECT AND THINK";  
  document.getElementById("modal_descriptionPara").innerHTML = "This isn't just another event, \
      rather this an opportunity lying in front of you to test all your potential skills, where we put you through an entire interview process which involve right \
      from aptitude, coding, technical and hr interview which you actually experience in a real interview process. Thus, \
      you can overcome the fear of interview process through this interview simulation event and can ease the real \
      placements with confidence, thereby banging success."; 
  document.getElementById("modal_rulesPara").innerHTML = "\
      <ul class=\"lists\"> \
        <li class=\"points\">Participants have to join the Google Meet.</li> \
        <li class=\"points\">Participants have to switch on the camera throughout the event.</li> \
        <li class=\"points\">Test link will be sent through the Google Meet.</li> \
        <li class=\"points\">Winners will be determined based on the score that participants scored.</li> \
      </ul>";
  document.getElementById("round1").innerHTML = "ROUND 1: PRELIMINARY ROUND";
  document.getElementById("round2").innerHTML = "ROUND 2: TECHNICAL ROUND";
  document.getElementById("modal_teamSizePara").innerHTML = "Individual Participation";
  document.getElementById("modal_round1Para").innerHTML = "Common questions for all.<br>MCQs will be conducted through kahoot platform for each question time will be fixed after 30 mins Coding \
      test will be conducted through Hacker rank it is for 1 hour after every 15 mins google form will be send to \
      collect the photocopy of the code till they have completed";
  document.getElementById("modal_round2Para").innerHTML = "Students will be categorized into 3 groups: First years, Circuit branch, Non-Circuit branch \
  <ul> \
    <li>Questions based on their resume (4-5 questions)</li> \
    <li>Self-introduction for 2 mins.</li> \
    <li>Total Time Taken for each person: 20-25 mins.</li> \
  </ul>";
  document.getElementById("round3").innerHTML = "ROUND 3: BUSINESS MANAGERIAL AND BASIC HR ROUND";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("modal_round3Para").innerHTML = "Total Time Taken for each person: 10-15 mins";
  document.getElementById("time").innerHTML = "Day 1: 9:00 AM - 4:30 PM<br>Day 2: 9:00 AM - 12:30 PM";
  document.getElementById("date").innerHTML = "February 19 and 20, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919361926664\"target=\"_blank\">Aishwarya Lakshmi B - 9361926664</a><br><a class=\"whatsapp\"href=\"https://wa.me/916385483877\"target=\"_blank\">Vivitha L E - 6385483877</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/916380791538\"target=\"_blank\">Rubashree R - 6380791538</a><br><a class=\"whatsapp\"href=\"https://wa.me/918925097722\"target=\"_blank\">Adithya G - 8925097722</a>";
  document.getElementById('modal_start').scrollIntoView();
}

brainiacModal5.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "FORENSICIST";  
  document.getElementById("modal_descriptionPara").innerHTML = "An event to unravel the hidden talents of the young minds in the field of forensics by presenting various \
      challenges faced by the detectives. The various rounds of this event are built under the novel idea of \
      applying knowledge in detecting minute details that an otherwise normal person might miss. Be prepared \
      to unravel the Sherlock Holmes in you."; 
  document.getElementById("modal_rulesPara").innerHTML = " \
      <ul class=\"lists\"> \
        <li class=\"points\">Timings for the rounds must be strictly followed.</li> \
        <li class=\"points\">Decisions of the judge will be final.</li> \
        <li class=\"points\">Participants are not allowed to use external browser tabs other than the event, anyone found so \
        will be disqualified immediately.</li> \
      </ul>";
  document.getElementById("round1").innerHTML = "ROUND 1: LOOK AND LISTEN";
  document.getElementById("round2").innerHTML = "ROUND 2: SOLVE AND SURVIVE";
  document.getElementById("modal_teamSizePara").innerHTML = "Team of 2 Members";
  document.getElementById("modal_round1Para").innerHTML = "This round contains two sections.<br> \
      In the first section, an audio will be played only once for the participants, from which questions \
      will be asked through Google Forms and the answers must be submitted within a stipulated time. The \
      questions will be based on the audio played.<br> \
      In the second section, the participants have to solve a crossword puzzle and answer the \
      questions based on it, through Google Forms within a stipulated time. \
      This round is to test the listening capability and observation skills of the participants.<br>NOTE:<br> \
      <ul> \
        <li>The audio for the first section will be played only once.</li> \
        <li>For the first section, the Google Forms link will be provided only after the audio is played.</li> \
        <li>For the second section, the link for crossword puzzle and the Google Forms will be provided at \
            once and the response will be closed after 10 minutes.</li> \
        <li>For the second section, the marks will only be allotted based on the Google Forms response and \
            not for solving the crossword puzzle.</li> \
        <li>The participants should fill the Google Forms questions individually.</li> \
        <li>The team marks will be the average of both the participants in the team.</li> \
      </ul> \
      ";
  document.getElementById("modal_round2Para").innerHTML = "In this round the participants are given 5 different scenarios which would contain a specific \
      form of encrypted codes/ciphers in the increasing order of difficulty. Each scenario will be displayed \
      separately for a stipulated time period. At the end, the participants will be given a Google Forms link to \
      submit the answers within the given time. This round is to test the decoding skills, memory power, \
      creative thinking and time management of the participants.<br>NOTE:<br> \
      <ul> \
        <li>All the 5 scenarios will have different types of encrypted codes/ciphers.</li> \
        <li>The time for each scenario will be based on the difficulty level.</li> \
        <li>The scenarios will be in increasing order of difficulty.</li> \
        <li>Participants will be given a stipulated time to complete the Google Forms.</li> \
        <li>The participants should fill the Google Forms link individually.</li> \
        <li>The team marks will be the average of both the participants in the team.</li> \
        <li>The selection for the round-3 will be based on the combined scores of round-1&2. The top 10 teams will advance to next round.</li> \
      </ul> \
      ";
  document.getElementById("round3").innerHTML = "ROUND 3: CRIMINALISTIQUE";
  document.getElementById("modal_round3Para").innerHTML = "<h4>PLATFORM: Zoom</h4>In this round the participants are provided with a case file of a crime and are given a chance to \
      interrogate various suspects for a limited duration. The participants are allowed to discuss within \
      themselves and come up with the criminal. The final answer should be reported by completing the case \
      file with all the necessary details.<br>NOTE:<br> \
      <ul> \
        <li>This round will be played as a team.</li> \
        <li>The suspects will be placed in different breakout rooms in zoom.</li> \
        <li>The teams are allowed to interrogate the suspects only for a stipulated duration.</li> \
        <li>All the available photos and videos of the crime scene will be given to the teams.</li> \
        <li>The discussion of the team mates is done in the provided breakout rooms allotted by the technical \
            team in the zoom meeting.</li> \
      </ul> \
      ";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("time").innerHTML = "9:00 AM - 12:00 PM & 2:00 PM - 3.30 PM";
  document.getElementById("date").innerHTML = "February 19, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919566365444\"target=\"_blank\">Nivya Subulaxmi. M - 9566365444</a><br><a class=\"whatsapp\"href=\"https://wa.me/917708168852\"target=\"_blank\">Balamurugan. S - 7708168852</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919952546405\"target=\"_blank\">Praneeth. V - 9952546405</a><br><a class=\"whatsapp\"href=\"https://wa.me/917826830450\"target=\"_blank\">Sasrika Venkatachalapathy - 7826830450</a>";
  document.getElementById('modal_start').scrollIntoView();
}

brainiacModal6.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "TECHSHORTS";  
  document.getElementById("modal_descriptionPara").innerHTML = "This is an event based on electronics. This will test your analytic skill and hasty execution in that domain."; 
  document.getElementById("modal_rulesPara").innerHTML = " \
      <ul class=\"lists\"> \
        <li class=\"points\">For Id verification, college id card is required.</li> \
        <li class=\"points\">Participants should enter the Google meet with their name and the last four digits of the Kriya ID (Eg: priya2133).</li> \
        <li class=\"points\">Video should be enabled throughout the event.</li> \
        <li class=\"points\">Participants should come in proper dress code.</li> \
        <li class=\"points\">Participants should enter the google classroom with their registered email id.</li> \
        <li class=\"points\">Malpractice is strictly prohibited.</li> \
      </ul>";
  document.getElementById("round1").innerHTML = "ROUND 1";
  document.getElementById("round2").innerHTML = "ROUND 2";
  document.getElementById("round3").innerHTML = "";
  document.getElementById("modal_teamSizePara").innerHTML = "Individual Participation";
  document.getElementById("modal_round1Para").innerHTML = "<h4>MEETING PLATFORM: Google Meet<br><br>EVENT TOOLS: Google Classroom</h4>In this round, initially match the following will be displayed as PowerPoint in \
      Google meet. Participants have to solve the Match the Following and find the answers \
      which will be the Google classroom code. They have to join Google Classroom with the \
      code, there Google form will be given. Google form contains 25 questions (fill ups & \
      multiple-choice questions) based on electronics. Participants will be shortlisted based on \
      their quick response with the correct answers.";
  document.getElementById("modal_round2Para").innerHTML = "<h4>MEETING PLATFORM: Google Meet<br><br>EVENT TOOLS: Google Classroom</h4>This round completely tests your analytical skill. First, the drive link will be posted \
      in Google Classroom which we used for round1. There are 2 pdf’s, in the first pdf there \
      will be crossword puzzle. Participants have to solve the puzzle where some boxes are \
      highlighted. Pick the letters from the highlighted boxes, rearrange them to find a word \
      (hint will be given) which is the password for the 2nd pdf. This pdf contains a Problem \
      statement (DIGITAL ELECTRONICS) and a Google form link will be provided to submit \
      their answer sheet. Winners will be selected based on precise answers.";
  document.getElementById("modal_round3Para").innerHTML = "";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("time").innerHTML = "1:30 PM - 4:30 PM";
  document.getElementById("date").innerHTML = "February 20, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/918610660170\"target=\"_blank\">Rubasri R - 8610660170</a><br><a class=\"whatsapp\"href=\"https://wa.me/919384491343\"target=\"_blank\">Aditi S - 9384491343</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919500398072\"target=\"_blank\">Khiruthiha M S - 9500398072</a><br><a class=\"whatsapp\"href=\"https://wa.me/919080430943\"target=\"_blank\">Nithyashri S - 9080430943</a>";
  document.getElementById('modal_start').scrollIntoView();
}

brainiacModal7.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "MET-CAPTCH";  
  document.getElementById("modal_descriptionPara").innerHTML = "Captivate the audience with your metallurgical realization. With this spontaneous and extemporaneous \
      event, showcase your wit and way with words along with your knowledge of metallurgy."; 
  document.getElementById("modal_rulesPara").innerHTML = "";
  document.getElementById("round1").innerHTML = "ROUND 1: PRELIMS";
  document.getElementById("round2").innerHTML = "ROUND 2: FINAL";
  document.getElementById("round3").innerHTML = "";
  document.getElementById("modal_teamSizePara").innerHTML = "";
  document.getElementById("modal_round1Para").innerHTML = "<h4>PLATFORM: Quizizz, Google Meet</h4>This will be conducted through \"Quizizz\" online. Participants will be requested to join Google Meet. \
      Link/Round code will be provided to participants through Google Meet chat box. Once all the participants joined \
      through the link/round code, the round starts (after confirmation). This round consists of 30 questions \
      (comprising of picture-based, odd one out questions). Participants will be given 20-30 seconds (depends on \
      the question) to answer. The leader board will be used to shortlist the participants for the final round.";
  document.getElementById("modal_round2Para").innerHTML = "<h4>PLATFORM: Google Meet</h4>This round will be conducted through Google meet. This round comprises a total of 15 questions. Only one \
      question for one participant will be displayed. Each participant will be shown a group of 8 images in a single \
      slide and will be asked to find the common images which is related to one particular process, machine or \
      material (like captcha). The participants` should identify the name of the process/machine/material and \
      participants need to give an explanation for their answer. The evaluation will be based on the answer for the \
      questions, time of identification and number of images identified.";
  document.getElementById("modal_round3Para").innerHTML = "";
  document.getElementById("event-rules").innerHTML = "";
  document.getElementById("time").innerHTML = "9:00 AM - 12:00 PM";
  document.getElementById("date").innerHTML = "February 20, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/918925496589\"target=\"_blank\">Saravanan V - 8925496589</a><br><a class=\"whatsapp\"href=\"https://wa.me/916374302751\"target=\"_blank\">Mohammed Vasif H - 6374302751</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919361357737\"target=\"_blank\">Kavinesh M R - 9361357737</a><br><a class=\"whatsapp\"href=\"https://wa.me/919043059339\"target=\"_blank\">Ebeline Stene E - 9043059339</a>";
  document.getElementById('modal_start').scrollIntoView();
}

brainiacModal8.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "HASSLE-REM";  
  document.getElementById("modal_descriptionPara").innerHTML = "This event is especially for Mechanical Stream Students (Mechanical, Production, Automobile, \
    Metallurgy) and whoever has fascination towards Mechanical Stream Studies. It’s exclusively based on \
    \"Divergent Thinking\". There will be three rounds. In round I, the participants will be given sets of pictures \
    and will be asked to identify the engineering concept. These concepts will be related especially to \
    Mechanical Stream. In Round II, the participants will be challenged with a case study of non-technical \
    topics. The participants have only got one and half minutes to provide a suitable solution for their case. \
    Reading and comprehending the case study is vital for solving the case. This competition gives them a \
    chance to analyse and solve the problems. After one individual answers, the question will be passed to \
    others. First three who raise hands in the meet will be given a chance to give solutions for the case study. \
    Bonus points will be given to those who give feasible answers to the case. A technical problem statement \
    from the mechanical stream will be given in round three. They must present their solutions pertaining to the \
    case. No passing of questions will be done in this round. And each round has an elimination part. This \
    event is a completely interactive event and we want our participants to have the best event experience ride. \
    So, what are you waiting for? Join us now."; 
  document.getElementById("modal_rulesPara").innerHTML = " \
  <ul class=\"lists\"> \
    <li class=\"points\">Students from any and all backgrounds are allowed to participate. (But the event is Mechanical \
        Stream based. Those who are interested in Mechanical Stream Studies can participate in this event.)</li> \
    <li class=\"points\">Students from other colleges are also allowed to participate.</li> \
    <li class=\"points\">The participants are expected to enter Google Meet through the link provided at least 10 minutes \
        before the specified time. From there, they will be directed to the event.</li> \
    <li class=\"points\">Every round will be having a quick demo for 2-4 minutes for better understanding of the event.</li> \
    <li class=\"points\">Participants should have proper network connection.</li> \
    <li class=\"points\">Audio & Video should be perfect.</li> \
    <li class=\"points\">For this event, rapid problem solving skills and thinking ability is expected in participants.</li> \
    <li class=\"points\">Prize amount will be given for Winner and Runner alone in each category (PSG & NON-PSG).</li> \
    <li class=\"points\">There is no prize for the second runner.</li> \
  </ul>";
  document.getElementById("round1").innerHTML = "ROUND 1: POSTULE";
  document.getElementById("round2").innerHTML = "ROUND 2: MANI-FACT-FEST";
  document.getElementById("round3").innerHTML = "ROUND 3: ANALYSIS ACES";
  document.getElementById("modal_teamSizePara").innerHTML = "Individual Participation";
  document.getElementById("modal_round1Para").innerHTML = "In round I, the participants will be given sets of pictures and will be asked to identify the academic \
      concept. These concepts will be related to Mechanical Streams (Production, Mechanical, Automobile, \
      Metallurgy). Each set of pictures will be displayed and the participants will have to answer the question \
      displayed on the screen in Kahoot platform. This round has an elimination part. Those secured low points \
      will be eliminated.";
  document.getElementById("modal_round2Para").innerHTML = "A set of case study questions will be prepared and given to the participants. The participants have to \
      pick their case study based on the lot system. Each will be called individually. The case study will be based \
      on general and non-technical topics. They will be given one and half minutes to think and answer. Then the \
      question will be available for others to answer. First three who raise hands in the meet will be given a \
      chance to give solutions for the case study. Bonus points will be given to those who give feasible answers \
      to the case. Extra credits will be awarded for those who give exceptional answers. Participants with top \
      scores will be selected for Round III.";
  document.getElementById("modal_round3Para").innerHTML = "Same set of rules and conditions are followed out in round III but the type will be of problem \
      statements based on the Mechanical Stream. They must present their solutions pertaining to the case. No \
      passing of questions will be done in this round. At the end of the final round, by cumulative grading the \
      winner and runner of the event will be finalised by the judges. Participation certificates will be given to \
      those who made it into the final round of the event.";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("time").innerHTML = "10:30 AM - 12:30 PM & 1:30 PM - 3:00 PM";
  document.getElementById("date").innerHTML = "February 20, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/918667006358\"target=\"_blank\">Vijaykumar R - 8667006358</a><br><a class=\"whatsapp\"href=\"https://wa.me/918190052150\"target=\"_blank\">Mohamed Israth H - 8190052150</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/917338939318\"target=\"_blank\">S V Sathvika - 7338939318</a><br><a class=\"whatsapp\"href=\"https://wa.me/916382516513\"target=\"_blank\">Subash T - 6382516513</a>";
  document.getElementById('modal_start').scrollIntoView();
}

codingModal1.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "INVENIRER";  
  document.getElementById("modal_descriptionPara").innerHTML = "Are you crazy about programming? Come and exhibit your programming skills and justify your love for it. \
      Invenirer is a coding event where you need to find a solution for the given question and use this result to \
      unleash the next question."; 
  document.getElementById("modal_rulesPara").innerHTML = " \
      <ul class=\"lists\"> \
        <li class=\"points\">Only individual participation is allowed.</li> \
        <li class=\"points\">Duration of the event will be One hour thirty minutes.</li> \
        <li class=\"points\">The participants are allowed to choose their preferred programming language.</li> \
      </ul>";
  document.getElementById("round1").innerHTML = "ROUNDS:";
  document.getElementById("round2").innerHTML = "";
  document.getElementById("modal_teamSizePara").innerHTML = "Individual Participation";
  document.getElementById("modal_round1Para").innerHTML = "There is only one round. The event will be live for one day. Participants have to solve two problems. Solve \
      the second one using the output of the first problem. Winners will be decided based on the completion time and efficiency.";
  document.getElementById("modal_round2Para").innerHTML = "";
  document.getElementById("round3").innerHTML = "";
  document.getElementById("modal_round3Para").innerHTML = "";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("time").innerHTML = "1:30 PM - 3:30 PM";
  document.getElementById("date").innerHTML = "February 19, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919698914478\"target=\"_blank\">Indhu V - 9698914478</a><br><a class=\"whatsapp\"href=\"https://wa.me/919942053628\"target=\"_blank\">Madhumitha G - 9942053628</a>";
  document.getElementById("volunteers").innerHTML = "---";
  document.getElementById('modal_start').scrollIntoView();
}

codingModal2.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "CODE-QUEST";  
  document.getElementById("modal_descriptionPara").innerHTML = "This is a coding event. The participants are required to form a team consisting of 1-3 members. \
      It is to encourage the students to test their coding and problem-solving skills. The event is divided into two \
      rounds. The first round is a MCQ and competitive programming round. The second round is a Code-a-thon."; 
  document.getElementById("modal_rulesPara").innerHTML = " \
      <ul class=\"lists\"> \
        <li class=\"points\">Use of any unfair means whatsoever shall result in disqualification.</li> \
        <li class=\"points\">Multiple accounts of a person is strictly prohibited.</li> \
        <li class=\"points\">Participants are requested to use laptops/PCs for the event.</li> \
        <li class=\"points\">Scoring is automated and the decision of the judges will be considered final.</li> \
      </ul>";
  document.getElementById("round1").innerHTML = "ROUND 1";
  document.getElementById("round2").innerHTML = "ROUND 2";
  document.getElementById("modal_teamSizePara").innerHTML = "Minimum: 1 Member<br>Maximum: 2 Members";
  document.getElementById("modal_round1Para").innerHTML = "This round comprises 2 competitive programming problems and 20 questions from various topics including \
      basic programming skills, error detection and puzzles. This round has a time duration of 75 mins. Teams \
      qualify to the next round of the Quest based on their results.";
  document.getElementById("modal_round2Para").innerHTML = "This round is a two-hour Code-a-thon. The Qualified teams will be presented with challenging competitive \
      problems for which they will have to hunt down an efficient solution. The winning team will be decided \
      based on their solutions.";
  document.getElementById("round3").innerHTML = "";
  document.getElementById("modal_round3Para").innerHTML = "";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("time").innerHTML = "10:00 AM - 12:00 PM & 2:00 PM - 4:30 PM";
  document.getElementById("date").innerHTML = "February 20, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919566241526\"target=\"_blank\">J B Bhavadharani - 9566241526</a><br><a class=\"whatsapp\"href=\"https://wa.me/917397342676\"target=\"_blank\">V Jeswanth Murthy - 7397342676</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/918217587730\"target=\"_blank\">Narendran K - 8217587730</a><br><a class=\"whatsapp\"href=\"https://wa.me/918667289742\"target=\"_blank\">Balaguru M - 8667289742</a>";
  document.getElementById('modal_start').scrollIntoView();
}

designModal1.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "CUT AND CRAFT";  
  document.getElementById("modal_descriptionPara").innerHTML = "Design a garment of your style using papers as the only material. For a given onspot theme \
      and category, make a chic 2D garment by manipulating any kind of paper through coloring, \
      cutting, or crafting and then pasting them over a fashion croqui of A3 size sheet. The fashion \
      croqui will be provided. This is a single round event."; 
  document.getElementById("modal_rulesPara").innerHTML = " \
      <ul class=\"lists\"> \
        <li class=\"points\">The garments should be designed only for the given category, failing which the participant \
            will be eliminated or the work will not be evaluated.</li> \
        <li class=\"points\">Croqui templates will be shared with the participants before the event and the participants \
            must use any one of them to work.</li> \
        <li class=\"points\">Participants must adhere to the standard A3 size paper of any kind.</li> \
        <li class=\"points\">Participants can use any kind of paper and manipulation techniques to create the paper garment.</li> \
        <li class=\"points\">Participants should post the progress of their work in the classroom assignment provided, at \
            given intervals of 20 minutes.</li> \
        <li class=\"points\">Towards the end of the event, participants have to send a PDF file with a picture of the \
            completed work and a small write-up of not more than 150 words justifying how they have \
            incorporated the theme into the product and their creative process.</li> \
        <li class=\"points\">The participants’ works will be evaluated based on the rubrics set, and the winners will be selected.</li> \
      </ul>";
  document.getElementById("round1").innerHTML = "";
  document.getElementById("round2").innerHTML = "";
  document.getElementById("modal_round1Para").innerHTML = "";
  document.getElementById("modal_round2Para").innerHTML = "";
  document.getElementById("round3").innerHTML = "";
  document.getElementById("modal_round3Para").innerHTML = "";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("modal_teamSizePara").innerHTML = "Individual Participation";
  document.getElementById("time").innerHTML = "9:30 PM - 12:00 PM";
  document.getElementById("date").innerHTML = "February 19, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919444987373\"target=\"_blank\">Simeon P - 9444987373</a><br><a class=\"whatsapp\"href=\"https://wa.me/919943583534\"target=\"_blank\">Guzhalini A - 9943583534</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/918838584192\"target=\"_blank\">Dharsana S - 8838584192</a><br><a class=\"whatsapp\"href=\"https://wa.me/917373736066\"target=\"_blank\">Akshitha G L - 7373736066</a>";
  document.getElementById('modal_start').scrollIntoView();
}

designModal2.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "DESIGN A TORR";  
  document.getElementById("modal_descriptionPara").innerHTML = "People ignore designs that ignore people. Are you a designer? Here's your chance to \
      show off your design skills. DESIGN-A-TORR is a CAD competition that will challenge your brain to think even more crazily than before in designing components \
      using CAD software. During the event, the problem statement will be brought to light. Two days before the event, the registered participants will be added to a google \
      classroom, and the event link will be given through the google classroom. Attendees must ensure that they are added to the Google Classroom two days before the event. If \
      there are any problems, participants should contact the organizers."; 
  document.getElementById("modal_rulesPara").innerHTML = " \
      <ul class=\"lists\"> \
        <li class=\"points\">The participants should join the meet 10 minutes before the event starting time.</li> \
        <li class=\"points\">Entering the meet after starting time will not be entertained.</li> \
        <li class=\"points\">Camera of participants should be turned on throughout the event.</li> \
        <li class=\"points\">The participants should share their screen throughout the event in order to avoid malpractice.</li> \
        <li class=\"points\">In case of network issues, participants should re-join the meet within 3 minutes.</li> \
        <li class=\"points\">Participants should not leave the meet more than 3 times. (In case of network issues).</li> \
        <li class=\"points\">In case of network issues, participants are suggested to contact the organizer immediately.</li> \
        <li class=\"points\">In case the participants are found violating the mentioned rules, they will be eliminated from the event.</li> \
        <li class=\"points\">Based on the performance from round 1 and round 2,the participants will be shortlisted to the final round.</li> \
        <li class=\"points\">The decisions made by the judge is final.</li> \
      </ul>";
  document.getElementById("round1").innerHTML = "ROUND 1: GENERAL QUIZ";
  document.getElementById("round2").innerHTML = "ROUND 2: RAPID FIRE";
  document.getElementById("round3").innerHTML = "ROUND 3: DESIGN CLASH";
  document.getElementById("modal_teamSizePara").innerHTML = "Individual Participation";
  document.getElementById("modal_round1Para").innerHTML = "There will be 20 MCQ’s. Questions will be based on aptitudes, \
      brainstorming riddles, basic mechanical components. This round will be conducted via Google Meet and G-Form link.";
  document.getElementById("modal_round2Para").innerHTML = "<h4>PLATFORM: Zoom</h4>Participants are free to choose any number they desire. The question that \
      has been assigned to the selected number will be presented, and they must answer \
      within the time limit. Otherwise, based on buzzer responses, the question will be passed \
      to other participants. Questions in this round includes some basic concepts from all \
      Mechanical subjects (mostly design stream)."
  document.getElementById("modal_round3Para").innerHTML = "<h4>PLATFORM: Zoom</h4>Part drawings will be shared in G-Class. Participants will be \
      requested to design individual parts and assemble them flawlessly. Any convenient software can be used (Solid works, Fusion 360, PTC Creo). They are requested to \
      upload the part files and assembly files in G-Class.";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("time").innerHTML = "1:30 PM - 4:30 PM";
  document.getElementById("date").innerHTML = "February 19, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919585549453\"target=\"_blank\">Ravinkumar S - 9585549453</a><br><a class=\"whatsapp\"href=\"https://wa.me/916383303574\"target=\"_blank\">Vaishnav V - 6383303574</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919789589682\"target=\"_blank\">Arun A R - 9789589682</a><br><a class=\"whatsapp\"href=\"https://wa.me/917358541682\"target=\"_blank\">Sundar Jacob R - 7358541682</a>";
  document.getElementById('modal_start').scrollIntoView();
}

designModal3.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "MECHANICAL MAESTRO";  
  document.getElementById("modal_descriptionPara").innerHTML = "People ignore designs that ignore people. Are you a designer? Here's your chance to \
      show off your design skills. DESIGN-A-TORR is a CAD competition that will \
      challenge your brain to think even more crazily than before in designing components \
      using CAD software. During the event, the problem statement will be brought to light. \
      Two days before the event, the registered participants will be added to a google \
      classroom, and the event link will be given through the google classroom. Attendees \
      must ensure that they are added to the Google Classroom two days before the event. If \
      there are any problems, participants should contact the organizers."; 
  document.getElementById("modal_rulesPara").innerHTML = " \
      <ul class=\"lists\"> \
        <li class=\"points\">The participants should join the meet 10 minutes before the event starting time.</li> \
        <li class=\"points\">Entering the meet after starting time will not be entertained.</li> \
        <li class=\"points\">Camera of participants should be turned on throughout the event.</li> \
        <li class=\"points\">The participants should share their screen throughout the event in order to avoid malpractice.</li> \
        <li class=\"points\">In case of network issues, participants should re-join the meet within 3 minutes.</li> \
        <li class=\"points\">Participants should not leave the meet more than 3 times. (In case of network issues).</li> \
        <li class=\"points\">In case of network issues, participants are suggested to contact the organizer immediately.</li> \
        <li class=\"points\">In case the participants are found violating the mentioned rules, they will be eliminated from the event.</li> \
        <li class=\"points\">Based on the performance from round 1 and round 2,the participants will be shortlisted to the final round.</li> \
        <li class=\"points\">The decisions made by the judge is final.</li> \
      </ul>";
  document.getElementById("round1").innerHTML = "ROUND 1: GENERAL QUIZ";
  document.getElementById("round2").innerHTML = "ROUND 2: RAPID FIRE";
  document.getElementById("round3").innerHTML = "ROUND 3: DESIGN CLASH";
  document.getElementById("modal_teamSizePara").innerHTML = "Individual Participation";
  document.getElementById("modal_round1Para").innerHTML = "There will be 20 MCQ’s. Questions will be based on aptitudes, \
      brainstorming riddles, basic mechanical components. This round will be conducted via Google Meet and G-Form link.";
  document.getElementById("modal_round2Para").innerHTML = "<h4>PLATFORM: Zoom</h4>Participants are free to choose any number they desire. The question that \
      has been assigned to the selected number will be presented, and they must answer \
      within the time limit. Otherwise, based on buzzer responses, the question will be passed \
      to other participants. Questions in this round includes some basic concepts from all \
      Mechanical subjects (mostly design stream)."
  document.getElementById("modal_round3Para").innerHTML = "<h4>PLATFORM: Zoom</h4>Part drawings will be shared in G-Class. Participants will be \
      requested to design individual parts and assemble them flawlessly. Any convenient software can be used (Solid works, Fusion 360, PTC Creo). They are requested to \
      upload the part files and assembly files in G-Class.";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("time").innerHTML = "1:30 PM - 4:30 PM";
  document.getElementById("date").innerHTML = "February 19, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919585549453\"target=\"_blank\">Ravinkumar S - 9585549453</a><br><a class=\"whatsapp\"href=\"https://wa.me/916383303574\"target=\"_blank\">Vaishnav V - 6383303574</a>";
  document.getElementById("volunteers").innerHTML = "Arun A R - 9789589682<br>Sundar Jacob R - 7358541682";
  document.getElementById('modal_start').scrollIntoView();
}

designModal4.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "CRAFT WITH WASTE";  
  document.getElementById("modal_descriptionPara").innerHTML = "Basic Fashion illustration has to be done by the participants and embellishments must be given on it to \
      enhance the illustration. The 2d illustration must be done on an A4 sheet or drawing sheet of A4 size. Only \
      the waste materials (e.g.: pencil carvings, food waste, waste fabrics, tooth picks etc...) must be used as \
      embellishments. The full garment must be embellished. The duration of the event is 45 minutes. The event \
      will be monitored live through google meet. The completed work must be sent to the specified e-mail id. \
      The best two 2d illustrations among PSG Tech participants and best two 2D illustrations among other \
      college participants will be selected and awarded."; 
  document.getElementById("modal_rulesPara").innerHTML = " \
      <ul class=\"lists\"> \
        <li class=\"points\">Illustration must be done on an A4 sheet</li> \
        <li class=\"points\">Any kind of waste can be used as decorates.</li> \
        <li class=\"points\">Camera must be kept turned on the whole time during the event.</li> \
        <li class=\"points\">Time duration is 45 minutes.</li> \
        <li class=\"points\">Final submission must be done through mail to FTA (FTA mail id: ftapsgtech@gmail.com).</li> \
      </ul>";
  document.getElementById("round1").innerHTML = "ROUNDS";
  document.getElementById("round2").innerHTML = "";
  document.getElementById("round3").innerHTML = "";
  document.getElementById("modal_teamSizePara").innerHTML = "";
  document.getElementById("modal_round1Para").innerHTML = "This is a single round event";
  document.getElementById("modal_round2Para").innerHTML = "";
  document.getElementById("modal_round3Para").innerHTML = "";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("time").innerHTML = "2:00 PM - 3:30 PM";
  document.getElementById("date").innerHTML = "February 20, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/916385487411\"target=\"_blank\">Puvisha R - 6385487411</a><br><a class=\"whatsapp\"href=\"https://wa.me/919677362021\"target=\"_blank\">Afreen A - 9677362021</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/918012326847\"target=\"_blank\">Tej Asswin S - 8012326847</a><br><a class=\"whatsapp\"href=\"https://wa.me/916380457033\"target=\"_blank\">T Sindhu - 6380457033</a>";
  document.getElementById('modal_start').scrollIntoView();
}

designModal5.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "VIMANA";  
  document.getElementById("modal_descriptionPara").innerHTML = "Human eyes have always looked towards skies with passion. Humans always wanted wings but as \
      humans do not have them, then we consider airplanes as our wings. To bring back all fun memories \
      associated with flying, here is the event- “VIMANA”, In which the student team (Max two in team) are \
      required to build a hand launch glider using any materials of their own. And detailed report of the glider \
      design should be submitted."; 
  document.getElementById("modal_rulesPara").innerHTML = "<b>Rules and Regulations:</b><br> \
  <ul> \
    <li>The video should cover glider and the stop watch clearly.</li> \
    <li>Ready to fly gliders are strictly prohibited.</li> \
    <li>The video and the report should be presented to the judges.</li> \
    <li>It is suggested to submitted good clarity video.</li> \
  </ul><br> \
  <b>Guidelines for the video:</b><br> \
  <ul> \
    <li>Video can be recorded with a smartphone or a camera. The person recording the video should be in a \
          safe, stationary position and should not move/ run while recording.</li> \
    <li>Recording setup: An analog watch should be placed in front of the camera while recording the video in \
          such a way that the time is visible throughout the recording. It is recommended to build a small device to \
          hold the camera and watch in position to achieve this. Please ensure the watch does not take up more than \
          20% of the screen space.</li> \
    <li>The video recording should be done without any break in between.<br> \
    <u>Dimensions</u>: A 1m scale (which is available in the stores) should be used to measure the wingspan of the glider.<br> \
    In this part, the dimensions of the glider must be measured and clearly visible in the video. This should not exceed 1 min duration.<br> \
    <u>Launch</u>: The glider should be launched by releasing it from the hand.</li> \
    <li>Both the glider and the watch should be visible throughout the video – right from the beginning to the landing.</li> \
    <li>No editing should be done to the audio or video. Name of participants, college etc. should be added in the description of the video when uploading.</li> \
    <li>Each team can submit only one video for the competition.</li> \
  </ul>";
  document.getElementById("round1").innerHTML = "ROUND 1";
  document.getElementById("round2").innerHTML = "ROUND 2";
  document.getElementById("round3").innerHTML = "";
  document.getElementById("modal_teamSizePara").innerHTML = "Minimum: 1 Member<br>Maximum: 2 Members";
  document.getElementById("modal_round1Para").innerHTML = "Students (Max two in team) are required to build a hand launch glider using any materials of their own. \
      Marks will be awarded based on the maximum time of flight. And detailed report of the glider design should \
      be submitted. \
      ";
  document.getElementById("modal_round2Para").innerHTML = "The Shortlisted students are required to attend a Q&A session with the judge and explain about their gliders design.<br><br> \
      <b>Design constrains:</b><br> \
      <ul> \
        <li>The wing span should be 0.3 to 1 meters and its length should not exceed 1 meter.</li> \
        <li>Students are allowed to use any kind of materials (you could use different material for different components.</li> \
        <li>The glider should include four main components (i,e wings ,fuselage ,stabilizers and nose).</li> \
        <li>The weight to time of flight ratio could also be an judging factor.</li> \
      </ul><br> \
      <b>Launching criteria:</b><br> \
      The glider should be launched only by holding the fuselage. You can either launch by standing or \
      through running. The time of flight should be noted using the stop watch and recorded using camera.<br><br> \
      <b>Report:</b><br> \
      A detailed design report of the glider should be submitted, which should include dimensions, weight \
      (whole weight and components weight), justification for the choice of material, cad modelling and CFD \
      analysis (not compulsory). \
      The report of their aircraft should be no longer than 15 pages (A4 size 1.5 line spacing) with standard \
      formatting. The report must document the basic design of the aircraft (dimensions, wing areas, velocity, \
      etc.) and should also explain how their design is suitable for the given problem. \
      Along with the abstract, participants must also send a zip file containing at least 5 and no more than 10 \
      photographs of the aircraft while it is being built.";
  document.getElementById("modal_round3Para").innerHTML = "";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("time").innerHTML = "9:00 AM - 12:30 PM";
  document.getElementById("date").innerHTML = "February 20, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919791716068\"target=\"_blank\">S Yogeshwaran  - 9791716068</a><br><a class=\"whatsapp\"href=\"https://wa.me/919843815469\"target=\"_blank\">S T Aathirai - 9843815469</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/916380411240\"target=\"_blank\">V Kishan Kumar - 6380411240</a><br><a class=\"whatsapp\"href=\"https://wa.me/917606882547\"target=\"_blank\">N Madhav - 7606882547</a>";
  document.getElementById('modal_start').scrollIntoView();
}

quizModal1.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "DESOL PLEZIER";  
  document.getElementById("modal_descriptionPara").innerHTML = "Desol plezier is the event which will make participants \
      rekindle their memory of different energy resources and energy conservation principles. This event will be completely based on \
      energy resources, electrical and electronic components. It will be useful to evoke the technical thinking of an individual."; 
  document.getElementById("modal_rulesPara").innerHTML = " \
      <ul class=\"lists\"> \
        <li class=\"points\">Participants must turn on the camera through the event.</li> \
        <li class=\"points\">Everyone must show their id before the event for Verification process.</li> \
        <li class=\"points\">Event will take place in the online platform (Quizizz, Canvas).</li> \
        <li class=\"points\">Participants are expected to join before 10 minutes for the event.</li> \
        <li class=\"points\">Tab switches and matpractices must be avoided.</li> \
      </ul>";
  document.getElementById("round1").innerHTML = "ROUND 1: CHEETOAHS";
  document.getElementById("round2").innerHTML = "ROUND 2: KRISKRAS";
  document.getElementById("round3").innerHTML = "";
  document.getElementById("modal_teamSizePara").innerHTML = "Individual Participation";
  document.getElementById("modal_round1Para").innerHTML = "The world is changing very fast. Big will not beat small anymore. Fast will be beating the \
      slow\".How fast can you capture a picture in your mind?!!! Here is a game to find a needle in a haystack. This event is based on how fast you can find a given thing from a bunch. \
      So, let's get fast as cheetahs to play in this time based event. Participants are asked to join google meet. Quiziz platform link and instructions will be provided. \
      Questions will be in the picture format where the participants are required to untangle the picture to find the correct answer.Based on scores, malpractices and time, the top 10 \
      participants will be called for the next round.";
  document.getElementById("modal_round2Para").innerHTML = "The nice thing about doing a crossword puzzle is, you know there is a solution\". Are you good \
      at solving your life problems? It's always ups and downs and here it is just across and down in crosswords. Why not give it a try to solve the crossword puzzle.crossword puzzle will be given and the participants \
      who finishes first and depending upon scores and malpractices will be selected as winner."
  document.getElementById("modal_round3Para").innerHTML = "";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("time").innerHTML = "1:30 PM - 4:00 PM";
  document.getElementById("date").innerHTML = "February 19, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/918431348261\"target=\"_blank\">Barani Keerthi S - 8431348261</a><br><a class=\"whatsapp\"href=\"https://wa.me/918667565609\"target=\"_blank\">Prashitha R - 8667565609</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919025047396\"target=\"_blank\">Sandhiyaa K - 9025047396</a><br><a class=\"whatsapp\"href=\"https://wa.me/917603934166\"target=\"_blank\">Dhiyaneshwwaran M - 7603934166</a>";
  document.getElementById('modal_start').scrollIntoView();
}

quizModal2.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "METAQUEST";  
  document.getElementById("modal_descriptionPara").innerHTML = "Unlocking knowledge with the speed of thought!! \
      Try getting yourself tests or be assured, the MetaQuest would make you know what you didn't. A place where smart answer won't get you fired. \
      Be ready!! Be smart!! Be noticed!!"; 
  document.getElementById("modal_rulesPara").innerHTML = " \
      <ul class=\"lists\"> \
        <li class=\"points\">Use of laptop or desktop rather than using mobile is recommended.</li> \
        <li class=\"points\">Use of mobile phones for searching answers is strictly prohibited.</li> \
        <li class=\"points\">Participants should not share their answers with friends.</li> \
        <li class=\"points\">Participants should turn on their camera and mic whenever needed.</li> \
        <li class=\"points\">Participants should not switch any tabs during the event.</li> \
        <li class=\"points\">Participants are requested to sit in a place where there is less noise.</li> \
        <li class=\"points\">The decision of the judges will be final.</li> \
      </ul>";
  document.getElementById("round1").innerHTML = "ROUND 1: CONNECT & RELATE";
  document.getElementById("round2").innerHTML = "ROUND 2: SELECTION OF MATERIALS";
  document.getElementById("round3").innerHTML = "";
  document.getElementById("modal_teamSizePara").innerHTML = "Individual Participation";
  document.getElementById("modal_round1Para").innerHTML = "<h4>PLATFORM: Quizizz</h4>In this round, Participants will be requested to join Google meet. \
      Link/Round code will be provided to participants through G-Meet chat box. After the confirmation with \
      participants that they joined through link/round code, the round starts. This round consists of 30 questions \
      (comprising connections and relation-based questions). Participants will be given 45 seconds to answer \
      each question. The leader board will be taken and top 12 participants will be shortlisted for final round.";
  document.getElementById("modal_round2Para").innerHTML = "<h4>PLATFORM: Google Meet</h4>This is the final round.In this round, image of \
      engineering components (application-based) will be shown to the participants and they have to speak for \
      about a minute about the selection of material for the particular application. Two cycles of questioning will \
      be done. The evaluation will be based on the content of speech, time of speech, and answer for the question.";
  document.getElementById("modal_round3Para").innerHTML = "";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("time").innerHTML = "1:30 PM - 4:00 PM";
  document.getElementById("date").innerHTML = "February 19, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/916379798634\"target=\"_blank\">Srinivedhitha E - 6379798634</a><br><a class=\"whatsapp\"href=\"https://wa.me/919952323823\"target=\"_blank\">Gokul Raja K - 9952323823</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919751128608\"target=\"_blank\">Santhiya B - 9751128608</a><br><a class=\"whatsapp\"href=\"https://wa.me/916379532308\"target=\"_blank\">Kavya Maha Lakshmi A S - 6379532308</a>";
  document.getElementById('modal_start').scrollIntoView();
}

quizModal3.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "PHYZPLORE";  
  document.getElementById("modal_descriptionPara").innerHTML = "Want to explore your insight in Physics? \
      Unlock your knowledge at the speed of thought in the fun filled event “PHYZPLORE”. The event will be conducted as two rounds. \
      Unleash your critical thinking in the first round’ a quiz from various domains. \
      The second round will be ESCAPE ROOM. Enjoy the day and walk away with prizes."; 
  document.getElementById("modal_rulesPara").innerHTML = " \
      <ul class=\"lists\"> \
        <li class=\"points\">There is no negative marking in either of the rounds.</li> \
        <li class=\"points\">Participants must strictly adhere to the timings mentioned for each round.</li> \
        <li class=\"points\">Tab switches will be monitored and the maximum permitted switches is 3.</li> \
        <li class=\"points\">Exceeding This number will lead to disqualification.</li> \
        <li class=\"points\">Participants indulging in any sort of malpractice will be disqualified.</li> \
        <li class=\"points\">The judge’s decisions will be final.</li> \
      </ul>";
  document.getElementById("round1").innerHTML = "ROUND 1: ODD ONE OUT";
  document.getElementById("round2").innerHTML = "ROUND 2: ESCAPE ROOM";
  document.getElementById("round3").innerHTML = "";
  document.getElementById("modal_teamSizePara").innerHTML = "Individual Participation";
  document.getElementById("modal_round1Para").innerHTML = "<h4>PLATFORM: Quizizz</h4>The first round of this event will be conducted as a finding odd one out consisting of 25 questions to \
      be solved in 20 minutes. It will cover different type of questions (including invention, guess the scientist, \
      awards, etc.,)in the Quizizz platform. It will have a theme of physics. Based on the results, the participants \
      would be shortlisted for the second round.";
  document.getElementById("modal_round2Para").innerHTML = "<h4>PLATFORM: Microsoft Teams</h4>The second round would be Escape room conducted via Microsoft Teams in which 4 breakout rooms \
      will be created. Each participants is allowed to enter into the next breakdown room only after answering the \
      question displayed in the current breakdown room. It will cover the questions of type , guess the person, \
      crossword puzzle, match the following, connections, find the missing info, rapid fire questions, etc. Winners will be announced based on the results of this round."
  document.getElementById("modal_round3Para").innerHTML = "";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("time").innerHTML = "9:30 AM - 12:30 PM";
  document.getElementById("date").innerHTML = "February 19, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/918925098983\"target=\"_blank\">Mursitha Zereen M - 8925098983</a><br><a class=\"whatsapp\"href=\"https://wa.me/919065972434\"target=\"_blank\">Sandeep B - 9065972434</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919894596679\"target=\"_blank\">Kavinraj S - 9894596679</a><br><a class=\"whatsapp\"href=\"https://wa.me/919486973639\"target=\"_blank\">Subasree V - 9486973639</a>";
  document.getElementById('modal_start').scrollIntoView();
}

quizModal4.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "FOCUS ON";  
  document.getElementById("modal_descriptionPara").innerHTML = "FOCUS ON is initiated with an aim to serve as a perfect launchpad for the technocrats \
      to showcase their technical skills. Dive into this extravaganza and experience the complete \
      package of fun with knowledge. This event enhances the communication skill as well as the \
      grasping ability of the participants. It consists of 3 rounds in total which will test every aspect of \
      the technocrats. Participants will be shortlisted based on their performance."; 
  document.getElementById("modal_rulesPara").innerHTML = " \
      <ul class=\"lists\"> \
        <li class=\"points\">Only individual participation is allowed.</li> \
        <li class=\"points\">Participants must wear their ID throughout the event.</li> \
        <li class=\"points\">Use of mobile phones for searching answers is strictly prohibited.</li> \
        <li class=\"points\">Do not switch tabs in any case.</li> \
        <li class=\"points\">Scores will be provided based on the correctness and timing of answers.</li> \
        <li class=\"points\">The participants must follow the instructions given during the event and must not give any excuses.</li> \
        <li class=\"points\">The decision of the judges will be final.</li> \
      </ul>";
  document.getElementById("round1").innerHTML = "ROUND 1: TEX'O'CORE";
  document.getElementById("round2").innerHTML = "ROUND 2: THE MIND FUZZ";
  document.getElementById("round3").innerHTML = "ROUND 3: QUIZZEE BEE BUZZ";
  document.getElementById("modal_teamSizePara").innerHTML = "Individual Participation";
  document.getElementById("modal_round1Para").innerHTML = "<h4>PLATFORM: Google meet, Kahoot</h4>This will be the preliminary round. Thisround is designed to test the technical knowledge \
      of technocrats. A set of questions related to textiles will be displayed via google meet with a time limit for each question and participants should answer the question within the given time. \
      15 participants will be shortlisted for the next round.";
  document.getElementById("modal_round2Para").innerHTML = "<h4>PLATFORM: Google meet</h4>A short video related to the textiles will be displayed via google meet. Any of the \
      participants will be selected randomly and asked to answer. The participants have to carefully listen to the video and a short time will be given to analyse the concept. Within 180 seconds \
      participants has to explain the context of the video which was displayed on the screen respectively. 7 participants will be shortlisted for the next round.";
  document.getElementById("modal_round3Para").innerHTML = "<h4>PLATFORM: Google meet, Cosmobuzz</h4>This is a rapid-fire round. A series of questions will be fired at the participants. One who \
      presses the buzzer first will be given the first chance to answer and subsequent chances will be given based on buzzer time. Negative marks will be provided for wrong answers. The answers \
      along with the time taken will be considered for the final scores.";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("time").innerHTML = "9.30 AM - 12:00 PM & 2:00 PM - 4:00 PM";
  document.getElementById("date").innerHTML = "February 19, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/917339695369\"target=\"_blank\">Sowmiya N - 7339695369</a><br><a class=\"whatsapp\"href=\"https://wa.me/919345876656\"target=\"_blank\">Dhivin Prasath - 9345876656</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/918940497816\"target=\"_blank\">Reena Sharon R - 8940497816</a><br><a class=\"whatsapp\"href=\"https://wa.me/919585756505\"target=\"_blank\">Golbert S - 9585756505</a>";
  document.getElementById('modal_start').scrollIntoView();
}

quizModal5.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "ICE AND FIRE";  
  document.getElementById("modal_descriptionPara").innerHTML = "Are you a fan of American Television series? This event is just for you. It's a fantasy trivia event based on \
      the theme of the famous series game of thrones and also includes concepts of a show called idiotest. The \
      participants will have to go through a phase of visual brain teasers,quiz with twists and turns,ups and \
      downs and rapid fire rounds to earn gold dragon coins which will be ultimately used to win the war and \
      be the king on the iron throne. Be the quiz maesters and gain control over the mythical land of westeros!!!<br> \
      <h4>PLATFORM: Google Meet, Quizizz, Microsoft Forms, Wheel of names</h4>"; 
  document.getElementById("modal_rulesPara").innerHTML = " \
      <ul class=\"lists\"> \
        <li class=\"points\">The participants should join the meet 10 minutes before the event starting time.</li> \
        <li class=\"points\">The decisions made by the judge is final.</li> \
        <li class=\"points\">Any forms of malpractice or plagiarism is strictly prohibited.</li> \
      </ul>";
  document.getElementById("round1").innerHTML = "ROUND 1: BUILDING YOUR EMPIRE";
  document.getElementById("round2").innerHTML = "ROUND 2: THE GREAT WAR";
  document.getElementById("round3").innerHTML = "ROUND 3: THE GAME OF THRONES";
  document.getElementById("modal_teamSizePara").innerHTML = "Minimum: 1 Member<br>Maximum: 2 Members";
  document.getElementById("modal_round1Para").innerHTML = "The contestants will be given 1000 gold dragon coins in the beginning. They will have to answer a set of \
      interesting and engaging questions in Microsoft forms where, for every wrong answer some amount of \
      coins will be deducted, the team/individual with the most amount of coins will go to second part of \
      round 1 where they will be answering brain-teaser questions and coins will be given to the participants \
      for every right answer they choose. Build your empire strong by gaining more coins to ultimately fight \
      the war coming soon...";
  document.getElementById("modal_round2Para").innerHTML = "The teams/individuals will now fight a fierce battle where questions will be asked to the participants, in \
      the order of their teams. If any team fails to answer, coins will be deducted and it will move to the next \
      team, which will get a bonus coin when answered correctly and no coins when answered wrongly. If the \
      team fails to follow this format while answering or gives a wrong answer, coins will be deducted and \
      alongwith that a wheel will be spinned, and wherever it points out at the participant has to follow the \
      instruction written on it (Eg.\"No Next chance\"). The team with the most number of coins will move on \
      to directly fighting for the iron throne with their own kingdom.";
  document.getElementById("modal_round3Para").innerHTML = "7 teams/individuals selected from the previous round will represent the 7 kingdoms and they have to \
      answer a set of questions on quiziz, the top 4 kingdoms will then go to the second part of round 3 where \
      they have to answer rapid fire questions, the kingdom which wins will get the entire control of westeros.";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("time").innerHTML = "1:30 PM - 4:30 PM";
  document.getElementById("date").innerHTML = "February 20, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/918098655666\"target=\"_blank\">Shruthi N - 8098655666</a><br><a class=\"whatsapp\"href=\"https://wa.me/919150022370\"target=\"_blank\">Nishumitha V - 9150022370</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/917010033986\"target=\"_blank\">Yashwanth Kumar A R - 7010033986</a><br><a class=\"whatsapp\"href=\"https://wa.me/919385561379\"target=\"_blank\">Harishree - 9385561379</a>";
  document.getElementById('modal_start').scrollIntoView();
}

quizModal6.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "ENZOVENATOR";  
  document.getElementById("modal_descriptionPara").innerHTML = "Is listening your biggest trait?.. Are you someone with Hawk eyes?.. If your answer is yes,then this challenge is right up your alley. \
  Enzovenator is an exclusive opportunity to unleash your inner potential by cracking your Technical Skills in an enthralling way. \
  Let your senses run amok with this unique opportunity to unleash your cognitive skills.<br><u>Hear n Gear</u>: Wield your auditory perception to crack through the technological quiz.<br> \
  <u>Relativity</u>: Bring your visual comprehension to aid and articulate the plausible inference.<br> \
  So what else are you waiting for?.. Come and unravel your Technical skill"; 
  document.getElementById("modal_rulesPara").innerHTML = " \
      <ul class=\"lists\"> \
        <li class=\"points\">All the participants should have their own laptops or mobile phones.</li> \
        <li class=\"points\">Stable internet connection is required since the rounds will involve audio and picture formats.</li> \
        <li class=\"points\">For proper clarity of audio it's recommended to wear either headphone or headset.</li> \
        <li class=\"points\">Indulging in malpractice will consider the team as disqualified and sharing of answers is strictly prohibited.</li> \
        <li class=\"points\">All team members should mute their mic and camera except when they are required to answer.</li> \
        <li class=\"points\">All questions are time bound, so ensure you answer the question accordingly.</li> \
        <li class=\"points\">Answers will be evaluated by judges..</li> \
      </ul>";
  document.getElementById("round1").innerHTML = "ROUND 1: HEAR N GEAR";
  document.getElementById("round2").innerHTML = "ROUND 2: RELATIVITY";
  document.getElementById("round3").innerHTML = "";
  document.getElementById("modal_teamSizePara").innerHTML = "Minimum: 1 Member<br>Maximum: 2 Members";
  document.getElementById("modal_round1Para").innerHTML = "<h4>PLATFORM: Quizizz & Cisco Webex</h4>In this round, 10 audio clips will be played from which questions will be asked in the Quizizz platform. Based \
      on hearing the audio the participants should find the topic it is based on and answer the questions from that \
      topic. Each audio clip would have a bonus question and all the questions will be time bound. The participants \
      will be qualified for the next round based on the time and accuracy of their answers.";
  document.getElementById("modal_round2Para").innerHTML = "<h4>PLATFORM: Google Meet</h4>In this round, we use a Random one arm bandit to know which team has to go first and so on. Each team will \
      be given 2 chances in the Random one arm bandit. The participants will be answering the questions and each \
      question will have hints. The participants should find the answer of the picture formulated questions and \
      describe the answer, based on which points are split: for example if the pictures hint at a phenomenon, then \
      the participants have to name the phenomenon and describe it. If a team does not answer their question then \
      the question will be open for other teams to answer and a bonus mark will be rewarded for the team with the \
      correct answer. Points will be awarded by the judge.";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("modal_round3Para").innerHTML = "";
  document.getElementById("time").innerHTML = "9:00 AM - 12:30 PM";
  document.getElementById("date").innerHTML = "February 20, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919940859635\"target=\"_blank\">Tharun G - 9940859635</a><br><a class=\"whatsapp\"href=\"https://wa.me/919894620387\"target=\"_blank\">Dharshan R - 9894620387</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919360256158\"target=\"_blank\">Amrita B - 9360256158</a><br><a class=\"whatsapp\"href=\"https://wa.me/919094998300\"target=\"_blank\">Kavin Aravindhan R - 9094998300</a>";
  document.getElementById('modal_start').scrollIntoView();
}

quizModal7.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "CALC-OHOLIC";  
  document.getElementById("modal_descriptionPara").innerHTML = "Are you a pro problem solver? Then why wait? Brace yourself for the challenging yet exciting \
      puzzles, brain teasers and much more that we have in store for you! \
      Calc-oholic is a math-based event which consists of 2 exciting and intellectual rounds."; 
  document.getElementById("modal_rulesPara").innerHTML = " \
      <ul class=\"lists\"> \
        <li class=\"points\">Participants should turn on their video till the event ends.</li> \
        <li class=\"points\">They should not use any other back apps while attending the event.</li> \
        <li class=\"points\">if any illicit activities done by the participants are found. then, it will be considered as \
            malpractice and their answers will not be taken.</li> \
        <li class=\"points\">Participants are requested to join the meet 10 minutes prior to the event.</li> \
      </ul>";
  document.getElementById("round1").innerHTML = "ROUND 1: TEASERS AND SQUEEZERS";
  document.getElementById("round2").innerHTML = "ROUND 2: RIDDLE-RAIDERS";
  document.getElementById("round3").innerHTML = "";
  document.getElementById("modal_teamSizePara").innerHTML = "Individual Participation";
  document.getElementById("modal_round1Para").innerHTML = "Teasers and squeezers are based on brain teasers. In this round, the participants are asked \
      to solve and type the answers on the canvas platform. (No marks will be awarded for \
      wrong answers and the questions which are not answered). At the end of the event, 10 \
      participants will be shortlisted for the 2nd round.";
  document.getElementById("modal_round2Para").innerHTML = "This round contains riddle-based questions. The participants are asked to type the answers \
      in the canvas platform. Based on their score, winners will be finalized. The top three will be \
      announced as winners. In case the round ends up in a tie, a tie-break round will decide the winner.";
  document.getElementById("modal_round3Para").innerHTML = "";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("time").innerHTML = "2:00 PM - 4:00 PM";
  document.getElementById("date").innerHTML = "February 20, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/918248138140\"target=\"_blank\">Harish Kumar V - 8248138140</a><br><a class=\"whatsapp\"href=\"https://wa.me/919360143020\"target=\"_blank\">Devasri G P - 9360143020</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919952337737\"target=\"_blank\">Illakia G - 9952337737</a><br><a class=\"whatsapp\"href=\"https://wa.me/919486031214\"target=\"_blank\">Vishakan S - 9486031214</a>";
  document.getElementById('modal_start').scrollIntoView();
}

quizModal8.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "THRIVE TO DERIVE";  
  document.getElementById("modal_descriptionPara").innerHTML = "Mathematics is an expression of the human mind that reflects the active will, the contemplative reason, and \
      the desire for aesthetic perfection. Its basic elements are logic & intuition, analysis & construction, generality \
      & individuality. The essence of math is not to make simple things complicated, but to make complicated things simple."; 
  document.getElementById("modal_rulesPara").innerHTML = " \
      <ul class=\"lists\"> \
        <li class=\"points\">Tab switching is not allowed.</li> \
        <li class=\"points\">Canvas Account should be created prior hand. (For Round 1)</li> \
        <li class=\"points\">Web cam should be ON for the complete session. (For Round 2 and Round 3)</li> \
      </ul>";
  document.getElementById("round1").innerHTML = "ROUND 1: THE CALC-OHOLICS";
  document.getElementById("round2").innerHTML = "ROUND 2: CROSSWORD MAGIC";
  document.getElementById("round3").innerHTML = "ROUND 3: ROOT TO SUCCESS";
  document.getElementById("modal_teamSizePara").innerHTML = "Individual Participation";
  document.getElementById("modal_round1Para").innerHTML = "<h4>PLATFORM: Google Meet, Canvas</h4> \
      This round comprises of questions which includes probability, calculus and statistics related problems. \
      There will be 20 questions of mixed types like Match the following, Fill ups, MCQ. Out of 20 question 5 are \
      star questions from which the winners will be decided in cases of tie.";
  document.getElementById("modal_round2Para").innerHTML = "<h4>PLATFORM: Google Meet, Survey Heart</h4>A crossword puzzle will be displayed and after a minute, a survey heart link will be sent in the chat box. \
      The participants whole fill the maximum number of words from the puzzle in minimal time will be qualified \
      for the next round.";
  document.getElementById("modal_round3Para").innerHTML = "<h4>PLATFORM: Google Meet</h4> \
      In this round, there will be 5 levels. The participants should solve each level one by one (only if the first \
      level answer is found, they can proceed to the next level). Those participants who solves all the level or solves \
      maximum levels in the provided time will be declared as winners. A password protected PDF document will \
      be sent to the participants though mail and password to unlock the next level will be the answer of the previous level.";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("time").innerHTML = "9:00 AM - 4:30 PM";
  document.getElementById("date").innerHTML = "February 20, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919500285690\"target=\"_blank\">Sabesh Kumar R - 9500285690</a><br><a class=\"whatsapp\"href=\"https://wa.me/918610395307\"target=\"_blank\">Kavya M - 8610395307</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919345735240\"target=\"_blank\">Keerthana B - 9345735240</a><br><a class=\"whatsapp\"href=\"https://wa.me/918778063573\"target=\"_blank\">Parthiban M - 8778063573</a>";
  document.getElementById('modal_start').scrollIntoView();
}

managementModal1.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "AUTO FIESTA";  
  document.getElementById("modal_descriptionPara").innerHTML = "Attention to all Automobile Fanatics!! The first ever Automobile Tuning themed Mega auction \
      with the widest range of accessories to select from. The ideal platform to unleash your Skills and \
      Fantasies in Automobile with 3 interesting rounds that you would have never witnessed. Build \
      your Dream car and compete with other petrolheads to make the best car of the event. An \
      opportunity to enlarge your creativity and knowledge in the Automotive sector. Chance to interact \
      with fellow car geeks."; 
  document.getElementById("modal_rulesPara").innerHTML = " \
      <ul class=\"lists\"> \
        <li class=\"points\">The participants should join the meet 10 minutes before the event starting time.</li> \
        <li class=\"points\">Entering the meet after starting time will not be entertained.</li> \
        <li class=\"points\">Camera of participants should be turned on throughout the event.</li> \
        <li class=\"points\">The participants should share their screen throughout.</li> \
        <li class=\"points\">In case of network issues, participants should re-join the meet within 3 minutes. the event in order to avoid malpractice.</li> \
        <li class=\"points\">Participants should not leave the meet more than 3 times. (In case of network issues).</li> \
        <li class=\"points\">In case of network issues, participants are suggested to contact the organiser immediately.</li> \
        <li class=\"points\">In case the participants are found violating the mentioned rules, they will be eliminated from the event.</li> \
        <li class=\"points\">During the auction, the decision made by the auctioneer and the panel is final.</li> \
        <li class=\"points\">The decisions made by the judge is final.</li> \
        <li class=\"points\">Participants who are not selected for the proceeding rounds should leave the meet.</li> \
        <li class=\"points\">The participants should follow the code of conduct during the auction. Any usage of \
            misappropriate language or action will be highly condemned and the participants will be disqualified.</li> \
      </ul>";
  document.getElementById("round1").innerHTML = "ROUND 1: AUTOSOLVE";
  document.getElementById("round2").innerHTML = "ROUND 2: AUTO(A)MAZE";
  document.getElementById("round3").innerHTML = "ROUND 3: TUNE TO WIN – THE ULTIMATE AUCTION";
  document.getElementById("modal_teamSizePara").innerHTML = "Minimum: 1 Member<br>Maximum: 2 Members";
  document.getElementById("modal_round1Para").innerHTML = "The participants will be given the Canvas link in which the questions are given to test the participants \
      knowledge in Basics of Automobile, Brand Recognition, Basics Diagnosis, and Pictorial Analysis. This round will be the first filtration process of the event.";
  document.getElementById("modal_round2Para").innerHTML = "The filtered participants will be given a crossword puzzle in a Word format and they have to submit the \
      finished crossword answer sheet in a Google form which will be given to them during the meet. Marks will be given \
      on the basis of the number of right answers and the time consumed for the completion. This round will be the final filtration process for the final round.";
  document.getElementById("modal_round3Para").innerHTML = "The filtered participants will be given a stipulated budget from which they have to bid for the accessories \
      to tune their vehicle. The participants will be provided with a catalogue containing the details of the accessories to \
      be auctioned. The organizers will display a simulated version of the accessories with their specs and basic prize. The \
      participants will bid by raising their placards. After the auction process participants will be given 15 mins of time, to \
      organize their buys. After which they have to present their vehicle to the panel justifying their modifications. The \
      pair/individual with best explanation and choice of parts will be declared as the “WINNER”.";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("time").innerHTML = "10:00 AM - 12:00 PM & 1:30 PM - 4:00 PM";
  document.getElementById("date").innerHTML = "February 19, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919025731239\"target=\"_blank\">Manu Krishna M R - 9025731239</a><br><a class=\"whatsapp\"href=\"https://wa.me/917010813613\"target=\"_blank\">Nagaharisangar T - 7010813613</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919786148309\"target=\"_blank\">Saran C S - 9786148309</a><br><a class=\"whatsapp\"href=\"https://wa.me/916384638464\"target=\"_blank\">Srimeenakshi Pratusha - 6384638464</a>";
  document.getElementById('modal_start').scrollIntoView();
}

managementModal2.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modal_heading").innerHTML = "INNOVATION CHAMBER";  
  document.getElementById("modal_descriptionPara").innerHTML = "This event is initiated with an aim to serve a perfect launchpad for \
      technocrats to showcase their innovation ideas. There are two rounds. The participants should \
      present their creative ideas on the given topics. Each round has different interesting tasks and \
      challenges."; 
  document.getElementById("modal_rulesPara").innerHTML = " \
      <ul class=\"lists\"> \
        <li class=\"points\">A participant can be a part of one team only.</li> \
        <li class=\"points\">Plagiarism, in any form, will not be tolerated and such entries will be immediately disqualified.</li> \
        <li class=\"points\">Team leader alone should submit the logo.</li> \
        <li class=\"points\">The team size can be 1 or 3.</li> \
        <li class=\"points\">Participants must wear their ID throughout the event.</li> \
        <li class=\"points\">Use of mobile phones for searching answers is strictly prohibited.</li> \
        <li class=\"points\">Scores will be provided based on presentation and innovation.</li> \
        <li class=\"points\">The participants must follow the instructions given during the event and must not give any excuses.</li> \
        <li class=\"points\">The decision of the judges will be final.</li> \
      </ul>";
  document.getElementById("round1").innerHTML = "ROUND 1";
  document.getElementById("round2").innerHTML = "ROUND 2";
  document.getElementById("round3").innerHTML = "";
  document.getElementById("modal_teamSizePara").innerHTML = "Minimum: 1 Member<br>Maximum: 3 Members";
  document.getElementById("modal_round1Para").innerHTML = "In this round, we are going to start by defining our actual business. The event to establish your ideas to \
      express the whole thing in a single design. give your enthusiasm in a narrow path. \
      The participants are expected to design the logo for the topic that have been chosen by you from the bundle of \
      topics given by us. The logos are submitted in online (G- Forms).";
  document.getElementById("modal_round2Para").innerHTML = "In this round participants showcase their innovation ideas to manage Institutional Solid waste and \
      Energy Production from Solid Waste. \
      Solid waste management prevents household and environment from experiencing hazardous outcomes of solid \
      waste materials. Participants should bring their Innovative Ideas as CAD Drawing (2D / 3D) or Schematic \
      Drawing.";
  document.getElementById("event-rules").innerHTML = "EVENT RULES";
  document.getElementById("modal_round3Para").innerHTML = "";
  document.getElementById("time").innerHTML = "1:30 PM - 4:30 PM";
  document.getElementById("date").innerHTML = "February 20, 2022";
  document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/917867022315\"target=\"_blank\">Eswarnath C - 7867022315</a><br><a class=\"whatsapp\"href=\"https://wa.me/919894954617\"target=\"_blank\">Vivekanandhan S - 9894954617</a>";
  document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/917639768975\"target=\"_blank\">Samuvel V - 7639768975</a><br><a class=\"whatsapp\"href=\"https://wa.me/917200040050\"target=\"_blank\">Parthiban B - 7200040050</a>";
  document.getElementById('modal_start').scrollIntoView();
}