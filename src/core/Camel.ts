import Board from "./Board";

class Camel {

  color: string;
  positionOnBoard: number = 0;
  static COLORS: string[] = ['red', 'blue', 'yellow', 'green', 'black'];

  constructor(color: string) {
    this.color = color;
  }

  positionOnTile = (board: Board) => {
    return board.tiles[this.positionOnBoard].camels.indexOf(this) + 1;
  }

  isLast = (board: Board) => {
    return this.positionOnTile(board) === board.tiles[this.positionOnBoard].camels.length
  }

  move = (newPosition: number) => {
    this.positionOnBoard = newPosition;
  }
}

export default Camel;