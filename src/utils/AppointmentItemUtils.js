import { days } from "../constants";

export const isNumberDay = appointmentDays => {
  return days.findIndex(day => day === appointmentDays);
};

export const nextWeekdayDate = (date, day_in_week) => {
  const ret = new Date(date || new Date());
  ret.setDate(ret.getDate() + ((day_in_week - ret.getDay() + 7) % 7));
  return ret;
};
