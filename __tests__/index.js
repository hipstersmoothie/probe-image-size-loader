import fs from 'fs';
import probe from 'probe-image-size';

import probeImageSize from '../src';

test('probeImageSize - no loaders previous', () => {
  const buffer = Buffer.from(
    `module.exports = __webpack_public_path__ + 'some/path/to/image.png';`
  );

  jest.spyOn(fs, 'readFileSync').mockImplementationOnce(() => {});
  jest.spyOn(probe, 'sync').mockImplementationOnce(() => ({
    height: 100,
    width: 200
  }));

  expect(probeImageSize.bind({ resourcePath: '/' })(buffer)).toMatchSnapshot();
});
