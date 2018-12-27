import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

  favorites: service('favorites'),

  model() {
    
    return new Promise((resolve) => {
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
