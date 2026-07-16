import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFS from 'react-native-fs';
import {
  deleteDownloadedChapter,
  deleteDownloadedManga,
  getMangaFolderSize,
  saveChapterImagesLocally,
} from '../src/utils/storage';

const downloadsKey = '@manga_downloads';
const documentPath = '/documents';

beforeEach(async () => {
  jest.clearAllMocks();
  (RNFS as any).DocumentDirectoryPath = documentPath;
  await AsyncStorage.clear();
  (RNFS.mkdir as jest.Mock).mockResolvedValue(undefined);
  (RNFS.exists as jest.Mock).mockResolvedValue(true);
  (RNFS.unlink as jest.Mock).mockResolvedValue(undefined);
  (RNFS.readDir as jest.Mock).mockResolvedValue([]);
  (RNFS.downloadFile as jest.Mock).mockReturnValue({
    promise: Promise.resolve({statusCode: 200}),
  });
});

test('stores sourceId and deletes chapter from source-scoped path', async () => {
  await saveChapterImagesLocally(
    'manga-1',
    'Title',
    'chapter-1',
    ['https://example.com/page.jpg'],
    'source-1',
  );

  expect(JSON.parse((await AsyncStorage.getItem(downloadsKey))!)).toMatchObject({
    'manga-1': {sourceId: 'source-1'},
  });

  await deleteDownloadedChapter('manga-1', 'chapter-1');
  expect(RNFS.unlink).toHaveBeenCalledWith(
    `${documentPath}/manga/source-1/manga-1/chapter-1`,
  );
});

test('deletes manga and measures size from source-scoped path', async () => {
  await AsyncStorage.setItem(
    downloadsKey,
    JSON.stringify({'manga-1': {title: 'Title', sourceId: 'source-1'}}),
  );

  await deleteDownloadedManga('manga-1');
  expect(RNFS.unlink).toHaveBeenCalledWith(
    `${documentPath}/manga/source-1/manga-1`,
  );

  await AsyncStorage.setItem(
    downloadsKey,
    JSON.stringify({'manga-1': {title: 'Title', sourceId: 'source-1'}}),
  );
  await getMangaFolderSize('manga-1');
  expect(RNFS.readDir).toHaveBeenCalledWith(
    `${documentPath}/manga/source-1/manga-1`,
  );
});
