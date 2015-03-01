import Ember from 'ember';

export function initialize(/* container, application */) {
  Ember.$.ajaxSetup({
    headers: {
      "X-Parse-Application-Id": "HU6zuEEhgCCl6RpJHzhekLNZZNjx0anRZjLjYeze",
      "X-Parse-REST-API-Key": "JhwXUkliAuQ7hVbBKtqFQueIZkoXkfg9ir3PS9G7"
    }
  });
}

export default {
  name: 'parse',
  initialize: initialize
};
