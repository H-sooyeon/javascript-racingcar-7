import { Random } from '@woowacourse/mission-utils';

export function makeRandomNumber(min, max) {
  return Random.pickNumberInRange(min, max);
}
