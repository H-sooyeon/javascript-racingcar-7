import ERROR_MESSAGE from '../../constants/errorMessage.js';

function validateIsNumber(tryCount) {
  if (Number.isNaN(tryCount)) {
    throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
  }
}

function validateTryCountRange(tryCount) {
  const parsedTryCount = Number(tryCount);
  if (
    parsedTryCount < 1 ||
    !Number.isInteger(parsedTryCount) ||
    parsedTryCount > 10
  ) {
    throw new Error(ERROR_MESSAGE.INVALID_TRY_COUNT);
  }
}

export default function validateTryCount(tryCount) {
  validateIsNumber(tryCount);
  validateTryCountRange(tryCount);
}
