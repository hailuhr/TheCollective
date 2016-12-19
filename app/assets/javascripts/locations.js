$(document).on('turbolinks:load', function() {
  $("#view_locations").on("click", locationsList)

  $(".test").on("click", test)

  $("body").on('click', '.location', locationShow)

  $("body").on("click", "#new_location", newLocationForm)

  $("body").on("click", "#locationCreate", makeLocation)

  $("#view_experiences").on("click", experiencesList)

  $("body").on("click", "#find", findLocationForm)

  $("body").on("click", "#find_experiences", findExperiences)
})


function findExperiences() {
  // debugger
  var locationName = $("#location_name").val()
  var locationCity = $("#location_city").val()

  $.ajax({
    method: "GET",
    url: "/search",
    data: {
      search: locationName
    },
    success: function(data) {
      // debugger
      $(".show").empty().prepend(`<br><br>`).append(`<p><strong>Experiences Found:</strong><p>`).append(`<br>`)
      data.forEach(function(e) {
        var id = e.id
        var link = $(document.createElement("a"))
        link.attr("href", `/experiences/${id}`)
        link.attr("class", "experience")
        link.text(e.story)
        $(".show").append(link).append(`<br><br>`)
      })

    }
  })
}


function findLocationForm(e) {
  e.preventDefault()
  // debugger
  $(".show").empty().prepend(`<br><br>`)


  $(".show").append(`<div class="ui small form"><label for="location_name"><strong>Find Experience By Location:</strong></label><br><br>
      Location Name<br><input type="text" name="search" id="location_name" /><br>
      <label for="location_city">Location City</label><br>
      <input type="text" name="search" id="location_city" /><br><br>
      <input type="submit" class="ui button" id="find_experiences" value="Find Experiences" data-disable-with="Find Experiences"/></div>`)

}




function experiencesList(e){
  e.preventDefault()

  $.ajax({
    method: "GET",
    url: "/experiences",
    success: function(data){
      // debugger
      var experiences = $(document.createElement("div"))
      experiences.attr("class", "experiences")

      $(".show").empty().prepend("<br><br>")
      $(".show").append(experiences)

      data.forEach(function(e){
        var id = e.id
        // var string = `<p>${e.story}<p>`
        var link = $(document.createElement("a"))
        link.attr('href', `/experiences/${id}`)
        link.attr('class', `experience`)
        link.attr('id', `${id}`)
        link.text(e.story)


        $(".experiences").append(link).append(`<p>`)
      })

    }
  });

}





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
      $(".show").empty().append("<br><br>")
      $(".show").append(location)
    }
  })

}

function newLocationForm(e) {
  e.preventDefault()
  // debugger;
    $(".show").empty().prepend(`<br><br>`)


    $(".show").append(`<div class="ui small form"><label for="location_name">Name</label><br>
        <input type="text" name="location[name]" id="location_name" /><br><br>
        <label for="location_city">City</label><br>
        <input type="text" name="location[city]" id="location_city" /><br><br>
        <label for="location_state">State</label><br>
        <input type="text" name="location[state]" id="location_state" /><br><br>
        <label for="location_address">Address</label><br>
        <input type="text" name="location[address]" id="location_address" /><br><br>
        <input type="submit" id="locationCreate" class="ui button" value="Create Location" data-disable-with="Create Location"/><div>`)

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
      $(".show").empty().append(`<br><br>`)
      $(".show").append(string)
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
