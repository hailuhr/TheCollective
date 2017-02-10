$(document).on('turbolinks:load', function() {

      $.ajax({
        method: "GET",
        url: "/locations/geocode",
        success: function(data) {
          var handler = Gmaps.build('Google');
          handler.buildMap({ internal: {id: 'map'}}, function(){
          var markers = handler.addMarkers(data);
          handler.bounds.extendWith(markers);
          handler.fitMapToBounds();
        })

      }
    });


});
