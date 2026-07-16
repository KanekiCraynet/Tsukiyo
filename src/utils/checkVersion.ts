import DeviceInfo from 'react-native-device-info';

async function getLatestVersion(): Promise<string | null> {
  try {
    const response = await fetch(
      'https://api.github.com/repos/KanekiCraynet/Tsukiyo/releases/latest',
    );
    const data = await response.json();
    return data.tag_name; // assumes version is stored in tag like "v1.0.0"
  } catch (error) {
    console.warn('Failed to fetch latest version:', error);
    return null;
  }
}

// Compare two semver strings (x.y.z). Returns true if the first is strictly newer than the second.
export const isVersionNewer = (latest: string, current: string): boolean => {
  const a = latest.split('.').map(Number);
  const b = current.split('.').map(Number);
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const an = a[i] ?? 0;
    const bn = b[i] ?? 0;
    if (an !== bn) {
      return an > bn;
    }
  }
  return false;
};

export const checkForUpdate = async (): Promise<boolean> => {
  const currentVersion = DeviceInfo.getVersion(); // e.g., "1.0.0"
  const latestVersion = await getLatestVersion(); // e.g., "v1.1.0"
  if (!latestVersion) {
    return false;
  }

  const cleanLatest = latestVersion.replace(/^v/, '');
  return isVersionNewer(cleanLatest, currentVersion);
};
