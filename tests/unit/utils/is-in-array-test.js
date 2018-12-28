import isInArray from 'github-ui/utils/is-in-array';
import { module, test } from 'qunit';
import EmberObject from '@ember/object';

module('Unit | Utility | is-in-array', function(hooks) {

  // Replace this with your real tests.
  test('it works', async function(assert) {

    const Type = EmberObject.extend({
      item: 5,
      list: [1,2,3],
      isItemInList: isInArray('item', 'list')
    });

    const obj = Type.create()

    assert.equal(obj.get('isItemInList'), false, 'It is not in list');

    obj.get('list').addObject(5);

    assert.equal(obj.get('isItemInList'), true, 'It is in list' );
  
    obj.set('item', 32);

    assert.equal(obj.get('isItemInList'), false, 'After adding new item, is not in the list anymore');
  });
});
