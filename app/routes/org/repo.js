import Route from '@ember/routing/route';
import { get } from '@ember/object';
import fetch from 'ember-fetch/ajax';

export default Route.extend({
  model(params) {
    const orgId = get(this.modelFor('org'), 'id');
    const repoId = params.repoid
    return fetch(`http://api.github.com/repos/${orgId}/${repoId}?access_token=0785edb6c000917ac8a4474fdd5fed38d8c1ce14`)
      .then(rawRepo => {
        const formattedRawRepo = {
          ...rawRepo,
          id: rawRepo.name.toLowerCase()
        }
        return formattedRawRepo;
    });
  },
});
