const hypernova = require('hypernova/server');
const glob = require('glob');

const entries = glob.sync('./dist/js/components/**/*.js').reduce((acc, libPath) => {
  const entry = libPath.match(/([^/]+)(?=\.\w+$)/)[0];
  acc[entry] = libPath;
  return acc;
}, {});

hypernova({
  devMode: true,
  getComponent: hypernova.createGetComponent(entries),
  port: 3030,
});
