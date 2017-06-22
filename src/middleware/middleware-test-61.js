module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function middlewareTest61(req, res, next) { // eslint-disable-line no-unused-vars
    console.log('middleware-test-61 middleware is running');  // eslint-disable-line no-console
    req.feathers.message = 'Hello world';
    next();
  };
};
