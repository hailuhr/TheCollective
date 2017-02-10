$(document).on('turbolinks:load', function() {

  //  $.ajax to '/locations'
  //  .then( response => {
  //     // let markerData = response.locations.map( loc => {lat: loc.lat, lng: loc.lng})
  //     debugger;
  //     handler.buildMap({ internal: {id: 'map'}}, function(){
  //       // var markers = handler.addMarkers(markerData);
  //       var markers = handler.addMarkers(markers);
  //     handler.bounds.extendWith(markers);
  //     handler.fitMapToBounds();
  // });
  // })


      $.ajax({
        method: "GET",
        url: "/locations/geocode",
        success: function(data) {
          // debugger;
          var handler = Gmaps.build('Google');
          handler.buildMap({ internal: {id: 'map'}}, function(){
            // var markers = handler.addMarkers(markerData);
          var markers = handler.addMarkers(data);
          handler.bounds.extendWith(markers);
          handler.fitMapToBounds();
        })

      }
    });


});
