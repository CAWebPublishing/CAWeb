jQuery(document).ready(function() {
	/* 
	TablePress Accessibility 
	Add aria labels to datatables search field 
	*/
	var dataTables_filter = $('.dataTables_filter')
	
	if( dataTables_filter.length ){
		dataTables_filter.each(function(index, element) {
			var l = $(element).find('label');
			var i = $(element).find('input');

			$(l).attr('for', $(i).attr('aria-controls') + '-search');
			$(i).attr('id', $(i).attr('aria-controls') + '-search');
		});
	}

	setTimeout( function(){
		/* 
		TablePress Accessibility 
		Add missing aria-sort to headers
		*/
		var tablepress_headers = $('table[id^="tablepress-"] thead tr th');

		if( tablepress_headers.length ){
			add_aria_sort();

			tablepress_headers.each(function(index, element) {
				$(element).on('click', add_aria_sort );
			});

			function add_aria_sort(){
				tablepress_headers.each(function(index, element) {
					if( undefined == $(element).attr('aria-sort') ){
						$(element).attr('aria-sort', 'none');
					}
				});
			}
		}

		/* 
		TablePress Accessibility 
		Add href to pagination links
		*/
		var dataTables_pagination = $('.dataTables_paginate .paginate_button'); 

		if( dataTables_pagination.length ){
			dataTables_pagination.each(function(index, element){
				$(element).attr('href', '#');
			});
		}
	}, 500);
	
});