const middlewareTest61 = require('./middleware-test-61');
module.exports = function () {
  // Add your custom middleware here. Remember, that
  // in Express the order matters
  const app = this; // eslint-disable-line no-unused-vars
  app.use(middlewareTest61());
};
