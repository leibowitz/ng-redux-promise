'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('./promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('ngRedux.promise', []).provider('ngReduxPromise', function () {
  return {
    $get: function $get() {},
    promiseMiddleware: _promise2.default
  };
}).name;
module.exports = exports['default'];