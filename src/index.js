import promiseMiddleware from './promise';

export default angular.module('ngRedux.promise', [])
  .provider('ngReduxPromise', function(){
    return {
      promiseMiddleware: promiseMiddleware
    };
  })
  .name;
