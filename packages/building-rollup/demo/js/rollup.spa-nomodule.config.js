const merge = require('deepmerge');
const { createSpaConfig } = require('../../index.js');

const baseConfig = createSpaConfig({
  developmentMode: false,
  injectServiceWorker: true,
  legacyBuild: true,
});

module.exports = merge(baseConfig, {
  input: 'demo/js/index.html',
});
