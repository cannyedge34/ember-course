import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | social-info', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{social-info}}`);

    assert.equal(this.element.textContent.trim(), `Github:
      
      
      
    
  


    Close`);

    // Template block usage:
    await render(hbs`
      {{#social-info}}
      {{/social-info}}
    `);

    assert.equal(this.element.textContent.trim(), `Github:
      
      
      
    
  


    Close`);
  });
});
