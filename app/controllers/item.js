import Ember from 'ember';

var ItemController = Ember.Controller.extend({
  isEditing: true,
  actions: {

  editItem: function() {
   this.set('isEditing', false);
 },

  save: function(item){
    var id = item.objectId;
    Ember.$.ajax("https://api.parse.com/1/classes/groups/" + id, {
      type: 'PUT',
      data: JSON.stringify(item)

    });
    this.set('isEditing', true);
  }
},

});

export default ItemController;
