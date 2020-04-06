import { days } from "../constants";

export let calculationWeekend = propsWeekend => {
  const weekend = [];
  for (let i = 0; i < propsWeekend.length; i++) {
    weekend.push(days[propsWeekend[i]]);
  }
  return weekend;
};

export let calculationDay = (propsDate) => {
  return days[propsDate.getDay()]
}

export const calculationDate = (propsElement, propsDate) => {
  const arr = propsElement.startTime.split(":");
  return new Date(
    propsDate.getFullYear(),
    propsDate.getMonth(),
    propsDate.getDate(),
    arr[0],
    arr[1] - 15
  );
};
