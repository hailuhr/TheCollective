$(document).on('turbolinks:load', function() {
  // alert('ready');
  $("#view_locations").on("click", locationsList)

  $(".test").on("click", test)


  $("body").on('click', '.location', locationShow)


  $("body").on("click", "#new_location", newLocationForm)

  $("body").on("click", "#locationCreate", makeLocation)
})



function newLocationForm(e) {
  e.preventDefault()
  // debugger;
    $(".show").prepend(`<br>`)
    $(".show").prepend(`<br>`)
    $(".show").prepend(`<p></p>`)
    $(".show").prepend(`<p></p>`)


    $(".show").html(`<label for="location_name">Name</label><br>
        <input type="text" name="location[name]" id="location_name" /><br>
        <label for="location_city">City</label><br>
        <input type="text" name="location[city]" id="location_city" /><br>
        <label for="location_state">State</label><br>
        <input type="text" name="location[state]" id="location_state" /><br>
        <label for="location_address">Address</label><br>
        <input type="text" name="location[address]" id="location_address" /><br><br>
        <input type="submit" id="locationCreate" value="Create Location" data-disable-with="Create Location"/>`)

}



function locationShow(e) {
  e.preventDefault()

  var id = parseInt(this.id)
  debugger

  $.ajax({
    method: "GET",
    url: `/locations/${id}`,
    success: function(data){
      debugger
      var info = "Name: " + data.name + "Address: "+ data.address + "City: "+ data.city + "State: " + data.state

      $(".show").text(info)

      data.comments.forEach(function(comment) {
        // debugger
        $(".comment").append("<br>")
        $(".comment").append(comment.content)
      })
    }
  })
}


function locationsList(e) {
  e.preventDefault()
  // debugger;

  $.ajax({
    method: "GET",
    url: "/locations",
    success: function(data){
      // debugger;
      $(".show").empty()
      $(".show").prepend("<br><br>")
      data.forEach(function(e){
        var id = e.id
        var link = $(document.createElement("a"))

        link.attr('href', `/locations/${id}`)
        link.attr('class', `location`)
        link.attr('value', "link")
        link.attr('id', `${id}`)
        link.text(e.name)
        $(".show").append(link)
        $(".show").append("<br>")

        // $(".list").append(data)
      })

    }
  });
}


function test() {
  // alert("lakjdfs")
  // $(".home").prepend("adlkjfslf")

}
