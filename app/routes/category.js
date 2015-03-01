import Ember from 'ember';

var CategoryRoute = Ember.Route.extend({
  actions: {
    delete: function(groups) {
      var id = groups.objectId;
      Ember.$.ajax("https://api.parse.com/1/classes/groups/" + id, {
        type: 'DELETE'
      });
      this.modelFor('category').removeObject(groups);
    }
  },

    model: function() {
      return Ember.$.ajax('https://api.parse.com/1/classes/groups').then(function(response){
        console.log(response.results);
        return response.results;
    });
  }
});

export default CategoryRoute;
