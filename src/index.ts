#!/usr/bin/env node

import Board from './core/Board';
import Inquirer from 'inquirer';
import Camel from './core/Camel';

const board = new Board();

async function startGame() {
  await setupNumberOfPlayers()
  await setupNewPlayer()
  setupCamels();
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

  board.tiles.map(tile => tile.camels.map(camel => console.log({...camel, positionOnTile: camel.positionOnTile(board)})));
}

startGame();