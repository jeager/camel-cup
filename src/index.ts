#!/usr/bin/env node

import Board from './core/Board';
import Inquirer from 'inquirer';

const board = new Board();

async function startGame() {
  await setupNumberOfPlayers()
  await setupNewPlayer()
}

const setupNumberOfPlayers = async () => {
  return Inquirer.prompt([{
    message: "Number of players",
    type: 'input',
    name: 'numberOfPlayers',
  }]).then((answers:Inquirer.Answers) => {
    console.log(answers.numberOfPlayers);
    board.numberOfPlayers = answers.numberOfPlayers;
  });
}

const setupNewPlayer = () => {
  return Inquirer.prompt([{
    message: "Name of the Player",
    type: 'input',
    name: 'name',
  }]).then((answers:Inquirer.Answers) => {
    board.addPlayer(answers.name);
    if(board.numberOfPlayers != board.players.length) {
      setupNewPlayer();
    }
  });
}

startGame();