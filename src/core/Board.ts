import Tile from './Tile';
import Player from './Player';

class Board {
  tiles: Tile[] = [];
  players: Player[] = [];
  numberOfPlayers: number = 0;

  addPlayer (name: string, color: string) {
    const newPlayer = new Player(name, color);
    this.players.push(newPlayer);
  };
}

export default Board;