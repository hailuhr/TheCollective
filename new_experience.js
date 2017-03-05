$("#new_experience").on("click", newExperience)


function newExperience(e){
  e.preventDefault()

  $(".show").empty()

  $.ajax({
    method: "GET",
    url: "/locations",
    success: function(data){
      var objects = data
      // debugger
      $(".show").html(
      `<label for="experience">Experience</label><br>
          <textarea name="experience[story]" id="location_name" /><br>
          <label for="location_city">City</label><br>
          <input type="text" name="location[city]" id="location_city" /><br>
          <label for="location_state">State</label><br>
          <input type="text" name="location[state]" id="location_state" /><br>
          <label for="location_address">Address</label><br>
          <input type="text" name="location[address]" id="location_address" /><br>

          Location:
              <select name="experience[location_id]" id="experience_location_id"><option value="${objects}"></option></select><br><br>
          <input type="submit" id="experienceCreate" value="Share Experience" data-disable-with="Share Experience"/>`)
    }
  })

}
