# Tic-Tac-Toe
<br>Created the classic game of Tic-Tac-Toe in order to learn HTML, CSS, JavaScript
<br>
Features:
<br>1. Multiplayer(Offline)
<br>2. New Game Button
<br>3. Reset Game Button
<br>4. All the Tic-Tac-Toe jazz
<br>
<br> How it works:
<br>1. HTML:
<br>&emsp;1.1 Used emmet abbreviation to create the boiler plate code of a generic HTML document
<br>&emsp;1.2 Created 9 buttons for the game and assigned all buttons with the class of "box"
<br>&emsp;1.3 Put the buttons in a div with a class = "game", which is in another div with the class = "container"
<br>&emsp;1.4 Create other divs, headings, paragraphs etc. for later use and implementation
<br>&emsp;1.5 Link my CSS and JS files with the HTML document
<br>2. CSS:
<br>&emsp;2.1 Made changes to font, color, bg color, height, width, allignment etc.
<br>&emsp;2.2 Overall made simple and self explanatory changes
<br>3. JavaScript
<br>&emsp;3.1 First I created variables that access all the elements of the HTML file
<br>&emsp;3.2 Then I created an array with all the possible winning conditions
<br>&emsp;3.3 To add the most important function i.e being able to play the game a forEach loop was used with the variable "boxes". 
<br>&emsp;&emsp;"boxes" returns a nodelist of the buttons which works very similar to an array. Using the forEach loop I implemented an arrow function inside it with the parameter of "box".
<br>&emsp;3.4 This contained and eventListener inside it which would react to clicks made and would put the "O" or "X" symbol. The game will always start with "O".
<br>&emsp;3.5 A function named checkWinner was created to check for winning condition. This was done by creating a for loop that would continuously check the position values in the 
<br>&emsp;&emsp;nodelist of the buttons and checked the inner text. If all the places are not empty and are equal, the winning condition is satisfied. else if the variable the 
<bt>&emsp;&emsp;"count" which updates everytime a button is clicked in the game, is equal to 9 and the winning condition is not satified, it's a TIE!.
<br>&emsp;3.6 Functions "showWinner" & "showTie" use DOM manipulation to show the end of the game and the option to start a new game
<br>&emsp;3.7 You could choose to reset game or start a new game as both do the same function
<br>&emsp;3.8 First the first turn is given to "O", then count is returned back to 0, all the buttons are enabled (which get disabled after the game is either won or tied) and the end game text is removed from the screen

<br> That is as best as I could summarise it

<br>Author - Aakash Bisht
