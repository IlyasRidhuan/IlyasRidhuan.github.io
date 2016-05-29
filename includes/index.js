$(document).ready(function(){
      $('.parallax').parallax();
});

var option = [
    {selector: '#staggered-work', offset: 400, callback:function(){
        Materialize.showStaggeredList("#staggered-work");
    }}
]
Materialize.scrollFire(option);
