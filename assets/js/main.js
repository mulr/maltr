
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

  console.log("Testing!");


  $("#example, body").vegas({
      slides: [
          { src: "../images/beerglass.jpg" },
          { src: "../images/beertaps.jpeg" },
          { src: "../images/manyglasses.jpg" }
      ]
  });
