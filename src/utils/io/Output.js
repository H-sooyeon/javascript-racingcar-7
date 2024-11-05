import { Console } from '@woowacourse/mission-utils';
import RULES from '../../constants/rules.js';

export default class Output {
  static printArrayWithComma(arrays, message) {
    Console.print(`${message} : ${arrays.join(`${RULES.DELIMITER} `)}`);
  }

  static print(message) {
    Console.print(message);
  }
}
