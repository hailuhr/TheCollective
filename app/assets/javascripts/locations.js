$(function() {
  // alert('ready');
  $("#view_locations").on("click", locationsList)

  $(".test").on("click", test)


  $('body').on('click', '.location', locationShow)
})


function locationShow(e) {
  e.preventDefault()

  var id = parseInt(this.id)
  $.ajax({
    method: "GET",
    url: `/locations/${id}`,
    success: function(data){
      // debugger
      var info = data.name + data.address + data.city + data.stated

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
  $.ajax({
    method: "GET",
    url: "/locations",
    success: function(data){
      // debugger;

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
