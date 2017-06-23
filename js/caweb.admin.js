 /* Functions used on Admin Pages */
/* CAWeb Option Page */  
function toggleOptions(ele){
    var version = ele.options[ele.selectedIndex].value;    
    var extra_options = document.getElementsByClassName("extra");
    var base_options = document.getElementsByClassName("base");
    var base = '';
    
    for (var i = 0; i < extra_options.length; i++){
                
            
			if(version >= 5.0){
        extra_options[i].classList.add("show");
        for (var j = 0; j < base_options.length; j++){
         	base_options[j].classList.remove("show");
        }
      }else{
        extra_options[i].classList.remove("show");
        for (var j = 0; j < base_options.length; j++){
          base_options[j].classList.add("show");
        }
    	}				
        
    }  
    
     
  
  }
  
	function toggleOptionView(opt ){
		var opts = ['general','social-share'];

		var selected_option = opt.getAttribute("name");

		var selected_div_option = document.getElementById(selected_option);

		for (i = 0; i < opts.length; i++) {

			if(opts[i] != selected_option ){

				document.getElementById(opts[i]).classList.remove("show");

			}

		}

		selected_div_option .classList.add("show");

		//Make all tabs inactive by getting elements with class "nav-tab" and removing class "nav-tab-active"
		var tabs = document.getElementsByClassName("nav-tab");

		for (i = 0; i < tabs.length; i++){
			tabs[i].classList.remove("nav-tab-active");
		}

		//Now make clicked tab active by getting element with its name (extracted from opt) and adding class "nav-tab-active"

		opt.className += " nav-tab-active";
	}
/* End of CAWeb Option Page */
/* Navigation Page */


  // Enable/Disable Menu Item Fields
function menu_selection(ele){

  			var menu_li = ele.parentNode.parentNode.parentNode.parentNode;
  			var classes = menu_li.className;
  			var settings = menu_li.getElementsByClassName("menu-item-settings")[0];

  			var unit_selector = settings.getElementsByClassName("unit_selector")[0];
  			var selector = unit_selector.getElementsByClassName("selector")[0];
  			var media_image = settings.getElementsByClassName("media_image")[0];
  			var desc = settings.getElementsByClassName("field-description")[0];
  			var menu_images = settings.getElementsByClassName("mega_menu_images")[0];

		  	var icon_selector = settings.getElementsByClassName("icon_selector")[0];

  			var unit_size = selector.options[selector.selectedIndex].value;

  // if the menu item is a top level menu item
  			if(-1 != classes.indexOf("menu-item-depth-0") ){
          // show Mega Menu Options
      	menu_images.classList.add("show");

          icon_selector.classList.add("show");
      // hide Nav Media Images, Unit Size Selector, Description
     		media_image.classList.remove("show");

      	desc.classList.add("hidden-field");


  // if the menu item is not top level menu item
		}else{

      // hide Mega Menu Options
      menu_images.classList.remove("show");

      // show Unit Size Selector
      unit_selector.classList.add("show");

      // if the unit_size is not unit1 enable Description
      if("unit1" != unit_size ){
        // show Description
    		desc.classList.remove('hidden-field');
  		}else{
    		desc.classList.add('hidden-field');
  		}

      // if the unit_size is unit3 enable Nav Media Images
      if("unit3" == unit_size ){
        // show Description
    		media_image.classList.add('show');
  		}else{
    		media_image.classList.remove('show');
  		}


		}

 }

  // Icon Selection
function icon_select(ele, menu_item_id){
  // Display selected icon in Icon Text box
	document.getElementById(menu_item_id + "_icon").value = ele.attributes["name"].value;

  // Grab array of all Icons
  var list_items = document.getElementsByClassName("icon-option");

  // Remove 'is_selected' class from all icons
  for(var i = 0; i < list_items.length; i++){
    list_items.item(i).classList.remove("is_selected");
  }

  // Add 'is_selected' class to selected icon
	ele.classList.toggle("is_selected");
}


  // Unit Size Selection
  function unit_change(ele){
    var unit_size = ele.value;
    var settings = ele.parentNode.parentNode.parentNode.getElementsByClassName("menu-item-settings")[0];

    var media_image = settings.getElementsByClassName("media_image")[0];
    var desc = settings.getElementsByClassName("field-description")[0];
  	var icon_selector = settings.getElementsByClassName("icon_selector")[0];


    // if the unit_size is not unit1 enable Description
      if("unit1" != unit_size ){
        // show Description
    		desc.classList.remove('hidden-field');
  		}else{
    		desc.classList.add('hidden-field');
  		}

      // if the unit_size is unit3 enable Nav Media Images
      if("unit3" == unit_size ){
        // show Description
    		media_image.classList.add('show');

        // Hide Icon Selector
        icon_selector.classList.remove('show');

  		}else{
    		media_image.classList.remove('show');

    		icon_selector.classList.add('show');
  		}
  }
/* End of Navigation  Page */