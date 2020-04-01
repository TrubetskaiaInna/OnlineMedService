import { days } from "../constants";

export const isNumberDay = appointmentDays => {
  return days.findIndex(day => day === appointmentDays);
};

export const nextWeekdayDate = (date, day_in_week) => {
  const result = new Date(date || new Date());
  result.setDate(result.getDate() + ((day_in_week - result.getDay() + 7) % 7));
  return result;
};
