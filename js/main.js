;(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});


})(jQuery)



$(document).ready(function() {






	$(".has-tooltip-top").tooltip({
        placement : 'top' });

	$(".has-tooltip-right").tooltip({
        placement : 'right' });

	$(".has-tooltip-left").tooltip({
        placement : 'left' });

	$(".has-tooltip-bottom").tooltip({
        placement : 'bottom' });

	$('#dataTable-matches').dataTable();

	$("div.dataTables_filter input").attr("placeholder", "Search")

});

