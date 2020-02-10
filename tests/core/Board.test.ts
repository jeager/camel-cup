import Board from "../../src/core/Board"

describe('Board constructor', () => {
  test('creates a new Board', () => {
    const board = new Board()
    expect(board.numberOfPlayers).toBe(0);
    expect(board.players.length).toBe(0);
  })

  test('adds a new player to the board', () => {
    const board = new Board()
    board.addPlayer('Someone', 'red');
    expect(board.players.length).toBe(1);
    expect(board.players[0].name).toBe('Someone');
    expect(board.players[0].color).toBe('red');
  })
})