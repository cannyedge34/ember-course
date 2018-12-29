import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model(params) {
    const orgId = get(this.modelFor('org'), 'id');
    return this.store.queryRecord('repo', {
      orgId,
      repoId: params.repoid
    });
  },
});
