$(document).on('turbolinks:load', function() {
  $("#view_locations").on("click", locationsList)

  $(".test").on("click", test)

  $("body").on('click', '.location', locationShow)

  $("body").on("click", "#new_location", newLocationForm)

  $("body").on("click", "#locationCreate", makeLocation)

  $("#view_experiences").on("click", experiencesList)

  $("body").on("click", "#find", findLocationForm)

  $("body").on("click", "#find_experiences", findExperiences)

  $("body").on("click", "#comment", postComment)

  $("body").on("click", ".post", post)
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
  var name = $("#location_name").val()
  var city = $("#location_city").val()
  var state = $("#location_state").val()
  var address = $("#location_address").val()

  $.ajax({
    method: "POST",
    url: "/locations",
    data: {
      name: name,
      city: city,
      state: state,
      address: address
    },
    success: function(data) {
      // debugger;

      var location = new Location(data)
      $(".show").empty().append("<br><br>")
      $(".show").append(location.makeHtml())
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
  // debugger;

  e.preventDefault()

  var id = parseInt(this.id)

  $.ajax({
    method: "GET",
    url: `/locations/${id}`,
    success: function(data){
      // debugger
      // var info = "Name: " + data.name + "Address: "+ data.address + "City: "+ data.city + "State: " + data.state
      var string = `<p>Name: ${data.name}.</p><p> Address: ${data.address}.</p><p>City: ${data.city}.</p><p>State: ${data.state}</p>`
      $(".show").empty().append(`<br><br>`)
      $(".show").append(`<h5>Location:</h5>`).append(string)

      var experiences = document.createElement("div")

      $(experiences).attr('class', "experiences")

      $(experiences).append(`<br><br>`).append(`<h4>Experiences</h4>`)
      data.experiences.forEach(function(e) {
        var string = `<p>${e.story}<p>`
        $(experiences).append(string)
      })

      $(".show").append(experiences)

      var comments = document.createElement("div")

      $(comments).attr('class', `comments`)
      $(".show").append(`<br><br>`).append(`<h5>Comments:</h5>`)

      $(".show").append(comments)
      data.comments.forEach(function(comment) {
        $(".comments").append(comment.content).append(`<br>`)
      })

      $(".comments").append(`<br>`).append(`<input type="submit" name="comment" id="comment" value="Post New Comment" class="mini ui button" data-disable-with="Post New Comment">`)
      $(".comments").append(`<br>`).append(`<input type="submit" name="editLocation" id="${data.id}" value="Edit Location" class="mini ui button" data-disable-with="Edit Location">`)
    }
  })
}

function postComment() {
  // debugger;
  $(".post").remove()
  $(".postDiv").empty()
  var postDiv = document.createElement(`div`)
  $(postDiv).attr(`class`, `postDiv`)
  var input = document.createElement("input")
  $(postDiv).html($(input).attr(`class`, "post").attr(`type`, `text`))
  $(".comments").prepend(`<br>`).prepend(postDiv)

}

function post() {

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
      data.forEach(function(location_params){
        var location = new Location(location_params)
        $(".show").append(`<br><br>`).append(location.indexHtml())

      })

    }
  });
}


function test() {
  // alert("lakjdfs")
  // $(".home").prepend("adlkjfslf")

}
