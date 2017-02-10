$(document).on('turbolinks:load', function() {

  $("body").on("click", "#find", findLocationForm)

  $("#view_locations").on("click", locationsList)

  $("body").on('click', '.location', locationShow)

  // $("body").on("click", "#new_location", newLocationForm)

  $("body").on("click", "#locationCreate", makeLocation)

  $("#view_experiences").on("click", experiencesList)

  $("body").on("click", "#button", findExperiences)

  $("body").on("click", "#comment", postComment)

  $("body").on("click", ".post", post)

  // $("body").on("click", "#edit", editPage)

  $("body").on("click", "#my_experiences", myExperiences)
})


function myExperiences(e){
  e.preventDefault()

  $.ajax({
    method: "GET",
    url: "/user_experiences",
    success: function(data) {
      data.forEach(info => {
        var experience = new Experience(info)
        $(".show").append(experience.makeHtml())
      })
    }
  })
}




function findExperiences() {
  // var locationName = $("#location_name").val()
  var locationCity = $("#location_city").val()


  $.ajax({
    method: "GET",
    url: "/search",
    data: {
      search: locationCity
    },
    success: function(data) {
      $(".searchDiv").empty()
      // $(".show").empty().prepend(`<br><br>`).append(`<p><strong>Experiences Found:</strong><p>`).append(`<br>`)
      var searchDiv = $(document.createElement("div"))

      searchDiv.attr("class", "searchDiv")


      if (data == "No experiences found") {
        $(".show").append($(searchDiv).append(`<br>No Experiences Found At This Location`))
      } else {
        $(".show").append($(searchDiv).append(`<br><h5><u>Experiences Found:</u></h5><br>`))

        data.forEach(function(e) {
          var id = e.id
          var link = $(document.createElement("a"))
          link.attr("href", `/experiences/${id}`)
          link.attr("class", "experience")
          link.text(e.story)
          $(searchDiv).append(link).append(`<br><br>`)
          $(".show").append(searchDiv)
        })

      }

    }
  })
}


function findLocationForm(e) {
  // debugger
  e.preventDefault()

   $("#google").remove()

    $(".show").remove()
    var showDiv = document.createElement(`div`);
    $(showDiv).attr(`class`, "show").append(`<br><br><div class="i">
      <label for="location_name"><p>Find Experience By Location:</p><br></label></div><div class="ui transparent icon input"><br>
      <input type="text" id="location_city" placeholder="Search..." id="find_experiences">
      <div class="button" id="button"><i class="search icon" id="button"><p></p></div></i>
      </div>`)

        $(".pusher").append(showDiv)

}




function experiencesList(e){
  e.preventDefault()
  $("#google").remove()


  $(".show").remove()
  var showDiv = document.createElement(`div`);
  $(showDiv).attr(`class`, "show").append(`<br><br>`)
  $(".home_page").append(showDiv)

  $.ajax({
    method: "GET",
    url: "/experiences",
    success: function(data){
      // debugger
      var experiences = $(document.createElement("div"))
      experiences.attr("class", "experiences")

      $(".show").empty().prepend("<br><br>").append(`<h4>All Experiences</h4>`)
      $(".show").append(experiences)

      data.forEach(function(e){
        var id = e.id
        // var string = `<p>${e.story}<p>`
        var link = $(document.createElement("a"))
        link.attr('href', `/experiences/${id}`)
        link.attr('class', `experience`)
        link.attr('id', `${id}`)
        link.text(e.story)


        $(".experiences").append(link).append(`<br>`)
        // make experience object
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

  // debugger;
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
  $("#google").remove()

    $(".show").empty()
    var showDiv = document.createElement(`div`);
    $(showDiv).attr(`class`, "show").append(`<br><br>`)
    $(".home_page").append(showDiv)

    $(".show").append(`<div class="ui small form"><h5>New Location</h5><label for="location_name"><strong>Name</strong></label><br>
        <input type="text" class="location_class" name="location[name]" id="location_name" /><br><br>

        <label for="location_city"><strong>City</strong></label><br>
        <input type="text" name="location[city]" id="location_city" /><br><br>

        <label for="location_state"><strong>Country</strong></label><br>
        <input type="text" name="location[country]" id="location_country" /><br><br>

        <label for="location_address"><strong>Address</strong></label><br>
        <input type="text" name="location[address]" id="location_address" /><br><br>

        <label for="location_address"><strong>Zipcode</strong></label><br>
        <input type="text" name="location[zipcode]" id="location_zipcode" /><br><br>

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
      var dataId = data.id
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


      $(".comments").append(`<br>`).append(`<div class="mini ui basic buttons">
        <div class="ui button" id="comment">Comment</div>
        <div class="ui button" id="location" onclick="window.location.href='/locations/${data}'">Edit Location</div>
      </div>`)

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
  $("#google").remove()

  $(".show").remove()
  var showDiv = document.createElement(`div`);
  $(showDiv).attr(`class`, "show").append(`<br><br>`)
  $(".home_page").append(showDiv)

  $.ajax({
    method: "GET",
    url: "/locations",
    success: function(data){
      $(".show").empty()
      $(".show").prepend("<br><br>").append(`<h4>All Locations</h4>`)
      data.forEach(function(location_params){
        var location = new Location(location_params)
        $(".show").append(location.indexHtml()).append(`<br>`)

      })

    }
  });
}
