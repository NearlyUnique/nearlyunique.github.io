var fixedHeadHeight = 0;

function UpdateTableHeaders() {
   $(".sticky-block").each(function() {
   
	   var el             = $(this),
		   offset         = el.offset(),
		   scrollTop      = $(window).scrollTop(),
		   stuckheader = $(".stuck-header", this);

	   scrollTop += fixedHeadHeight;
	   
	   if ((scrollTop > offset.top) && (scrollTop < offset.top + el.height())) {
		   stuckheader.css({
			"visibility": "visible"
		   });
	   } else {
		   stuckheader.css({
			"visibility": "hidden"
		   });
	   };
   });
}
    
$(function() {
   fixedHeadHeight = $("header").height();
   
   var clonedHeaderRow;

   $(".sticky-block").each(function() {
	   clonedHeaderRow = $(".sticky-header", this);
	   clonedHeaderRow
		 .before(clonedHeaderRow.clone())
		 .css("width", clonedHeaderRow.width())
		 .css("top", fixedHeadHeight)
		 .addClass("stuck-header");
		 
   });
   
   $(window)
	.scroll(UpdateTableHeaders)
	.trigger("scroll");
   
});
