import Component from '@ember/component';

export default Component.extend({
  tagName: 'li',

  actions: {
    favoriteWasClicked() {
      // this organization is caught from github-org.hbs file
      const organization = this.get('organization');
      // we're gonna send its id to parent component "orgs" like an argument of clicked method
      this.clicked(organization);
    }
  }
});
