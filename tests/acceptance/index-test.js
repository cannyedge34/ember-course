import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /index', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/orgs', 'at orgs route');

    await click('a[href*="/org/google"]');

    assert.equal(currentURL(), '/org/google/repos', 'at repos page');
  
    await click('a[href*="/org/google/upb/issues"]');

    assert.equal(currentURL(), '/org/google/upb/issues', 'at issues page');
    assert.ok('.issues li'.length > 0, 'something issues');

    // await click('a[href*="/org/google/upb/contributors"]');
    // assert.equal(currentURL(), '/org/google/upb/contributors', 'at contributtors page');
    // assert.ok('.contributors li'.length > 0, 'something contributors');
  });
});
