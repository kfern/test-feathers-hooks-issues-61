const assert = require('assert');
const app = require('../../src/app');

describe('\'service-test-61\' service', () => {
  it('registered the service', () => {
    const service = app.service('service-test-61');

    assert.ok(service, 'Registered the service');
  });
});
