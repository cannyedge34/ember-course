import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import fetch from 'ember-fetch/ajax';

export default Route.extend({

  authManager: service('authentication'),

  model(params) {
    return fetch(`http://api.github.com/orgs/${params.id}?access_token=0785edb6c000917ac8a4474fdd5fed38d8c1ce14`)
      .then(rawOrg => {
        const formattedRawOrg = {
          ...rawOrg,
          id: rawOrg.login.toLowerCase()
        }
        return formattedRawOrg;
    });
  },

  setupController(controller, org) {
    this._super(controller, org);
    controller.set('records', this.get('authManager.records'));
  },

  actions: {
    addToRecords(val) {
      alert(`Hi, ${val}`);
      this.get('authManager.records').addObject({id: val});
    }
  },
});
