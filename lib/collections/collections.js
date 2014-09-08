Toilets = new Meteor.Collection('toilets');

Toilets.allow({
  insert: function(userId, doc) {
    return true;
  },
  update: function(userId, doc) {
    return true;
  },
  remove: function(userId, doc) {
    return false;
  }
})