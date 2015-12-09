var angular = require('angular');

module.exports = angular.module('env', [])
    .constant( 'API', {
        version: 'v1',
        hostUrl: 'http://localhost:3000/api/v1/'
    })
    .name;
