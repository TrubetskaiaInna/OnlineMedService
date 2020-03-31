import { week } from "../constants";

export const isWeekend = res => {
  let weekday = [];
  let weekend = [];
  let arr = res.data.schedule;
  for (let day of arr) {
    if (!weekday.includes(day.day)) {
      weekday.push(day.day);
    }
  }
  week
    .filter(x => !weekday.includes(x))
    .forEach(el => {
      weekend.push(week.indexOf(el));
    });
  return { weekend: weekend };
};
