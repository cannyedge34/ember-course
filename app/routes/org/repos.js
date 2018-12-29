import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model() {
    const orgId = get(this.modelFor('org'), 'id');
    return this.store.query('repo', {orgId});
  },
});
