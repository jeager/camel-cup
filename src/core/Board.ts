import Tile from './Tile';
import Player from './Player';

const NUM_OF_TILES = 20;

class Board {
  tiles: Tile[];
  players: Player[] = [];
  numberOfPlayers: number = 0;

  constructor() {
    this.tiles = this.setupTiles();
  }

  setupTiles = () => {
    const tiles: Tile[] = []
    for (let index = 0; index < NUM_OF_TILES; index++) {
      tiles.push(new Tile());
    }
    return tiles;
  }

  addPlayer (name: string) {
    const newPlayer = new Player(name);
    this.players.push(newPlayer);
  };
}

export default Board;