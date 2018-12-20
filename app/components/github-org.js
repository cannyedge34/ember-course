import Component from '@ember/component';

export default Component.extend({
  tagName: 'li',

  actions: {
    favoriteWasClicked() {
      this.clicked();
    }
  }
});
