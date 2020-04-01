import { isNumberDay, nextWeekdayDate } from "../AppointmentItemUtils";

test("isNumberDay func returns number of weekday of day of the week", () => {
  const oneDay = 'Monday';
  const twoDay = 'Saturday';

  expect(isNumberDay(oneDay)).toEqual(1);
  expect(isNumberDay(twoDay)).toEqual(6);
});

test("nextWeekdayDate func returns calculation nearest date of weekday ", () => {
  const oneDate = 'Wed Apr 01 2020 16:36:36 GMT+0300 (Eastern European Summer Time)';
  const twoDate = 'Wed Apr 08 2020 16:36:36 GMT+0300 (Eastern European Summer Time)';

  expect(nextWeekdayDate(oneDate , 2)).toEqual(new Date('2020-04-07T13:36:36.000Z'));
  expect(nextWeekdayDate(oneDate , 6)).toEqual(new Date('2020-04-04T13:36:36.000Z'));
  expect(nextWeekdayDate(twoDate, 2)).toEqual(new Date('2020-04-14T13:36:36.000Z'));
});
