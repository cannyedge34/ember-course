import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    linksToggled() {
      console.log('emitted event from child social component')
    },
    favoriteClicked(org) {
      console.log(org.id)
      console.log('emitted event from child github-org component')
    }
  }
});
