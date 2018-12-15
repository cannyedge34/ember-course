import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

  favorites: service('favorites'),

  actions: {
    favoriteClicked(org) {
      this.get('favorites').favoriteItem(org)
    }
  },

  model() {
    
    return new Promise((resolve, reject) => {
      Ember.run.later(() => {
        resolve([
          {id: "google"},
          {id: "apple"},
          {id: "microsoft"},
          {id: "yahoo"},
          {id: "netflix"},
          {id: "facebook"}
        ]);
      }, 3000);
    });
  }
});
