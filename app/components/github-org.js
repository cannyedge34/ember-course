import Component from '@ember/component';
import isInArray from 'github-ui/utils/is-in-array';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: 'li',
  favorites: service('favorites'),
  isFavorited: isInArray('organization', 'favorites.items'),
  actions: {
    favoriteWasClicked() {
      // this organization is caught from github-org.hbs file
      // we're gonna send its id to parent component "orgs" like an argument of clicked method
      const organization = this.get('organization');
      const favorites = this.get('favorites');

      // we're adding/remove organization to favorites array
      if (!favorites.items.includes(organization)) {
        this.get('favorites').favoriteItem(organization)
      } else {
        this.get('favorites').unfavoriteItem(organization)
      }

      this.clicked(organization);
    }
  }
});
