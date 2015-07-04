import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('gazette', function() {
    this.route('name', {path: 'name/:id'});
  });
});

export default Router;
