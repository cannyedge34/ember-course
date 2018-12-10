import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // LIST OF COMPANIES
  this.route('orgs'); // /orgs
  
  // INDIVIDUAL ORG
  this.route('org', {path: 'org/:id'}, function() { // /org/facebook
    
    //LIST OF REPOS
    this.route('repos');

    // INDIVIDUAL REPO
    this.route('repo', {path: ':repoid'}, function() {
      this.route('issues');
      this.route('contributors');
    }); // org/facebook/react
  });
  this.route('notfound', {path: '*path'});
});

export default Router;
