import NetInfo from '@react-native-community/netinfo';

export let showRestartWarning: boolean = false;

export const setShowRestartWarning = (val: boolean): void => {
  showRestartWarning = val;
};

export let isConnected: boolean = false;

let unsubNetInfo: (() => void) | null = null;

export const updateNetworkStatus = (): void => {
  if (unsubNetInfo) {
    unsubNetInfo();
  }
  unsubNetInfo = NetInfo.addEventListener(state => {
    isConnected = !!state.isConnected;
  });
};
