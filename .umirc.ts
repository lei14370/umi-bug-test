import { defineConfig } from '@umijs/max';
const APP_VERSION = require('./package.json').version;
import routes from './routes';
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  hash: true,
  initialState: {},
  // request: {},
  cssLoaderModules: {
    // 配置驼峰式使用
    exportLocalsConvention: 'camelCase',
  },
  layout: {
    title: '前端日志系统',
    locale: false,
  },
  mfsu: false,
  define: {
    BASIC_STORAGE: 'web-log-collection-front@',
    APP_VERSION,
  },
  routes,
  npmClient: 'yarn',
  devtool: 'source-map',
  proxy: {
    '/api': {
      // 要代理的地址
      target: 'http://127.0.0.1:7001',
      // 配置了这个可以从 http 代理到 https
      // 依赖 origin 的功能可能需要这个，比如 cookie
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
