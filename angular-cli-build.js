// Angular-CLI build configuration
// This file lists all the node_modules files that will be used in a build
// Also see https://github.com/angular/angular-cli/wiki/3rd-party-libs

/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/**/*.+(js|js.map)',
      'es6-shim/es6-shim.js',
      'reflect-metadata/**/*.+(ts|js|js.map)',
      'rxjs/**/*.+(js|js.map)',
      '@angular/**/*.+(js|js.map)',
      'ng2-bootstrap/**/*.js',
      'moment/min/moment-with-locales.min.js',
      'bootstrap/dist/**/*.*',
      'font-awesome/fonts/*.*',
      'font-awesome/css/font-awesome.min.css',
      'angular2-notifications/components.js',
      'angular2-notifications/**/*.js',
      '@angular2-material/**/*',
      'angular2-modal/**/*.js'
      

    ]
  });
};
