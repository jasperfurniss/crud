import Ember from 'ember';

export default Ember.Controller.extend({
  sortBy: ['updatedAt:desc'],
  sortedGroups: Ember.computed.sort('model', 'sortBy')
});
