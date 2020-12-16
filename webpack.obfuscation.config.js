const WebpackObfuscator = require('webpack-obfuscator');

const ObfuscationPlugin = new WebpackObfuscator ({
  // see https://github.com/javascript-obfuscator/javascript-obfuscator for configuration options
  compact: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.5,
  deadCodeInjection: true,
  deadCodeInjectionThreshold: 0.3,
  debugProtection: true,
  debugProtectionInterval: true,
  disableConsoleOutput: true,
  identifierNamesGenerator: 'hexadecimal',
  log: false,
  numbersToExpressions: true,
  rotateStringArray: true,
  shuffleStringArray: true,
  selfDefending: true,
  simplify: false,
  splitStrings: true,
  stringArray: true,
})

module.exports = ObfuscationPlugin;
