  function choice(num) {
            if (num === 1) return 's';
            if (num === 2) return 'w';
            return 'g'
        }
        let userScore = 0;
        let botScore = 0;
        function play(userChoice) {
            let bot = Math.floor(Math.random() * 3) + 1;
            let result;

            let botChoice = choice(bot);

            if (userChoice === botChoice) {
                result = "Its a tie!";
            }
            else if(
                (userChoice === 's' && botChoice === 'w') ||
                (userChoice === 'w' && botChoice === 'g') ||
                (userChoice === 'g' && botChoice === 's')
            ) {
                result = "You Win🎉";
                userScore++;
            }
            else {
                result = "You Loss🤦‍♂️";
                botScore++;
            }

            //Update screen
            document.getElementById("result").textContent = result;
            document.getElementById("score").textContent = userScore;
            document.getElementById("Cscore").textContent = botScore;

            if(userChoice === 's') userChoice = "Snake";
            else if(userChoice === 'w') userChoice = "Water";
            else userChoice = "Gun";
            document.getElementById("choice").textContent = userChoice;

            if(botChoice === 's') botChoice = "Snake";
            else if(botChoice === 'w') botChoice = "Water";
            else botChoice = "Gun";
            document.getElementById("Cchoice").textContent = botChoice;

        
        }