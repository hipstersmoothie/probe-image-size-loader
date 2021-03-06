[![CircleCI](https://img.shields.io/circleci/project/github/hipstersmoothie/probe-image-size-loader.svg?style=for-the-badge)](https://circleci.com/gh/hipstersmoothie/probe-image-size-loader)
[![Codecov branch](https://img.shields.io/codecov/c/github/hipstersmoothie/probe-image-size-loader/master.svg?style=for-the-badge)](https://github.com/hipstersmoothie/probe-image-size-loader)
[![npm](https://img.shields.io/npm/v/probe-image-size-loader.svg?style=for-the-badge)](https://www.npmjs.com/package/probe-image-size-loader)
[![npm](https://img.shields.io/npm/dt/probe-image-size-loader.svg?style=for-the-badge)](https://www.npmjs.com/package/probe-image-size-loader)

<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://cdn.rawgit.com/webpack/media/e7485eb2/logo/icon.svg">
  </a>
  <h1>Probe-Image-Size Loader</h1>
  <p>Uses <a href="https://github.com/nodeca/probe-image-size">probe-image-size</a> to inject the height and width into image imports.</p>
</div>

## Install

```bash
yarn add -D probe-image-size-loader
```

## Usage

Can also be used with [lqip-loader](https://github.com/zouhir/lqip-loader).

**webpack.config.js**

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.png$/,
        use: ['probe-image-size-loader', 'file-loader']
      }
    ]
  }
};
```

**Output**

```javascript
module.exports = {
  src: __dirname + 'some/path/to/image.png',
  height: 100,
  width: 200
};
```

**Usage in JS files**

```javascript
import image from './image.png';

const Image = () => (
  <img src={image.src} height={image.height} width={image.width} />
);
```

### Example

```
$ cd example
$ yarn
$ yarn build
$ node dist/main.js

{
  src: 'cb12bc24511449db821768715e85b0d9.gif',
  height: 208,
  width: 220
}
```
