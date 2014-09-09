Tracker.autorun(function() {
  var location = Session.get('location');
  if (!!location) {
    Meteor.subscribe('toilets', [location.coords.longitude, location.coords.latitude]);

  } else {
    Meteor.subscribe('toilets', [-73.9619, 40.8075]);
  }
});