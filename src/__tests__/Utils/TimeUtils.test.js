import { calculationWeekend, calculationDate, calculationDay } from "../../utils/TimeUtils";

test("calculationWeekend func returns array of weekends", () => {
  const firstData = [1, 2];
  const secondData = [3, 6];

  expect(calculationWeekend(firstData)).toEqual(["Monday", "Tuesday"]);
  expect(calculationWeekend(secondData)).toContain("Wednesday");
  expect(calculationWeekend(secondData)).not.toContain("Friday");
});

test("calculationDay func returns weekday", () => {
  const date = new Date(2020,3,6)
  expect(calculationDay(date)).toEqual("Monday");
});

test("calculationDate func returns date 15 minutes ago (GMT)", () => {
  const element = {
    day: "Wednesday",
    doctor: 2,
    enabled: true,
    endTime: "10:30",
    id: 57,
    startTime: "10:00"
  };

  const date = {
    getFullYear: jest.fn(() => {return 2020}),
    getMonth: jest.fn(() => { return 3}),
    getDate: jest.fn(() => {return 1})
  };
  expect(calculationDate(element, date)).toEqual(new Date('2020-04-01T06:45:00.000Z'));
});
