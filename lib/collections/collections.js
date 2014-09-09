Toilets = new Meteor.Collection('toilets');

if (Meteor.isServer) {
  Toilets._ensureIndex({
    location: "2dsphere"
  });
}

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
});