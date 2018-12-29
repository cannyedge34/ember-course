import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { renameNumber } from '../../../helpers/rename-number'

module('Integration | Helper | rename-number', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    assert.equal(renameNumber(), '', 'An empty number');

    assert.equal(renameNumber([23]), '23', 'A number < 1000');
    assert.equal(renameNumber([3264]), '3.3K', 'A number > 1000');
  });
});
