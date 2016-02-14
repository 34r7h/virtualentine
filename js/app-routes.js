'use strict';

(function () {
  'use strict';

  angular.module('vday').config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
})();
//# sourceMappingURL=app-routes.js.map
