<p align="center">
  <img src="./assets/banner.png" width="100%" alt="Tsukiyo banner">
</p>

<p align="center">
  <a href="https://github.com/KanekiCraynet/Tsukiyo/releases"><img src="https://img.shields.io/github/downloads/KanekiCraynet/Tsukiyo/total?color=%233DDC84&logo=android&logoColor=%23fff&style=for-the-badge" alt="Downloads"></a>
  <a href="https://github.com/KanekiCraynet/Tsukiyo/releases"><img src="https://img.shields.io/github/v/release/KanekiCraynet/Tsukiyo?style=for-the-badge&logo=github" alt="Latest release"></a>
  <a href="https://github.com/KanekiCraynet/Tsukiyo/actions/workflows/check.yml"><img src="https://img.shields.io/github/actions/workflow/status/KanekiCraynet/Tsukiyo/check.yml?branch=main&style=for-the-badge&logo=githubactions&label=CI" alt="CI status"></a>
  <a href="https://github.com/KanekiCraynet/Tsukiyo/commits"><img src="https://img.shields.io/github/last-commit/KanekiCraynet/Tsukiyo?style=for-the-badge&logo=github" alt="Last commit"></a>
</p>

# Tsukiyo 🌙

Tsukiyo is a manga reader built with React Native and the [MangaDex API](https://api.mangadex.org/).

> **Tsukiyo (月夜; Tsuki-yo)** means “moonlit night” in Japanese.

> Android is the primary supported platform. iOS remains experimental and is not included in production releases.

## Features

- Manga and webtoon reader
- Reading progress tracking
- Offline chapter downloads
- New chapter notifications
- Search and discovery
- Dark mode and scheduled night mode
- Custom extension system (work in progress)

## Install on Android

1. Open the [latest release](https://github.com/KanekiCraynet/Tsukiyo/releases/latest).
2. Download `Tsukiyo-<version>.apk`.
3. Open the APK and allow installation from unknown sources if Android asks.

The APK is signed and verified by the release workflow. The `.aab` file is for Google Play and is not intended for direct installation.

## Project status

See [CHANGELOG.md](CHANGELOG.md) for released and upcoming changes.

### Roadmap

- [ ] Auto-clean downloaded chapter files.
- [ ] Improve reader image controls and chapter selection.
- [ ] Improve explorer page.
- [ ] Handle multiple releases of the same chapter.
- [ ] Improve new chapter detection.
- [ ] Add advanced search.
- [ ] Fix vertical card animations.

## Development

Requires Node.js 18 or newer.

```bash
npm install
npm start
npm run android
```

Quality checks:

```bash
npm run lint
npx tsc --noEmit
npm run test
```

Build, signing, CI/CD, and release instructions live in [DEV-NOTES.md](DEV-NOTES.md).

## Contributing

Bug reports, feature requests, documentation fixes, and pull requests are welcome through [GitHub Issues](https://github.com/KanekiCraynet/Tsukiyo/issues).

Before submitting a pull request, run lint, typecheck, and tests.

## Terms of use

By downloading, installing, or using this application, you agree to:

- Follow applicable laws.
- Not use the application to infringe copyright.
- Accept responsibility for content accessed through the application.

The maintainers are not responsible for user actions or third-party content.

## Visitors

<img src="https://count.getloli.com/@KanekiCraynet:tsukiyo?name=visitors&theme=moebooru&padding=7&offset=0&align=center&scale=1&pixelated=1&darkmode=auto" alt="Visitor counter">

## License

Licensed under the [MIT License](LICENSE.md).

<p align="center"><strong>Star this repository to support development.</strong></p>
