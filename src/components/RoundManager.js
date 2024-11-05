import Output from '../utils/io/Output.js';

class RoundManager {
  constructor(carList, round) {
    this.carList = carList;
    this.round = round;
  }

  #playRound() {
    this.carList.forEach((car) => {
      car.move();
    });
  }

  printRoundResult() {
    this.carList.forEach((car) => {
      Output.print(`${car.name} : ${'-'.repeat(car.position)}`);
    });

    Output.print('');
  }

  playRace() {
    while (this.round > 0) {
      this.#playRound();
      this.printRoundResult();
      this.round -= 1;
    }
  }
}

export default RoundManager;
