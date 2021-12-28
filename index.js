  var playerSelection = prompt("Enter rock, paper or scissors").toLowerCase();

      function computerPlay(){
        let objects = ['Rock', 'Paper', 'Scissors'];
        let random = Math.floor(Math.random() * 3);
        return objects[random];
      }

       var computerSelection = computerPlay().toLowerCase();

      var playerScore = 0;
      var computerScore = 0;

      var playerScoreArray = [];
      var computerScoreArray = [];


     function playRound(playerSelection, computerSelection){
           if (playerSelection == "paper" && computerSelection == "rock") {
             let result =  "You win! Paper beats Rock"
             playerScore += 1;
             playerScoreArray.push(playerScore);
              document.getElementById('playerScore').innerHTML = playerScoreArray[playerScoreArray.length-1];
             return document.getElementById('result').innerHTML = result;
         }
        
           else if (playerSelection == "paper" && computerSelection == "scissors") {
             let result =  "You Lose! scissors beats paper"
              computerScore += 1;
              computerScoreArray.push(computerScore);
               document.getElementById('computerScore').innerHTML = computerScoreArray[computerScoreArray.length - 1];
              return document.getElementById('result').innerHTML = result;
         }
        
           else if (playerSelection == "paper" && computerSelection == "paper") {
             let result =  "Draw! Paper matches paper"
              playerScore =  playerScoreArray[playerScoreArray.length - 1];
              computerScore =  computerScoreArray[computerScoreArray.length - 1];
              return document.getElementById('result').innerHTML = result;
         }
        
         
         
           else if (playerSelection == "rock" && computerSelection == "rock") {
               let result =  "Draw! rock matches rock";
               playerScore = playerScoreArray[playerScoreArray.length - 1];
               computerScore = computerScoreArray[computerScoreArray.length - 1];
               return document.getElementById('result').innerHTML = result;
           }

           else if (playerSelection == "rock" && computerSelection == "paper") {
               let result =  "You lose! Paper beats rock";
               computerScore += 1;
                computerScoreArray.push(computerScore);
                document.getElementById('computerScore').innerHTML = computerScoreArray[computerScoreArray.length - 1];
               return document.getElementById('result').innerHTML = result;
           }
             else if (playerSelection == "rock" && computerSelection == "scissors") {
             let result =  "You win! rock beats scissors"
             playerScore += 1;
              playerScoreArray.push(playerScore);
              document.getElementById('playerScore').innerHTML = playerScoreArray[playerScoreArray.length - 1];
             return document.getElementById('result').innerHTML = result;
         }

         else if (playerSelection == "scissors" && computerSelection == "rock") {
             let result =  "You lose! rock beats scissors"
             computerScore += 1;
              computerScoreArray.push(computerScore);
              document.getElementById('computerScore').innerHTML = computerScoreArray[computerScoreArray.length - 1];
             return document.getElementById('result').innerHTML = result;
         }


         else if (playerSelection == "scissors" && computerSelection == "paper") {
             let result =  "You win! scissors matches paper"
             playerScore += 1;
              playerScoreArray.push(playerScore);
             document.getElementById('playerScore').innerHTML = playerScoreArray[playerScoreArray.length - 1];
             return document.getElementById('result').innerHTML = result;
         }

         else if (playerSelection == "scissors" && computerSelection == "scissors") {
             let result =  "Draw! scissors matches scissors";
            playerScore = playerScoreArray[playerScoreArray.length - 1];
               computerScore = computerScoreArray[computerScoreArray.length - 1];
                return document.getElementById('result').innerHTML = result;
                 
         }
        
      }
                playRound(playerSelection, computerSelection);

    //   function game(){
           
    //         playRound(playerSelection, computerSelection);
    //         playRound(playerSelection, computerSelection);
    //       playRound(playerSelection, computerSelection);
    //         playRound(playerSelection, computerSelection);
    //       playRound(playerSelection, computerSelection);

    //   }

    //    game();
