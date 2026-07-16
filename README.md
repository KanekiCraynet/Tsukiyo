<p align="center">
  <h2>Because of MangaDex's DMCA issues, the project will undergo a major new update enabling custom extensions.<h2/>
</p>
<p align="center">
    <img src="./assets/banner.png" width="100%">
</p>
<p align="center">
  <a href="https://github.com/KanekiCraynet/Tsukiyo/releases"><img src="https://img.shields.io/github/downloads/KanekiCraynet/Tsukiyo/total?color=%233DDC84&logo=android&logoColor=%23fff&style=for-the-badge"></a>
  <a href="https://github.com/KanekiCraynet/Tsukiyo/releases"><img src="https://img.shields.io/github/v/release/KanekiCraynet/Tsukiyo?style=for-the-badge&logo=github"></a>
  <a href="https://www.codefactor.io/repository/github/KanekiCraynet/tsukiyo"><img src="https://img.shields.io/codefactor/grade/github/KanekiCraynet/Tsukiyo?style=for-the-badge&logo=codefactor"></a>
  <a href="https://github.com/KanekiCraynet/Tsukiyo/commits"><img src="https://img.shields.io/github/last-commit/KanekiCraynet/Tsukiyo?style=for-the-badge&logo=github"></a>
</p>

# **Tsukiyo 🌙**

Tsukiyo is a manga reading app using the [mangadex api](https://api.mangadex.org/).

> **Tsukiyo (月夜; Tsuki-yo)** literally means "moonlit night" in Japanese — a serene and poetic image of the moon casting its glow across the darkness.

⚠️ **Note:** This app is primarily tested on Android. It has **not been tested on iOS**, and behavior on Apple devices is **not guaranteed**. If anyone is able to test building and running it on iOS, **feedback would be greatly appreciated**.

## Terms of Use
By downloading, installing, or using this application, you agree to the following terms:
- Use the application in compliance with all applicable laws.
- Do not use the application to infringe on copyrighted content.
- The developer is not responsible for user actions or content accessed through the app.

## Features
- **Read manga** from the Mangadex API
- **Webtoon support** for a diverse reading experience
- **Track your reading progress** across multiple manga/webtoons
- **Receive notifications** for new chapters
- **Download manga** for offline reading anytime, anywhere.
- **Explore manga easily** with intuitive navigation and search
- **Dark mode support** for an interface to your liking
- **Night mode support** for comfortable reading in low light or at night

## Install (for android)
1. Visit the latest [release page](https://github.com/KanekiCraynet/Tsukiyo/releases/latest).
2. Download the `.apk` file.
3. Open the file to install the app (you may need to grant permission to install apps from unknown sources).

> **Note:** The `.aab` file is for Google Play only. For direct sideload, use the `.apk`.

## Build & Release

Releases are produced automatically by GitHub Actions. No local Android SDK required.

### Prerequisites (one-time)
- Android production keystore uploaded to repo Secrets (`ANDROID_KEYSTORE_BASE64`, `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS`, `ANDROID_KEY_PASSWORD`).
- `package.json` version must match the intended release version.

### Trigger a release
**Option A — tag push:**
```
git tag v1.2.3
git push origin v1.2.3
```
**Option B — manual dispatch:**
```
gh workflow run release.yml --repo KanekiCraynet/Tsukiyo -f tag=v1.2.3
```

The `Release Android APK` workflow will:
1. Run lint, typecheck, and tests.
2. Decode the keystore from Secrets and sign the build.
3. Build a signed universal APK and AAB.
4. Verify the APK signature with apksigner.
5. Attach APK, AAB, and SHA-256 checksums to a GitHub Release.

### Version bump checklist
Before tagging, update all version fields consistently:
- `package.json` → `version`
- `android/app/build.gradle` → `versionCode` (increment), `versionName`
- `ios/Tsukiyo/Info.plist` → `CFBundleShortVersionString`, `CFBundleVersion`
- `ios/Tsukiyo.xcodeproj/project.pbxproj` → `MARKETING_VERSION`, `CURRENT_PROJECT_VERSION`

The workflow fails if the tag version does not match `package.json`.

### Local debug build (optional)
```
npx react-native bundle --platform android --dev false \
  --entry-file index.js \
  --bundle-output android/app/src/main/assets/index.android.bundle \
  --assets-dest android/app/src/main/res
cd android && bash gradlew assembleDebug
```

## CI/CD

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| `check.yml` | push / PR to `main` | Lint, typecheck, unit tests |
| `build.yml` | tag `v*`, manual | Android debug APK + iOS simulator app (artifacts only) |
| `release.yml` | tag `v*`, manual | Signed production APK + AAB → GitHub Release |

### 🚀 STAR THIS REPOSITORY TO SUPPORT THE DEVELOPER AND ENCOURAGE THE DEVELOPMENT OF THE APPLICATION!

## Want to Contribute? 🤝
We're open to contributions of all kinds! Whether it's bug reports, new features, or improvements to documentation, your help is welcome. 
Feel free to submit pull requests, create issues, or share your suggestions. Whatever you have to offer, we can use!

## Todo
- [ ] Auto clean-up chapter files once two chapters ahead from a downloaded chapter (goal: save phone storage).
- [ ] Upgrade reader capacities (image manipulation, chapters select...).
- [ ] Upgrade explorer page.
- [ ] Enhance info screen chapters selection (some mangas have multiple version of the same chapter --> example: solo leveling).
- [ ] Enhance new chapters verification to keep with the chapters specifications.
- [ ] Advanced search system.
- [ ] Vertical card animations not working.
- [x] Fix reader issues (continue reading from last page not working).
- [x] Night mode schedule.
- [x] Offline mode (kinda, need upgrades but technically implemented).
- [x] Manual Night mode.
- [x] Ability to download mangas in advance (not only the lazy loading).
- [x] New version check at the start of the app.
- [x] Fix low quality webtoon images.
- [x] Basic notification system for new chapters.

## VISITORS
<img src="https://count.getloli.com/@KanekiCraynet:tsukiyo?name=visitors&theme=moebooru&padding=7&offset=0&align=center&scale=1&pixelated=1&darkmode=auto" alt="visitors" />

## LICENSE 📜
Tsukiyo is licensed under the MIT License (MIT). More info can be found [here](LICENSE.md).

## Upcoming version changelog (version estimation: v2.0.0 MAJOR UDPATE)
This is the changelog for the upcoming app release. These changes are not included in the current latest release but have already been committed to GitHub and will be part of the next release.
### Added
- Extension system (not working completely for the moment)

### Changed
- Info screen redesign.
- Webtoon reader changes.
- New app version modal now takes to the latest release.

### Fixed
- 

### Misc
- 