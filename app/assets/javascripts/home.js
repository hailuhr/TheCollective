
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


// var latLng = new google.maps.LatLng(53, -1.33);
//
// var map = new google.maps.Map(document.getElementById('map_canvas'), {
//     center: latLng,
//     draggable: false,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//     scrollwheel: false,
//     zoom: 14
// });
//
// var marker = new google.maps.Marker({
//     animation: google.maps.Animation.DROP,
//     icon: 'images/pin.png',
//     map: map,
//     position: latLng
// });
