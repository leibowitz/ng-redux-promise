import promiseMiddleware from './promise';

export default angular.module('ngRedux.promise', [])
  .provider('ngReduxPromise', function(){
    return {
      $get: function(){},
      promiseMiddleware: promiseMiddleware
    };
  })
  .name;
