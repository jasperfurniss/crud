import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createItem: function(newTitle, newBody) {
      var self = this;
      var data = {title: newTitle, body: newBody};
      Ember.$.ajax("https://api.parse.com/1/classes/groups/", {
        type: 'POST',
        data: JSON.stringify(data),
        success: function (response) {
        data = Ember.$.extend({}, data, response);
        }
      }).done(function(){
        self.modelFor('category').addObject(data);
        self.transitionTo('category');
      });
    }
  },

});
