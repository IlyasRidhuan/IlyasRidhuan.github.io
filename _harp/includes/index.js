$(document).ready(function(){
      $('.parallax').parallax();
      $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
     $('.scrollspy').scrollSpy();
     $('.toc-wrapper').pushpin({ top: $('.toc-wrapper').offset().top });

});

var option = [
    {selector: '#staggered-work1', offset: 50, callback:function(){
        Materialize.showStaggeredList("#staggered-work1");
    }},
    {selector: '#staggered-work2', offset: 50,callback:function(){
        Materialize.showStaggeredList("#staggered-work2")
    }},
    {selector: '#staggered-work3', offset: 50,callback:function(){
        Materialize.showStaggeredList("#staggered-work3")
    }},
    {selector: '#staggered-education1', offset: 50,callback:function(){
        Materialize.showStaggeredList("#staggered-education1")
    }},
    {selector: '#staggered-awards1', offset: 100,callback:function(){
        Materialize.showStaggeredList("#staggered-awards1")
    }},
    {selector: '#staggered-awards2', offset: 120,callback:function(){
        Materialize.showStaggeredList("#staggered-awards2")
    }},
    {selector: '#staggered-awards3', offset: 140,callback:function(){
        Materialize.showStaggeredList("#staggered-awards3")
    }},
    {selector: '#staggered-contacts1',offset: 50, callback:function(){
        Materialize.showStaggeredList('#staggered-contacts1')
    }}
]
Materialize.scrollFire(option);
