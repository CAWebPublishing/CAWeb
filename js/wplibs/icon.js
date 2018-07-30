(function( $ ) {
     "use strict";
	$(function(){
		
		$(document).on('click', '#caweb-icon-menu.autoUpdate li,.caweb-icon-menu.autoUpdate li', function(e){cawebIconSelected(this, true);});
		$(document).on('click', '#caweb-icon-menu.noUpdate li,.caweb-icon-menu.noUpdate li', function(e){cawebIconSelected(this, false);});
		
	});
	
		
})(jQuery);

function cawebIconSelected(iconLi, autoUpdate){
	var icon_list = iconLi.parentNode.getElementsByTagName('LI');
	
	for(o = 0; o < icon_list.length - 1; o++){
		icon_list[o].classList.remove('selected');
	}
	iconLi.classList.add('selected');
	
	if( autoUpdate ){
		iconLi.parentNode.lastElementChild.value = iconLi.title;
		$(iconLi.parentNode.lastElementChild).change();
	}
}
function resetIconSelect(iconList, autoUpdate){
	var icon_list = iconList.getElementsByTagName('LI');
	
	for(o = 0; o < icon_list.length - 1; o++){
		icon_list[o].classList.remove('selected');
	}
	if(autoUpdate){
		iconList.lastElementChild.value = "";
		$(iconList.lastElementChild).change();
	}
}

