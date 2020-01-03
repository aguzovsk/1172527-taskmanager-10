const castTimeFormat =
  (value) => value < 10 ? `0${value}` : String(value);

export const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 20);
  const minutes = castTimeFormat(date.getMinutes());
  const period = date.getHours() > 11 ? `pm` : `am`;

  return `${hours}:${minutes} ${period}`;
};
