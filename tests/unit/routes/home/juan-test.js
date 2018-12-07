import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | home/juan', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:home/juan');
    assert.ok(route);
  });
});
