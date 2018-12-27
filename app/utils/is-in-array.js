import { computed } from '@ember/object';

export default function isInArray(itemKey, listKey) {
  return computed(itemKey, `${listKey}.[]`, function() {
    // Do computation
    const item = this.get(itemKey);
    const list = this.get(listKey);
    return list.includes(item);
  })
}
