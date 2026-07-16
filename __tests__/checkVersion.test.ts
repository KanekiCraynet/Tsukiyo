import {isVersionNewer} from '../src/utils/checkVersion';

test.each([
  ['1.2.3', '1.2.2', true],
  ['1.10.0', '1.9.0', true],
  ['2.0.0', '1.99.99', true],
  ['1.2.2', '1.2.2', false],
  ['1.2.1', '1.2.2', false],
])('isVersionNewer(%s, %s) returns %s', (latest, current, expected) => {
  expect(isVersionNewer(latest, current)).toBe(expected);
});
