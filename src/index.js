import promiseMiddleware from './promise';

export default angular.module('ngRedux.promise', [])
  .factory('ngReduxPromise', promiseMiddleware)
  .name;
