import { days } from "../constants";

export const isNumberDay = appointmentDays => {
  let index = days.findIndex(day => day === appointmentDays);
  return index;
};

export const nextWeekdayDate = (date, day_in_week) => {
  const ret = new Date(date || new Date());
  ret.setDate(ret.getDate() + ((day_in_week - ret.getDay() + 7) % 7));
  return ret;
};
