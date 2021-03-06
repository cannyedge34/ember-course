import Route from '@ember/routing/route';
import { get } from '@ember/object';
import fetch from 'ember-fetch/ajax';

export default Route.extend({
  model() {
    const orgId = get(this.modelFor('org'), 'id');
    const repoId = get(this.modelFor('org.repo'), 'id');
    return fetch(`http://api.github.com/repos/${orgId}/${repoId}/issues?access_token=0785edb6c000917ac8a4474fdd5fed38d8c1ce14`).then( rawIssues =>{
      return rawIssues
    });
  },
});
