// $.getScript("https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.min.js").done(()=>{
//   // alert("got it")
//   $.turbo.isReady(function() {
//     alert("got it")
//
//   $('.ui.sidebar')
//     .sidebar({
//       context: $('.bottom.segment')
//     })
//     .sidebar('attach events', '.sidemenu.item');
//
//   })
//
//
// })


$.getScript("https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.min.js").done(()=>{

  $(function () {

      alert("got it")

      $('.ui.sidebar')
        .sidebar({
          context: $('.bottom.segment')
        })
        .sidebar('attach events', '.sidemenu.item');

    });


})
