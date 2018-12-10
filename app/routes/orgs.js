import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {id: "google"},
      {id: "apple"},
      {id: "microsoft"},
      {id: "yahoo"},
      {id: "netflix"},
      {id: "facebook"}
    ];
  }
});
