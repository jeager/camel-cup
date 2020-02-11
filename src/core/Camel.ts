class Camel {

  COLORS = ['red', 'blue', 'yellow', 'green', 'black']
  
  color: string;
  positionOnBoard: number = 0;
  postionOnTile: number = 0;

  constructor(color: string) {
    this.color = color;
  }
}

export default Camel;