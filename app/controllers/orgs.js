import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    linksToggled() {
      console.log('emitted event from child social component')
    },
    favoriteClicked(orgId) {
      // Receiving orgId from github-org child component
      console.log(`current favorite clicked ${orgId}`);
    }
  }
});
