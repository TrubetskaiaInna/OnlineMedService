import { isWeekend } from "../DataUtils";

test("isWeekend func returns weekend on weekdays", () => {
  const oneResponse = {
    data: {
      schedule: [
        {
          day: "Thursday"
        },
        {
          day: "Monday"
        },
        {
          day: "Sunday"
        }
      ]
    }
  };

  const twoResponse = {
    data: {
      schedule: [
        {
          day: "Thursday"
        },
        {
          day: "Wednesday"
        },
        {
          day: "Friday"
        },
        {
          day: "Tuesday"
        }
      ]
    }
  };

  expect(isWeekend(oneResponse)).toEqual({ weekend: [2, 3, 5, 6] });
  expect(isWeekend(twoResponse)).toEqual({ weekend: [0, 1, 6] });
});
