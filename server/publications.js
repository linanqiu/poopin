Meteor.publish("toilets", function() {
  return Toilets.find();
})