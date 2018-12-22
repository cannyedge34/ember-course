import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    linksToggled() {
      console.log('emitted event from child social component')
    },
    favoriteClicked(orgId) {
      console.log(`emitted event from child github-org component and received ${orgId}`)
    }
  }
});
