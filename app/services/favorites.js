import Service from '@ember/service';

export default Service.extend({
  init() {
    this._super(...arguments);
    this.items = [];
  },

  favoriteItem(item) {
    this.get('items').addObject(item);
    console.log(this.get('items').map(i => i.id ).join(', ')); /* eslint-disable-line no-console */
  }
});
