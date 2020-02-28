!function() {
    "use strict";
    
    const startGame = document.getElementById("startgame");
    const gameControl = document.getElementById("gamecontrol");
    const game = document.getElementById("game");
    const score = document.getElementById("score");
    const actionArea = document.getElementById("actions");

    const gameData = {
        dice: ['./images/1die.jpg', './images/2die.jpg', './images/3die.jpg', 
        './images/4die.jpg', './images/5die.jpg', './images/6die.jpg',],
        players: ["player A:", "player B:"],
        score: [0,0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    }

    startGame.addEventListener("click", function(){
        gameData.index = Math.round(Math.random()),
        gameControl.innerHTML = '<h2>Game Has Started, Good Luck!</h2>';
        gameControl.innerHTML += '<button id="quit">Want to Quit?</button>';

        document.getElementById('quit').addEventListener("click", function(){
            location.reload();
        });

        setUpTurn();
    });

    function setUpTurn(){
        game.innerHTML = `<p>Roll the Dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice!</button>';
        document.getElementById('roll').addEventListener("click", function(){

            throwDice();

        });

        checkWinningCondition();
    }

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.ceil(Math.random()*6);
        gameData.roll2 = Math.ceil(Math.random()*6);
        game.innerHTML = `<p>Roll the Dice for ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> 
                            <img src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        // if two 1's are rolled...
        if( gameData.rollSum === 2 ){
            game.innerHTML += `<p>Oh snap! Snakey eyes!</p>`;
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            setTimeout(setUpTurn, 2000);
        }
        // if either die is a 1...
        else if(gameData.roll1 === 1 || gameData.roll2 === 1){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one of your rolls was one, switching to ${
                gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 3000);
        }
        // if neither die is a 1...
        else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML += '<button id="rollagain">Roll Again!</button> or <button id="pass">Pass!</button>';

            document.getElementById('rollagain').addEventListener("click", function(){ 
                throwDice();
            });

            document.getElementById('pass').addEventListener("click", function(){
                gameData.index ? gameData.index = 0 : gameData.index = 1;
                setUpTurn();
            });

            checkWinningCondition();
        }
    }

    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<h2>${gameData.players[gameData.index]} 
            wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Want to Start a New Game?";
        }
        else{  
            showCurrentScore();
        }
    }

    function showCurrentScore(){
        score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]} ${gameData.score[0]}</strong> and <strong>${gameData.players[1]} ${gameData.score[1]}</p>`;
    }

    
} ();
