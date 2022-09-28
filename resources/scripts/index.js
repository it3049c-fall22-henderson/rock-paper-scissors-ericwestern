// Elements
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.getElementById('game-screen');
const startGameButton = document.getElementById('start-game-button');
const resetGameButton = document.getElementById('reset-game-button');
const userName = document.getElementById('username');
const userSelection = document.getElementById('user-selection');
const goButton = document.getElementById('go-button');
const scoreParagraph = document.getElementById('score');
const gameHistoryParagraph = document.getElementById('game-history');

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide game screen
if (!game)
  gameScreen.classList.add('d-none');

// updateScoreTallyUI
function updateScoreTallyUI(){
  scoreParagraph.innerText = game.username + ': ' + game.score.user + ' v CPU: ' + game.score.cpu + '   (ties: ' + game.score.tie + ')';
}

// updateGameHistoryUI
function updateGameHistoryUI(){
  let history = '';
  game.gameHistoryLog.forEach(log => {
    history = log + '\n' + history;
  });
  gameHistoryParagraph.innerText = history;
}

// start-game-button EventListener
startGameButton.addEventListener('click', function (event) {
  game = new RockPaperScissors(userName.value);
  welcomeScreen.classList.add('d-none');
  gameScreen.classList.remove('d-none');
  updateScoreTallyUI();
  event.preventDefault();
  // Complete
});

// change from go-button EventListener to go function for game buttons
function go(event, userSel) {
  game.play(userSel);
  updateScoreTallyUI();
  updateGameHistoryUI();
  event.preventDefault();
};

// If you're doing the extra-credit, uncomment the below: reset-game-button
resetGameButton.addEventListener('click', function(e) { 
  game = null;
  userName.value = '';
  welcomeScreen.classList.remove('d-none');
  gameScreen.classList.add('d-none');
});