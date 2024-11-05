import Input from '../utils/io/Input.js';
import Output from '../utils/io/Output.js';
import { splitStrWithDelimiter } from '../utils/stringUtils.js';
import validateCarNames from '../utils/validation/validateCarNames.js';
import validateTryCount from '../utils/validation/validateTryCount.js';
import RULES from '../constants/rules.js';
import Car from './Car.js';
import RoundManager from './RoundManager.js';

class Controller {
  #carList = [];

  setCarNames = async () => {
    const userInputCarNames = await Input.get(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    validateCarNames(userInputCarNames);
    this.initializeRacingCars(userInputCarNames);
  };

  setTryCount = async () => {
    const userInputTryCount = await Input.get('시도할 횟수는 몇 회인가요?\n');

    validateTryCount(userInputTryCount);
    this.tryCount = Number(userInputTryCount);
  };

  initializeRacingCars(carNames) {
    const carNameList = splitStrWithDelimiter(carNames, RULES.DELIMITER);

    carNameList.forEach((carName) => {
      const car = new Car(carName);
      this.#carList.push(car);
    });
  }

  findMaxPositionUser() {
    const positions = this.#carList.map((car) => car.position);
    const maxPosition = Math.max(...positions);

    return this.#carList.filter((car) => car.position === maxPosition);
  }

  printWinner() {
    const winners = this.findMaxPositionUser().map((car) => car.name);
    Output.printArrayWithComma(winners, '최종 우승자');
  }

  play() {
    Output.print('\n실행 결과');

    const roundManager = new RoundManager(this.#carList, this.tryCount);
    roundManager.playRace();
  }
}

export default Controller;
