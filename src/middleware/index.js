module.exports = function () {
  // Add your custom middleware here. Remember, that
  // in Express the order matters, `notFound` and
  // the error handler have to go last.
  const app = this; // eslint-disable-line no-unused-vars
  
  app.use(function(req, res, next) { // eslint-disable-line no-unused-vars
    //console.log(req.feathers);//undefined
    req.feathers.data = 'Hello world';
    next();
  });
  
};
