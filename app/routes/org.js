import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

  authManager: service('authentication'),

  setupController(controller) {
    this._super(controller);
    controller.set('records', this.get('authManager.records'));
  },

  actions: {
    addToRecords(val) {
      alert(`Hi, ${val}`);
      this.get('authManager.records').addObject({id: val});
    }
  }
});
