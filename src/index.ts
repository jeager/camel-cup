#!/usr/bin/env node

import Board from './core/Board';
import Inquirer from 'inquirer';

const board = new Board();

async function startGame() {
  await setupNumberOfPlayers()
  await setupNewPlayer()
}

async function setupNumberOfPlayers() {
  return Inquirer.prompt([{
    message: "Number of players",
    type: 'input',
    name: 'numberOfPlayers',
  }]).then((answers:Inquirer.Answers) => {
    console.log(answers.numberOfPlayers);
    board.numberOfPlayers = answers.numberOfPlayers;
  });
}

function setupNewPlayer() {
  return Inquirer.prompt([{
    message: "Name of the Player",
    type: 'input',
    name: 'name',
  }, {
    message: "Color of the player",
    type: 'rawlist',
    name: 'color',
    choices: ["Red", "Blue", "Green", "Black"],
  }]).then((answers:Inquirer.Answers) => {
    board.addPlayer(answers.name, answers.color);
    if(board.numberOfPlayers != board.players.length) {
      setupNewPlayer();
    }
  });
}

startGame();