// Mock all native modules used by Tsukiyo

// @react-native-async-storage/async-storage
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

// @react-native-community/netinfo
jest.mock('@react-native-community/netinfo', () => ({
  fetch: jest.fn(() => Promise.resolve({isConnected: true})),
  addEventListener: jest.fn(() => jest.fn()),
}));

// react-native-device-info
jest.mock('react-native-device-info', () => ({
  getVersion: jest.fn(() => '1.0.0'),
  getBuildNumber: jest.fn(() => '1'),
}));

// react-native-fs
jest.mock('react-native-fs', () => ({
  DocumentDirectoryPath: '/mock/documents',
  CachesDirectoryPath: '/mock/cache',
  readDir: jest.fn(() => Promise.resolve([])),
  readFile: jest.fn(() => Promise.resolve('')),
  writeFile: jest.fn(() => Promise.resolve()),
  unlink: jest.fn(() => Promise.resolve()),
  exists: jest.fn(() => Promise.resolve(false)),
  mkdir: jest.fn(() => Promise.resolve()),
  downloadFile: jest.fn(() => ({
    promise: Promise.resolve({statusCode: 200}),
  })),
}));

// @notifee/react-native
jest.mock('@notifee/react-native', () => ({
  createChannel: jest.fn(() => Promise.resolve()),
  displayNotification: jest.fn(() => Promise.resolve()),
  getTriggerNotificationIds: jest.fn(() => Promise.resolve([])),
  cancelTriggerNotifications: jest.fn(() => Promise.resolve()),
  AndroidImportance: {HIGH: 5, DEFAULT: 3, LOW: 2, NONE: 0},
  EventType: {DELIVERED: 0, PRESSED: 1, DISMISSED: 2},
}));

// react-native-vector-icons
jest.mock('react-native-vector-icons/Feather', () => 'Icon');

// react-native-background-fetch
jest.mock('react-native-background-fetch', () => ({
  configure: jest.fn((_config, onEvent, onFailure) => {
    onFailure && onFailure(new Error('Background fetch not configured in test'));
    return Promise.resolve();
  }),
  finish: jest.fn(),
  status: jest.fn(() => Promise.resolve(2)),
}));

// react-native-safe-area-context
jest.mock('react-native-safe-area-context', () => ({
  ...jest.requireActual('react-native-safe-area-context'),
  initialWindowMetrics: {
    frame: {width: 390, height: 844, x: 0, y: 0},
    insets: {top: 0, right: 0, bottom: 0, left: 0},
  },
  useSafeAreaInsets: jest.fn(() => ({top: 0, right: 0, bottom: 0, left: 0})),
  useSafeAreaFrame: jest.fn(() => ({x: 0, y: 0, width: 390, height: 844})),
}));

// react-native-linear-gradient
jest.mock('react-native-linear-gradient', () => 'LinearGradient');

// react-native-webview
jest.mock('react-native-webview', () => {
  const {View} = require('react-native');
  return {WebView: View};
});

// react-native-share
jest.mock('react-native-share', () => ({
  default: {open: jest.fn(() => Promise.resolve())},
  open: jest.fn(() => Promise.resolve()),
}));

// @openspacelabs/react-native-zoomable-view
jest.mock('@openspacelabs/react-native-zoomable-view', () => ({
  ReactNativeZoomableView: ({children}) => children,
}));

// @react-native-community/image-editor
jest.mock('@react-native-community/image-editor', () => ({
  cropImage: jest.fn(() => Promise.resolve({uri: 'mock://cropped'})),
}));

// react-native-image-size (patched local package)
jest.mock('react-native-image-size', () => ({
  getSize: jest.fn(() => Promise.resolve({width: 100, height: 100})),
}));

// react-native-screens
jest.mock('react-native-screens', () => {
  const React = require('react');
  const render = ({children}) => React.createElement(React.Fragment, null, children);
  const Comp = () => null;
  return {
    enableScreens: jest.fn(),
    screensEnabled: jest.fn(() => false),
    Screen: Comp,
    ScreenContainer: render,
    ScreenStack: Comp,
    ScreenStackItem: Comp,
    ScreenStackHeaderConfig: Comp,
    ScreenStackHeaderSubview: Comp,
    ScreenStackHeaderSearchBarView: Comp,
    ScreenFooter: Comp,
    SearchBar: Comp,
    useScreenAnimationConfig: () => undefined,
    useReanimatedHeaderHeight: () => undefined,
  };
});

// react-native-dropdown-picker
jest.mock('react-native-dropdown-picker', () => {
  const {View} = require('react-native');
  return {
    default: View,
  };
});
