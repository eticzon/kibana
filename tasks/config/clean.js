module.exports = function (grunt) {
  let modules = Object.keys(grunt.config.get('deepModules'));
  return {
    build: 'build',
    target: 'target',
    testsFromModules: 'build/kibana/node_modules/**/*test*/**',
    deepModules: 'build/kibana/node_modules/*/node_modules/**/{' + modules.join(',') + '}/**'
  };
};
