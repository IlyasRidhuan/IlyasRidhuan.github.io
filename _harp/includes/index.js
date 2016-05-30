$(document).ready(function(){
      $('.parallax').parallax();
      $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
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
    {selector: '#staggered-awards2', offset: 100,callback:function(){
        Materialize.showStaggeredList("#staggered-awards2")
    }},
    {selector: '#staggered-awards3', offset: 100,callback:function(){
        Materialize.showStaggeredList("#staggered-awards3")
    }}
]
Materialize.scrollFire(option);
