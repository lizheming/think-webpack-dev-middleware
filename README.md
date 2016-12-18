# think-webpack-dev-middleware
webpack dev middleware for ThinkJS

## Installation

```
$ npm install think-webpack-dev-middleware
```

## How To Use in ThinkJS 2.x

1. add hook in `src/common/config/hook.js`

    ```
    export default {
      resource: ['webpack-dev']
    }
    ```

2. add hook middleware in `src/common/bootstrap/middleware.js`

    ```
    import webpackDevMiddleware from 'think-webpack-dev-middleware';
    import webpack from 'webpack';
    import config from '../../../webpack.config.js';

    const compiler = webpack(config);

    think.middleware('webpack-dev', responseMiddleware(
      compiler,
      {
        stat: { color: true }
      }
    ));
    ```

## Advanced Configuration

  See [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware#usage) to find more usage.

## License

[GPL-3.0](LICENSE)