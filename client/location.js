function getLocation() {
  if(navigator.geolocation) {
    var watchID = navigator.geolocation.watchPosition(function(position) {
      Session.set('location', position);
      console.log(position.coords);
    });
  } else {
    console.log("Geolocation not supported");
  }
}

getLocation();