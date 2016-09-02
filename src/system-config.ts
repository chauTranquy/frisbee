"use strict";

// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
'ng2-bootstrap': 'vendor/ng2-bootstrap',
'angular2-notifications': 'vendor/angular2-notifications',
'@angular2-material': 'vendor/@angular2-material',
 "ng2-modal": "vendor/ng2-modal",
 'angular2-modal': 'vendor/angular2-modal'
};

/** User packages configuration. */
const packages: any = {
'ng2-bootstrap': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'ng2-bootstrap.js'
    },
    'angular2-notifications': { main: 'components.js', defaultExtension: 'js' },
    "ng2-modal": { "main": "index.js", "defaultExtension": "js" },
'angular2-modal': { "main": "index.js", defaultExtension: 'js' },
'angular2-modal/plugins/bootstrap':{ "main": "index.js", defaultExtension: 'js' }
};


const materialPkgs:string[] = [
  'core',
  'button',
  'card',
];

materialPkgs.forEach((pkg) => {
  packages[`@angular2-material/${pkg}`] = {main: `${pkg}.js`};
});

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',
  // App specific barrels.
  'app',
  'app/shared',
  'app/test',
  'app/tabs',
  'app/matchs',
  'app/equipes',
  'app/teams',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {

cliSystemConfigPackages[barrelName] = { main: 'index' };

});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
'rxjs': 'vendor/rxjs',
'ng2-bootstrap': 'vendor/ng2-bootstrap',
'moment': 'vendor/moment/min/moment-with-locales.min.js',
'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
