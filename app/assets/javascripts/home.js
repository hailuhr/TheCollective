
$(document).on('turbolinks:load', function() {


      if(document.querySelector('#google')){

        // debugger;

        $.ajax({
          method: "GET",
          url: "/locations/geocode",
          success: function(data) {
            $("#map").empty()
            var handler = Gmaps.build('Google');
            handler.buildMap({ internal: {id: 'map'}}, function(){
            var markers = handler.addMarkers(data);
            handler.bounds.extendWith(markers);
            handler.fitMapToBounds();


          })
      }



    });
  }


});
