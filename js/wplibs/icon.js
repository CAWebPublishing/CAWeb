jQuery(document).ready(function() {
	$ = jQuery.noConflict();
	
	$('#caweb-icon-menu li').click(function(e){cawebIconSelected(this, true);});
	$('.caweb-icon-menu.resetIcon').click(function(e){ resetIconSelect($(this.parentNode).siblings('#caweb-icon-menu')[0], true);});
		
	function cawebIconSelected(iconLi, autoUpdate){
		var icon_list = iconLi.parentNode.getElementsByTagName('LI');

		for(o = 0; o < icon_list.length - 1; o++){
			icon_list[o].classList.remove('selected');
		}
		iconLi.classList.add('selected');

		if( autoUpdate ){
			iconLi.parentNode.lastElementChild.value = iconLi.title;
		}
	}
	function resetIconSelect(iconList, autoUpdate){
		var icon_list = iconList.getElementsByTagName('LI');

		for(o = 0; o < icon_list.length - 1; o++){
			icon_list[o].classList.remove('selected');
		}
		if(autoUpdate){
			iconList.lastElementChild.value = "";
		}
	}
	
});