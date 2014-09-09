Meteor.methods({
  addToilet: function(coordinates, building, floor, directions, poops) {
    Toilets.insert({
      location: {
        type: "Point",
        coordinates: coordinates
      },
      building: building,
      floor: floor,
      directions: directions,
      reviews: [],
      poops: poops
    });
  },

  addReview: function(toiletId, review) {
    Toilets.update({
      _id: toiletId
    }, {
      $push: {
        reviews: review
      }
    });
  },

  findNearToilets: function(coordinates, maxDistance) {
    var toiletsFound = Toilets.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: coordinates
          },
          $maxDistance: maxDistance
        }
      }
    }).fetch();

    return toiletsFound;
  }
})