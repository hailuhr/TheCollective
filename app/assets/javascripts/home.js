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


    //
    //     var handler = Gmaps.build('Google');
    //     handler.buildMap({ internal: {id: 'map'}}, function(){
    //       var markers = handler.addMarkers([
    //         { lat: 43, lng: 3.5},
    //         { lat: 45, lng: 4},
    //         { lat: 47, lng: 3.5},
    //         { lat: 49, lng: 4},
    //         { lat: 51, lng: 3.5}
    //       ]);
    //     handler.bounds.extendWith(markers);
    //     handler.fitMapToBounds();
    // });
});
