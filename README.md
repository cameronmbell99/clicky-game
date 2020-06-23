# **clicky-game**
This is my Avengers *Clicky-Game*, the goal is to click every image on the screen only once, everytime the player clicks an image the images are shuffled, and your score is displayed in the top right corner of the screen.


**Functionality**

*Clicky-Game* uses local images, they get called using the avengers.json file, and are then individually put into a bootstrap card component, with an onclick function. When the player clicks a card the clicked property in the avengers.json file is set to true, if a card with the clicked property set to true is clicked again the player loses and the game is reset. 

This is the main page: ![Clicky-Game screenshot](homePage.png)