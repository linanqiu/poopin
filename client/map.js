Template.map.rendered = function() {
  var mapOptions = {
    center: new google.maps.LatLng(40.8075, -73.9619),
    zoom: 18
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);

  Tracker.autorun(function() {
    var position = Session.get('location');

    if (position) {
      var center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      map.panTo(center);
      addMarkers(map, [position.coords.longitude, position.coords.latitude]);
    }
  });
}

function addMarkers(map, coordinates) {
  var nearToilets = Toilets.find({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: coordinates
        }
      }
    }
  }, {
    limit: 20
  }).fetch();

  nearToilets.forEach(function(elem, i, array) {
    var toiletItem = elem;
    var toiletLatLong = new google.maps.LatLng(toiletItem['location']['coordinates'][1], toiletItem['location']['coordinates'][0]);

    var marker = new google.maps.Marker({
      position: toiletLatLong,
      map: map,
      title: toiletItem['building']
    });

    var contentString = toiletItem['building'] + " F" + toiletItem['floor'] + "<br>" + calculateAverageRolls(toiletItem) + " Rolls" + "<br>" + toiletItem['directions'];

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });
  });
}

function calculateAverageRolls(toilet) {

  var rollsAverage = 0;

  for (var i = 0; i < toilet.reviews.length; i++) {
    rollsAverage += toilet.reviews[i].rolls;
  }

  rollsAverage = rollsAverage / toilet.reviews.length;

  return rollsAverage.toFixed(2);
}