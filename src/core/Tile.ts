import Camel from './Camel';

class Tile {
  camels: Camel[] = [];

  hasMultipleCamels = () => {
    return this.camels.length > 1;
  }
}

export default Tile;