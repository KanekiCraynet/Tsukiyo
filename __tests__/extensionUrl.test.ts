import {toRawGitHubUrl} from '../src/utils/extensionUrl';

test.each([
  [
    'https://github.com/user/repo/blob/main/ext.js',
    'https://raw.githubusercontent.com/user/repo/main/ext.js',
  ],
  [
    'https://raw.githubusercontent.com/user/repo/main/ext.js',
    'https://raw.githubusercontent.com/user/repo/main/ext.js',
  ],
  ['  https://github.com/u/r/blob/main/e.js  ', 'https://raw.githubusercontent.com/u/r/main/e.js'],
])('accepts GitHub .js url %s', (input, expected) => {
  expect(toRawGitHubUrl(input)).toBe(expected);
});

test.each([
  ['http://github.com/u/r/blob/main/e.js'], // not https
  ['https://evil.com/u/r/blob/main/e.js'], // wrong host
  ['https://github.com/u/r/blob/main/e.txt'], // not .js
  ['https://raw.githubusercontent.com/u/r/main/e.exe'], // not .js
  ['javascript:alert(1)'],
  ['file:///etc/passwd'],
  ['https://github.com.evil.com/u/r/blob/main/e.js'], // host suffix trick
  [''],
])('rejects untrusted url %s', input => {
  expect(() => toRawGitHubUrl(input)).toThrow();
});
