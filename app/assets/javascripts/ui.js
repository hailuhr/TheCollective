$(document).on('turbolinks:load', function() {
  $.getScript("https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.min.js").done(()=>{

    $(function () {
      // alert("got it")
      $('.ui.sidebar')
      .sidebar({
        context: $('.bottom.segment')
      })
      .sidebar('attach events', '.sidemenu.item');
    });
  })
});
