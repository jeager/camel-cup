#!/usr/bin/env node

import Board from './core/Board';
import Inquirer from 'inquirer';
import Camel from './core/Camel';
import Figlet from 'figlet';

const board = new Board();

async function startGame() {
  showGameTitle();
  await setupNumberOfPlayers();
  await setupNewPlayer();
  setupCamels();
  takeAction();
}

const setupNumberOfPlayers = async () => {
  return Inquirer.prompt([{
    message: "Number of players",
    type: 'input',
    name: 'numberOfPlayers',
  }]).then((answers:Inquirer.Answers) => {
    board.numberOfPlayers = answers.numberOfPlayers;
  });
}

const setupNewPlayer = async () => {
  return Inquirer.prompt([{
    message: "Name of the Player",
    type: 'input',
    name: 'name',
  }]).then( async (answers:Inquirer.Answers) => {
    board.addPlayer(answers.name);
    if(board.numberOfPlayers != board.players.length) {
      await setupNewPlayer();
    }
  });
}

const setupCamels = () => {
  Camel.COLORS.map(color => {
    board.moveCamel(new Camel(color), board.rollDice(), true);
  });
}

const showGameTitle = () => {
  console.log(Figlet.textSync('Camel Cup'))
}

const takeAction = () => {
  return Inquirer.prompt([{
    message: "Number of players",
    type: 'list',
    name: 'action',
    choices: ['Roll dice', "Place a bet for turn", "Place a bet for game", "Place modifier tile"],
  }]).then((answers:Inquirer.Answers) => {
    console.log(answers.action)
  });
}

startGame();