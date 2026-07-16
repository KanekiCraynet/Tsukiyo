export const isAllowedExternalNavigation = (
  initialUrl: string,
  requestUrl: string,
): boolean => {
  try {
    const initial = new URL(initialUrl);
    const request = new URL(requestUrl);
    return (
      initial.protocol === 'https:' &&
      request.protocol === 'https:' &&
      request.hostname === initial.hostname
    );
  } catch {
    return false;
  }
};