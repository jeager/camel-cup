class Player {
  money: number = 0;
  name: string;
  color: string;
  
  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }
}

export default Player;