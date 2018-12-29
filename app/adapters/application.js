import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.github.com',

  urlForQueryRecord(query, modelName) {
    switch(modelName) {
      case 'repo':
         return `http://api.github.com/repos/${query.orgId}/${query.repoId}?access_token=0785edb6c000917ac8a4474fdd5fed38d8c1ce14`
      default:
        return this._super(...arguments);
    }
  },

  urlForQuery (query, modelName) {
    switch(modelName) {
      case 'repo':
        return `https://api.github.com/orgs/${query.orgId}/repos`;
      default:
        return this._super(...arguments);
    }
  }
});
