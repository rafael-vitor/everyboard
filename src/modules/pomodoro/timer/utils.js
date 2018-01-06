const fillTextWithFormat = function fillTextWithFormat(
  minutes: number,
  seconds: number,
  ): string {
  let finalMinutes;
  let finalSeconds;

  if (minutes > 9) {
    finalMinutes = minutes;
  } else {
    finalMinutes = `0${minutes}`;
  }
  if (seconds > 9) {
    finalSeconds = seconds;
  } else {
    finalSeconds = `0${seconds}`;
  }
  return `${finalMinutes}:${finalSeconds}`;
};

const getPercentageTimeLeft = function getPercentageTimeLeft(
  currentMinutes: number,
  currentSeconds: number,
  limit: string,
  ): number {
    const currentTotalSeconds = currentMinutes * 60 + currentSeconds;


    const limitTotalSeconds = parseInt(limit.split(':')[0] * 60) + parseInt(limit.split(':')[1]);

    return currentTotalSeconds * 100 / limitTotalSeconds;
};

export {
  fillTextWithFormat,
  getPercentageTimeLeft,
};