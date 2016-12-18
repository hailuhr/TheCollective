$(document).on('turbolinks:load', function() {
  $("#view_locations").on("click", locationsList)

  $(".test").on("click", test)


  $("body").on('click', '.location', locationShow)


  $("body").on("click", "#new_location", newLocationForm)

  $("body").on("click", "#locationCreate", makeLocation)
})

function makeLocation(e){
  e.preventDefault()
  // debugger;
  var name = $("#location_name").val()
  var city = $("#location_city").val()
  var state = $("#location_state").val()
  var address = $("#location_address").val()
  // debugger

  $.ajax({
    method: "POST",
    url: "/locations",
    data: {
      name: `${name}`,
      city: `${city}`,
      state: `${state}`,
      address: `${address}`
    },
    success: function(data) {
      var location = `<p>Name: ${data.name}.</p><p> Address: ${data.address}.</p><p>City: ${data.city}.</p><p>State: ${data.state}</p>`
      $(".show").html(location)
    }
  })

}

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

  $.ajax({
    method: "GET",
    url: `/locations/${id}`,
    success: function(data){
      // var info = "Name: " + data.name + "Address: "+ data.address + "City: "+ data.city + "State: " + data.state
      var string = `<p>Name: ${data.name}.</p><p> Address: ${data.address}.</p><p>City: ${data.city}.</p><p>State: ${data.state}</p>`

      $(".show").html(string)
      var comments = document.createElement("div")

      $(comments).attr('class', `comments`)
      $(".show").append(comments)
      data.comments.forEach(function(comment) {
        $(".comments").append("<br>")
        $(".comments").append(comment.content)
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
