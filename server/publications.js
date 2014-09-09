Meteor.publish("toilets", function(coordinates) {
  var toiletsFound = Toilets.find({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: coordinates
        }
      }
    }
  }, {limit: 1000});

  return toiletsFound;
});