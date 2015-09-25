$('#theforce').click(function() {
  $('body.theforce').addClass('theforce-open');       
});

$('#page').click(function() {
  $('body.theforce').removeClass('theforce-open');       
});

// Button Ripple Effect
var $parent, $ink, $inkWrap, d, x, y;
$("#theforce a").click(function(e){
  $parent = $(this).parent();
  //create .ink element if it doesn't exist
  if($parent.find(".ink").length == 0){
   $parent.prepend("<span class='ink-wrap'><span class='ink'></span></span>");
  }

  $ink = $parent.find(".ink");
  //incase of quick double clicks stop the previous animation
  $ink.removeClass("animate");

  //set size of .ink
  if(!$ink.height() && !$ink.width()){
   //use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
   d = Math.max($parent.outerWidth(), $parent.outerHeight());
   $ink.css({height: d, width: d});
  }

  //get click coordinates
  //logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
  x = e.pageX - $parent.offset().left - $ink.width()/2;
  y = e.pageY - $parent.offset().top - $ink.height()/2;

  //set the position and add class .animate
  $ink.css({top: y+'px', left: x+'px'}).addClass("animate");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJCgnI3RoZWZvcmNlJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICQoJ2JvZHkudGhlZm9yY2UnKS5hZGRDbGFzcygndGhlZm9yY2Utb3BlbicpOyAgICAgICBcbn0pO1xuXG4kKCcjcGFnZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAkKCdib2R5LnRoZWZvcmNlJykucmVtb3ZlQ2xhc3MoJ3RoZWZvcmNlLW9wZW4nKTsgICAgICAgXG59KTtcblxuLy8gQnV0dG9uIFJpcHBsZSBFZmZlY3RcbnZhciAkcGFyZW50LCAkaW5rLCAkaW5rV3JhcCwgZCwgeCwgeTtcbiQoXCIjdGhlZm9yY2UgYVwiKS5jbGljayhmdW5jdGlvbihlKXtcbiAgJHBhcmVudCA9ICQodGhpcykucGFyZW50KCk7XG4gIC8vY3JlYXRlIC5pbmsgZWxlbWVudCBpZiBpdCBkb2Vzbid0IGV4aXN0XG4gIGlmKCRwYXJlbnQuZmluZChcIi5pbmtcIikubGVuZ3RoID09IDApe1xuICAgJHBhcmVudC5wcmVwZW5kKFwiPHNwYW4gY2xhc3M9J2luay13cmFwJz48c3BhbiBjbGFzcz0naW5rJz48L3NwYW4+PC9zcGFuPlwiKTtcbiAgfVxuXG4gICRpbmsgPSAkcGFyZW50LmZpbmQoXCIuaW5rXCIpO1xuICAvL2luY2FzZSBvZiBxdWljayBkb3VibGUgY2xpY2tzIHN0b3AgdGhlIHByZXZpb3VzIGFuaW1hdGlvblxuICAkaW5rLnJlbW92ZUNsYXNzKFwiYW5pbWF0ZVwiKTtcblxuICAvL3NldCBzaXplIG9mIC5pbmtcbiAgaWYoISRpbmsuaGVpZ2h0KCkgJiYgISRpbmsud2lkdGgoKSl7XG4gICAvL3VzZSBwYXJlbnQncyB3aWR0aCBvciBoZWlnaHQgd2hpY2hldmVyIGlzIGxhcmdlciBmb3IgdGhlIGRpYW1ldGVyIHRvIG1ha2UgYSBjaXJjbGUgd2hpY2ggY2FuIGNvdmVyIHRoZSBlbnRpcmUgZWxlbWVudC5cbiAgIGQgPSBNYXRoLm1heCgkcGFyZW50Lm91dGVyV2lkdGgoKSwgJHBhcmVudC5vdXRlckhlaWdodCgpKTtcbiAgICRpbmsuY3NzKHtoZWlnaHQ6IGQsIHdpZHRoOiBkfSk7XG4gIH1cblxuICAvL2dldCBjbGljayBjb29yZGluYXRlc1xuICAvL2xvZ2ljID0gY2xpY2sgY29vcmRpbmF0ZXMgcmVsYXRpdmUgdG8gcGFnZSAtIHBhcmVudCdzIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHBhZ2UgLSBoYWxmIG9mIHNlbGYgaGVpZ2h0L3dpZHRoIHRvIG1ha2UgaXQgY29udHJvbGxhYmxlIGZyb20gdGhlIGNlbnRlcjtcbiAgeCA9IGUucGFnZVggLSAkcGFyZW50Lm9mZnNldCgpLmxlZnQgLSAkaW5rLndpZHRoKCkvMjtcbiAgeSA9IGUucGFnZVkgLSAkcGFyZW50Lm9mZnNldCgpLnRvcCAtICRpbmsuaGVpZ2h0KCkvMjtcblxuICAvL3NldCB0aGUgcG9zaXRpb24gYW5kIGFkZCBjbGFzcyAuYW5pbWF0ZVxuICAkaW5rLmNzcyh7dG9wOiB5KydweCcsIGxlZnQ6IHgrJ3B4J30pLmFkZENsYXNzKFwiYW5pbWF0ZVwiKTtcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==