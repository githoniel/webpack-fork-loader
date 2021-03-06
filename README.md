[![npm][npm]][npm-url]
[![node][node]][node-url]

<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://cdn.rawgit.com/webpack/media/e7485eb2/logo/icon.svg">
  </a>
  <h1>Fork Loader</h1>
  <h3>base on <a href="https://github.com/webpack-contrib/worker-loader">worker-loader</a></h3>
  <p>This loader registers the script as <a href="https://nodejs.org/dist/latest-v8.x/docs/api/child_process.html#child_process_child_process_fork_modulepath_args_options">fork code</a><p>
</div>


<h2 align="center">Install</h2>

```bash
npm i -D webpack-fork-loader
```

<h2 align="center"><a href="https://webpack.js.org/concepts/loaders">Usage</a></h2>

### `Inlined`

**App.js**
```js
import CProcess from 'webpack-fork-loader!./fork.js';
```

### `Config`

**webpack.config.js**
```js
{
  module: {
    rules: [
      {
        test: /\.fork\.js$/,
        use: { loader: 'webpack-fork-loader' }
      }
    ]
  }
}
```

**App.js**
```js
import CProcess from './file.fork.js';

const process = new CProcess();

process.send({ a: 1 });
process.on('message', (message) => {});
```

<h2 align="center">Options</h2>

|Name|Type|Default|Description|
|:--:|:--:|:-----:|:----------|
|[**`name`**](#name)|`{String}`|`[hash].fork.js`|Set a custom name for the output script| 
|[**`publicPath`**](#publicPath)|`{String}`|`null`|Override the path from which fork scripts are downloaded|
|[**`evalPath`**](#publicPath)|`{Boolean}`|`null`|if `publicPath` is treat as a static `String`|


### `name`

To set a custom name for the output script, use the `name` parameter. The name may contain the string `[hash]`, which will be replaced with a content dependent hash for caching purposes. When using `name` alone `[hash]` is omitted.

*webpack.config.js**
```js
{
  loader: 'webpack-fork-loader',
  options: { name: 'ForkName.[hash].js' }
}
```

### `publicPath`

Overrides the path from which fork scripts are downloaded. If not specified, the same public path used for other
webpack assets is used

**webpack.config.js**
```js
{
  loader: 'webpack-fork-loader'
  options: { publicPath: '/scripts/fork/' }
}
```

### `evalPath`

if wants to get dynamic publicPath like '__dirname', you should set `evalPath = true`

**webpack.config.js**
```js
{
  loader: 'webpack-fork-loader'
  options: {  publicPath: '__dirname + "/"', evalPath: true }
}
```

## License

#### [MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/worker-loader.svg
[npm-url]: https://npmjs.com/package/node-loader-loader

[node]: https://img.shields.io/node/v/worker-loader.svg
[node-url]: https://nodejs.org
