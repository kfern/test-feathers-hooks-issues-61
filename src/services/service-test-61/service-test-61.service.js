// Initializes the `service-test-61` service on path `/service-test-61`
const createService = require('feathers-memory');
const hooks = require('./service-test-61.hooks');
const filters = require('./service-test-61.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    name: 'service-test-61',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/service-test-61', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('service-test-61');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
