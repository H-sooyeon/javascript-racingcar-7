import { makeRandomNumber } from '../utils/numberUtils.js';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  isPossibleMove() {
    return makeRandomNumber(0, 9) >= 4;
  }

  move() {
    if (this.isPossibleMove()) {
      this.position += 1;
    }
  }
}

export default Car;
