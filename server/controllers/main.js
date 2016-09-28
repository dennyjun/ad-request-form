var user = require('./user.js');
module.exports = (() => {
  var controllers = [
    user
  ];
  var router = {};
  controllers.forEach((controller) => {
    router[controller.path] = controller.router;
  });
  return router;
})();