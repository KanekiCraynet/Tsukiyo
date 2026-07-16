## Release process

Release builds are handled entirely by **GitHub Actions**.  You only need to:

1.  Bump version in `package.json`, `android/app/build.gradle`, and iOS files (see README).
2.  Tag and push:
    ```
    git tag v1.2.3
    git push origin v1.2.3
    ```
    Or dispatch manually:
    ```
    gh workflow run release.yml --repo KanekiCraynet/Tsukiyo -f tag=v1.2.3
    ```

The workflow builds, signs, verifies, and publishes APK + AAB to GitHub Releases.

## Local debug build

```
npx react-native bundle --platform android --dev false \
  --entry-file index.js \
  --bundle-output android/app/src/main/assets/index.android.bundle \
  --assets-dest android/app/src/main/res
cd android && bash gradlew assembleDebug
```

## Keystore

The production release keystore is stored at `~/.config/tsukiyo-release/`.
**Backup this entire folder securely.** Without it, existing installations cannot be upgraded.