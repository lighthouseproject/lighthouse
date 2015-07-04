import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr(),
  fulltext: DS.attr(),
  subject: DS.attr(),
  title: DS.attr(),  
});
