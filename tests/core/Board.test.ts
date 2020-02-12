import Board from "../../src/core/Board"
import Camel from "../../src/core/Camel";

describe('Board constructor', () => {
  test('creates a new Board', () => {
    const board = new Board();
    expect(board.numberOfPlayers).toBe(0);
    expect(board.players.length).toBe(0);
  })

  test('adds a new player to the board', () => {
    const board = new Board();
    board.addPlayer('Someone');
    expect(board.players.length).toBe(1);
    expect(board.players[0].name).toBe('Someone');
  })

  test('creates 20 tiles for the board', () => {
    const board = new Board();
    expect(board.tiles.length).toBe(20);
  })

  describe('camel movement', () => {
    test('moves only one camel', () => {
      const board = new Board();
      const redCamel = new Camel('red');
      const blueCamel = new Camel('red');

      board.moveCamel(blueCamel, 1, false);
      board.moveCamel(redCamel, 2, false);
      board.moveCamel(blueCamel, 2, false);

      expect(redCamel.positionOnBoard).toBe(2);
      expect(blueCamel.positionOnBoard).toBe(3);
      expect(redCamel.positionOnTile(board)).toBe(1);
      expect(blueCamel.positionOnTile(board)).toBe(1);
    });

    test('moves two camels on same tile', () => {
      const board = new Board();
      const redCamel = new Camel('red');
      const blueCamel = new Camel('blue');

      board.moveCamel(redCamel, 2, false);
      board.moveCamel(blueCamel, 2, false);
      board.moveCamel(redCamel, 2, false);

      expect(redCamel.positionOnBoard).toBe(4);
      expect(blueCamel.positionOnBoard).toBe(4);
      expect(redCamel.positionOnTile(board)).toBe(1);
      expect(blueCamel.positionOnTile(board)).toBe(2);
    });

    test('moves two camels on same tile but not the first one', () => {
      const board = new Board();
      const redCamel = new Camel('red');
      const blueCamel = new Camel('blue');
      const blackCamel = new Camel('black');

      board.moveCamel(redCamel, 2, false);
      board.moveCamel(blueCamel, 2, false);
      board.moveCamel(blackCamel, 2, false);
      board.moveCamel(blueCamel, 2, false);

      expect(redCamel.positionOnBoard).toBe(2);
      expect(blueCamel.positionOnBoard).toBe(4);
      expect(blackCamel.positionOnBoard).toBe(4);
      expect(redCamel.positionOnTile(board)).toBe(1);
      expect(blueCamel.positionOnTile(board)).toBe(1);
      expect(blackCamel.positionOnTile(board)).toBe(2);
    });
  })
})