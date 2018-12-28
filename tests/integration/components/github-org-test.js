import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | github-org', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{github-org}}`);

    assert.equal(this.element.textContent.trim(), `Favorite`, 'Inline syntax, basic rendering');

    // Template block usage:
    await render(hbs`
      {{#github-org}}
        Favorite
      {{/github-org}}
    `);

    assert.equal(this.element.textContent.trim(), `Favorite`, 'Block syntax, basic rendering');
  });

  test('binding update data', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    assert.expect(3);

    const org = EmberObject.extend({
      id: 'my-org',
      favorites: {
        items: []
      }
    });

    const obj = org.create();

    this.set('org', obj);

    // this way is correct too;
    // this.set('org', {id: 'my-org'});

    await render(hbs`{{github-org organization=org}}`);
    assert.equal($('.github-org a').text(), 'my-org');

    obj.set('id', 'other');

    await render(hbs`{{github-org organization=org}}`);
    assert.equal($('.github-org a').text(), 'other');
 
    await click('.github-org span');
    assert.equal($('.github-org span').text().replace(/\s+/g, ''), 'UnFavorite');
  });
});
