export const toRawGitHubUrl = (input: string): string => {
  const url = new URL(input.trim());
  if (url.protocol !== 'https:') {
    throw new Error('Extension URL must use HTTPS.');
  }

  if (url.hostname === 'github.com') {
    const parts = url.pathname.split('/').filter(Boolean);
    if (parts.length < 5 || parts[2] !== 'blob') {
      throw new Error('Use a GitHub file URL.');
    }
    url.hostname = 'raw.githubusercontent.com';
    parts.splice(2, 1);
    url.pathname = `/${parts.join('/')}`;
  } else if (url.hostname !== 'raw.githubusercontent.com') {
    throw new Error('Only GitHub-hosted extensions are allowed.');
  }

  if (!url.pathname.endsWith('.js')) {
    throw new Error('Extension must be a JavaScript file.');
  }

  return url.toString();
};
