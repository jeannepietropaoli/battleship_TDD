# battleship_TDD

## Live version

https://jeannepietropaoli.github.io/battleship_TDD

## Warning

New to TDD workflow means slower development at first to become faster in the end !

## Description

Practice inside the Odin Project's Full Stack JavaScript course.

To learn more about The Odin Project : https://www.theodinproject.com/

To learn more about the specific project : https://www.theodinproject.com/lessons/node-path-javascript-battleship

The goal of this project is to implement the classic game ‘Battleship’ while using TDD workflow for the first time.

## Skills to practice

- Practice TDD (unit testing for now) workflow (write a simple test, write just enough code to make it pass, if it fails change code, until it passes. Write another test ... and so on)
- Try to enforce unit testing best practice :
  - Test incoming query messages by making assertions about what they send back
  - Test incoming command messages by making assertions about public direct side effects
  - Do no test self to self messages (private methods) or outgoing query messages
  - Test outgoing command messages by expecting to send outgoing command message and not by testing the side effects
  - isolate to test one method at a time
  - write pure functions if possible
- Practice using mocks when needed
- Working with Jest
- Writing clear and polyvalent tests
- Organizing code into classes and modules

## Features

- Player VS computer game
- Smart AI that plays legal moves
- Drag and drop feature for placing the ships on the gameboard

## Test

- Launch Jest in the terminal and see if the tests pass

## Improvements

- Polish the intelligence of the computer player by having it try adjacent slots after getting a ‘hit’
- Create a 2-player option (no computer)
- Improve UI : - display ships with ships logos - display hits in a more dynamic way
- Add a 'place your ships randomly' for the player

Extend TDD to :

- Integration testing (test how to tested component interac once together)
- Functional tests, which test the application from the point of view of the user
- End to end tests
