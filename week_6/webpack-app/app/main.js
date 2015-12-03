
import component from './component.js';

document.body.appendChild(component());

import controller from './controllers.js';

angular

  .module('main', [])

  .controller('mainController', controller);

import angular from  'angular';
import appModule from './app';

// load the main app file
var appModule = require('../index');
// replaces ng-app="appName"
angular.element(document).ready(function () {
  angular.bootstrap(document, [appModule.name], {
    //strictDi: true
  });
});
