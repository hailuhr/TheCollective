$(function() {
  // alert('ready');
  $("#view_locations").on("click", locationsList)

  $(".test").on("click", test)
})


function locationsList(e) {
  e.preventDefault()
  $.ajax({
    method: "GET",
    url: "/"
  })
}


function test() {
  alert("lakjdfs")
  $(".home").prepend("adlkjfslf")

}
