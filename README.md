# Guess a number Exercise

In this project you will create a guess a number application

This application will allow users to guess a number between 1 and 100
then the app will check against the number it has randomly selected and
provide the user with 10 tries to guess the right number.

Upon looking at this brief, the first thing we can do is to start breaking it down into simple actionable tasks, in as much of a programmer mindset as possible:

1. Generate a random number between 1 and 100.
2. Record the turn number the player is on. Start it on 1.
3. Provide the player with a way to guess what the number is.
4. Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
5. Next, check whether it is the correct number.
6. If it is correct:
  1. Display congratulations message.
  2. Stop the player from being able to enter more guesses (this would mess the game up).
  3. Display control allowing the player to restart the game.
7. If it is wrong and the player has turns left:
  1. Tell the player they are wrong.
  2. Allow them to enter another guess.
  3. Increment the turn number by 1.
8. If it is wrong and the player has no turns left:
  1. Tell the player it is game over.
  2. Stop the player from being able to enter more guesses (this would mess the game up).
  3. Display control allowing the player to restart the game.
9. Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.


The purpose of this project is to get an introduction to coding basics:

* Types
* Variables
* Numbers
* Strings

* Conditionals
