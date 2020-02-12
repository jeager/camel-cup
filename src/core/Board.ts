import Tile from './Tile';
import Player from './Player';
import Camel from './Camel';

const NUM_OF_TILES = 20;

class Board {
  tiles: Tile[];
  players: Player[] = [];
  numberOfPlayers: number = 0;

  constructor() {
    this.tiles = this._setupTiles();
  }

  private _setupTiles = () => {
    const tiles: Tile[] = []
    for (let index = 0; index < NUM_OF_TILES; index++) {
      tiles.push(new Tile());
    }
    return tiles;
  }

  addPlayer = (name: string) => {
    const newPlayer = new Player(name);
    this.players.push(newPlayer);
  };

  rollDice = () => {
    return Math.ceil(Math.random() * 3);
  }

  moveCamel = (camel: Camel, steps: number, firstTime: boolean = false) => {
    const currentTile = this.tiles[camel.positionOnBoard];
    const newPosition = camel.positionOnBoard + steps;

    if(firstTime) {
      camel.positionOnBoard = newPosition;
      this.tiles[newPosition].camels.push(camel);
      return;
    }

    if (currentTile.hasMultipleCamels() && !camel.isLast(this)) {
      const camelsToMove = currentTile.camels.slice(camel.positionOnTile(this) - 1, currentTile.camels.length);
      currentTile.camels = currentTile.camels.slice(0, camel.positionOnTile(this));
      camelsToMove.map(camel => {
        camel.move(newPosition);
        this.tiles[newPosition].camels.push(camel);
      });
    } else {
      const remainingCamelsOnTile = this.tiles[camel.positionOnBoard].camels.filter(filteredCamel => filteredCamel.color !== camel.color);
      this.tiles[camel.positionOnBoard].camels = remainingCamelsOnTile;
      camel.move(newPosition);
      this.tiles[newPosition].camels.push(camel);
    }
  }
}

export default Board;