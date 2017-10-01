





  console.log("Main.js is working");

//   $('#dcategory li').click(function(){
//     var x = $(this).text();
//     $('input').val(x); //Give proper class
// })

  $(".dropdown-item").on('click', function() {
    // event.preventDefault();
    // console.log("this function was called");
    var locName = $(this).text();

    // console.log(locName);


});

  //DM - Need see why this doesn't work? This should replace script on index.html
  $("#example, body").vegas({
      slides: [
          { src: "./assets/images/beerglass.jpg" },
          { src: "./assets/images/beertaps.jpeg" },
          { src: "./assets/images/manyglasses.jpg" }
      ]
  });




  // $( "#autocomplete" ).autocomplete({
  //   source: [ "Ten10", "Orange Blossom Brewing Co.", "Dead Lizard" ]
  // });
  // var images=new Array('assets/images/beerglass.jpg','assets/images/beertaps.jpg','assets/images/manyglasses.jpg');
  // var nextimage=0;
  // doSlideshow();

  // function doSlideshow(){
  //     if(nextimage>=images.length){nextimage=0;}
  //     $('.container')
  //     .css('background-image','url("'+images[nextimage++]+'")')
  //     .fadeIn(500,function(){
  //         setTimeout(doSlideshow,1000);
  //     });
  // }
