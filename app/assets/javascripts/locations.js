$(function() {
  // alert('ready');
  $("#view_locations").on("click", locationsList)

  $(".test").on("click", test)
})


function locationsList(e) {
  e.preventDefault()
  $.ajax({
    method: "GET",
    url: "/locations",
    success: function(data){
      // debugger;

      $(".list").append("<br>")
      //
      data.forEach(function(e){
        var id = e.id
        var link = $(document.createElement("a"))

        link.attr('href', `/locations/${id}`)
        link.attr('class', `locationId`)
        link.attr('value', "link")
        link.attr('id', `${id}`)
        link.text(e.name)
        $(".list").append(link)
        $(".list").append("<br>")

        // $(".list").append(data)
      })

    }
  });
}


function test() {
  alert("lakjdfs")
  $(".home").prepend("adlkjfslf")

}
