const convertMatchTime = (matchTime) => {
  if (!matchTime) return '-';

  const time = Math.round(Number(matchTime) / 10);
  let ms = time % 100;
  let seconds = Math.floor((time % 6000) / 100);
  const minutes = Math.floor(time / 6000);

  ms = ms < 10 ? `0${ms}` : ms;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}'${seconds}'${ms}`;
};

export default convertMatchTime;
