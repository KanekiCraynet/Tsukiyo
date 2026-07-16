# Changelog

All notable changes will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and versioning follows package.json.

## [Unreleased]

### Added
- Extension system (not working completely for the moment)

### Changed
- Info screen redesign.
- Webtoon reader changes.
- New app version modal now takes to the latest release.

## [1.2.2] — 2026-07-16

### Added
- Signed production release pipeline via GitHub Actions.
- ProGuard + resource shrinking enabled for release builds.
- CHANGELOG.md (this file).

### Changed
- Fork: project config migrated from hxpe-dev to KanekiCraynet.
- Version sync across Android (1.2.2 build 4) and iOS (1.2.2 build 4).
- Release process is now CI-only: tag push or workflow dispatch.

### Fixed
- jest.config.js transformIgnorePatterns for @react-navigation.
- jest.setup.js mock for 14 native modules.
- SourcesScreen hardcoded test URL removed.
- ExplorerScreen missing styles.
- ESLint `jest not defined` env config.
- Gradle release build now fails early without keystore.properties.

### CI/CD
- check.yml — lint, typecheck, test on push/PR.
- build.yml — debug APK + unsigned iOS simulator on tag/manual.
- release.yml — signed APK + AAB → GitHub Release with SHA-256.

[Unreleased]: https://github.com/KanekiCraynet/Tsukiyo/compare/v1.2.2...HEAD
[1.2.2]: https://github.com/KanekiCraynet/Tsukiyo/releases/tag/v1.2.2
