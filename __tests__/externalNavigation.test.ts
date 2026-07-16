import {isAllowedExternalNavigation} from '../src/utils/externalNavigation';

test.each([
  ['https://reader.example/chapter/1', 'https://reader.example/page/2', true],
  ['https://reader.example/chapter/1', 'https://reader.example:443/page/2', true],
  ['https://reader.example/chapter/1', 'https://evil.example/page/2', false],
  ['https://reader.example/chapter/1', 'http://reader.example/page/2', false],
  ['https://reader.example/chapter/1', 'javascript:alert(1)', false],
  ['https://reader.example/chapter/1', 'file:///etc/passwd', false],
  ['http://reader.example/chapter/1', 'http://reader.example/page/2', false],
])(
  'external navigation from %s to %s returns %s',
  (initial, request, expected) => {
    expect(isAllowedExternalNavigation(initial, request)).toBe(expected);
  },
);
