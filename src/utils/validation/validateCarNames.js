import { splitStrWithDelimiter } from '../stringUtils.js';
import ERROR_MESSAGE from '../../constants/errorMessage.js';
import RULES from '../../constants/rules.js';

function isValidCarCount(carNames) {
  if (carNames.length < 2) {
    throw new Error(ERROR_MESSAGE.INVALID_CAR_COUNT);
  }
}

function isValidCarNames(carNames) {
  const regExp = /^[a-z|A-Z|가-힣]+$/; // 한글, 영문만 입력 가능

  carNames.forEach((carName) => {
    if (carName.length > 5) {
      throw new Error(ERROR_MESSAGE.INVALID_CAR_NAME);
    }

    if (!carName.match(regExp)) {
      throw new Error(ERROR_MESSAGE.INVALID_CAR_NAME);
    }
  });
}

function hasUniqueCarNames(carNames) {
  const uniqueCarNames = new Set(); // 중복된 자동차 이름 체크

  carNames.forEach((carName) => {
    uniqueCarNames.add(carName.toLowerCase());
  });

  if (uniqueCarNames.size !== carNames.length) {
    throw new Error(ERROR_MESSAGE.DUPLICATED_CAR_NAME);
  }
}

export default function validateCarNames(carNamesStr) {
  const carNames = splitStrWithDelimiter(carNamesStr, RULES.DELIMITER);

  isValidCarCount(carNames);
  isValidCarNames(carNames);
  hasUniqueCarNames(carNames);
}
