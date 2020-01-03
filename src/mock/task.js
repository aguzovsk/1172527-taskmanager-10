import {COLORS} from '../consts.js';
import {WEEK_DAYS} from '../consts.js';

const DescriptionItems = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`
];

const Tags = [
  `homework`,
  `theory`,
  `practice`,
  `intensive`,
  `keks`,
  `important`,
  `personal`
];

const NoRepeatingDays =
  WEEK_DAYS.reduce((obj, day) => Object.assign(obj, {[day]: false}), {});

const getRandomIntInRange =
  (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getRandomArrayItem =
  (array) => array[getRandomIntInRange(0, array.length)];

const getRandomDate = () => {
  const targetDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * getRandomIntInRange(0, 7);

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};

const generateRepeatingDays = () => {
  const temp = {};
  Object.keys(NoRepeatingDays)
    .forEach(function (day) {
      temp[day] = Math.random() > 0.75;
    });
  return temp;
};

const getShuffled = (arr) => {
  const array = arr.slice();
  for (let i = array.length - 1; i > 0; --i) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const generateTags =
  (tags) => getShuffled(tags).slice(0, 3);

const generateTask = () => {
  const dueDate = Math.random() > 0.5 ? null : getRandomDate();

  return {
    description: getRandomArrayItem(DescriptionItems),
    dueDate,
    repeatingDays: dueDate ? NoRepeatingDays : generateRepeatingDays(),
    tags: generateTags(Tags),
    color: getRandomArrayItem(COLORS),
    isFavorite: Math.random() > 0.6,
    isArchive: Math.random() > 0.7
  };
};

const generateTasks =
  (count) => new Array(count).fill(``).map(generateTask);

export {generateTask, generateTasks};
