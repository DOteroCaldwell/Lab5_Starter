// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isPhoneNumber returns true for phone number with dashes', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber returns true for phone number with parentheses and space', () => {
  expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber returns false for phone number with letters', () => {
  expect(functions.isPhoneNumber('415-553-5X9A')).toBe(false);
});

test('isPhoneNumber returns false for phone number with 5 digits', () => {
  expect(functions.isPhoneNumber('12345')).toBe(false);
});

test('isEmail returns true for very short email', () => {
  expect(functions.isEmail('a@b.co')).toBe(true);
});

test('isEmail reutrns true for email with periods in name', () => {
  expect(functions.isEmail('john.doe.three@gmail.com')).toBe(true);
});

test('isEmail returns false for emails with no @ symbol', () => {
  expect(functions.isEmail('dont@me@website.com')).toBe(false);
});

test('isEmail return false for emails with no . after the @ symbol', () => {
  expect(functions.isEmail('backwards.com@gmail')).toBe(false);
});

test('isStrongPassword returns true for strong passwords with no special symbols', () => {
  expect(functions.isStrongPassword('afmewio24miof')).toBe(true);
});

test('isStrongPassword reutrns true for strong passwords with underscores', () => {
  expect(functions.isStrongPassword('this_has_3_und')).toBe(true);
});

test('isStrongPassword returns false for very short passwords', () => {
  expect(functions.isStrongPassword('abc')).toBe(false);
});

test('isStrongPassword returns false passwords that do not start with a letter', () => {
  expect(functions.isStrongPassword('1jior23io32mka')).toBe(false);
});

test('isDate returs true for valid ISO formatted dates', () => {
  expect(functions.isDate('1969-12-25')).toBe(true);
});

test('isDate reutrns true for valid leap year dates', () => {
  expect(functions.isDate('2000-02-29')).toBe(true);
});

test('isDate returns false for days of short months that do not exist', () => {
  expect(functions.isDate('1999-11-31')).toBe(true);
});

test('isDate returns false for invalid leap year dates', () => {
  expect(functions.isDate('1900-02-29')).toBe(true);
});

test('isHexColor returns true for valid 6 digit hex code', () => {
  expect(functions.isHexColor('#ff00ff')).toBe(true);
});

test('isHexColor returns true for valid 3 digit hex code', () => {
  expect(fucntions.isHexColor('#b58')).toBe(true);
});

test('isHexColor returns false for 4 digit hex codes', () => {
  expect(functions.isHexColor('#ffff')).toBe(false);
});

test('isHexColor returns false for codes with non-hex values', () => {
  expect(functions.isHexColor('#fr00hh')).toBe(false);
});
