var angular = require('angular');

module.exports = angular.module('env', [])
    .constant( 'API', {
        hostUrl: 'http://localhost:3000/api/v1'
    })
    .name;
