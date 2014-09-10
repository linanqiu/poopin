function getLocation() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      Session.set('location', position);
    });
  } else {
    console.log("Geolocation not supported");
  }
}

getLocation();