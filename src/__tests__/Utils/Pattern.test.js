import { regName, regPassword, regPhone, regEmail } from "../../utils/Pattern";

test("regName with correct data", () => {
  const firstName = 'Ivan';
  const secondName = '11&_@';
  const thirdName = '123@ukr.com';
  const fourthName = 'Ivan555';
  expect(regName(firstName)).toEqual(true);
  expect(regName(secondName)).toEqual(false);
  expect(regName(thirdName)).toEqual(false);
  expect(regName(fourthName)).toEqual(true);
});

test("regPassword with correct data", () => {
  const firstPassword = '111';
  const secondPassword = '11&_@';
  const thirdPassword = '%111111111';
  const fourthPassword = 'Ivan555555';
  expect(regPassword(firstPassword)).toEqual(false);
  expect(regPassword(secondPassword)).toEqual(false);
  expect(regPassword(thirdPassword)).toEqual(false);
  expect(regPassword(fourthPassword)).toEqual(true);
});

test("regPhone with correct data", () => {
  const firstPhone = '111';
  const secondPhone = '1111111111111';
  const thirdPhone = '+123456789101';
  const fourthPhone = 'aa1111111111';
  const fifthPhone = '+a1111111111';
  expect(regPhone(firstPhone)).toEqual(false);
  expect(regPhone(secondPhone)).toEqual(false);
  expect(regPhone(thirdPhone)).toEqual(true);
  expect(regPhone(fourthPhone)).toEqual(false);
  expect(regPhone(firstPhone)).toEqual(false);
});

test("regEmail with correct data", () => {
  const firstEmail = '111';
  const secondEmail = '@111';
  const thirdEmail = '111@';
  const fourthEmail = '111@dd';
  const fifthEmail = 'aa@11.';
  const sixEmail = 'aa@11.v';
  const sevenEmail = 'aaaaaa@111111.v';
  const eightEmail = 'aaa@1111.vv';
  const nineEmail = 'aaaaa@1ad.vv4';
  const tenEmail = 'aaaaa@1ad.vvgf';
  const elevenEmail = 'aaaaa@1ad.vvgfdd';
  expect(regEmail(firstEmail)).toEqual(false);
  expect(regEmail(secondEmail)).toEqual(false);
  expect(regEmail(thirdEmail)).toEqual(false);
  expect(regEmail(fourthEmail)).toEqual(false);
  expect(regEmail(firstEmail)).toEqual(false);
  expect(regEmail(sixEmail)).toEqual(false);
  expect(regEmail(sevenEmail)).toEqual(false);
  expect(regEmail(eightEmail)).toEqual(true);
  expect(regEmail(nineEmail)).toEqual(false);
  expect(regEmail(tenEmail)).toEqual(true);
  expect(regEmail(elevenEmail)).toEqual(false);
});
