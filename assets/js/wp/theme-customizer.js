/* CAWeb Theme Customizer Option Scripts */
jQuery( function( $ ) {  
   


// Utility Header Custom Link 1 Text
wp.customize( 'ca_utility_link_1_name', function( value ) {
	value.bind( function( newval ) {
    //Do stuff (newval variable contains your "new" setting data) 
     var custom_link_1 = undefined;
    // if there is not already a Custom Link 1 present
    if( !class_check( $('.utility-header:first .utility-links:nth-child(1) li') , 'utility-custom-1' ) ){
      // if the Custom Link 1 Text and Url are not blank add a LI to Utility Links
      if(newval.trim() && wp.customize._value.ca_utility_link_1._value.trim() ){      
        var new_link = '<li class="utility-custom-1"><a href="' + wp.customize._value.ca_utility_link_1._value +  '"></a></li>';
      $('.utility-header:first .utility-links:nth-child(1)').prepend( new_link );
        custom_link_1 = $('.utility-header:first .utility-links:nth-child(1) .utility-custom-1 a');
        // if either text or url are blank don't do anything
      }
    }else{
      custom_link_1 = $('.utility-header:first .utility-links:nth-child(1) .utility-custom-1 a');
    }
    
    if( undefined !== custom_link_1 ){
      if( newval.trim() && wp.customize._value.ca_utility_link_1._value.trim() ){
      			custom_link_1.html(newval);
        		custom_link_1.parent().removeClass('hidden');
      }else{
        	custom_link_1.parent().addClass('hidden');
      }  
    }
	} );
} );

// Utility Header Custom Link 1 Url
wp.customize( 'ca_utility_link_1', function( value ) {
	value.bind( function( newval ) {
    //Do stuff (newval variable contains your "new" setting data)
     var custom_link_1 = undefined;
    // if there is not already a Custom Link 1 present
    if( !class_check( $('.utility-header:first .utility-links:nth-child(1) li') , 'utility-custom-1' ) ){
      // if the Custom Link 1 Text and Url are not blank add a LI to Utility Links
      if(newval.trim() && wp.customize._value.ca_utility_link_1_name._value.trim() ){ 
        var new_link = '<li class="utility-custom-1"><a href="">' + wp.customize._value.ca_utility_link_1_name._value +  '</a></li>';
      $('.utility-header:first .utility-links:nth-child(1)').prepend( new_link );
        custom_link_1 = $('.utility-header:first .utility-links:nth-child(1) .utility-custom-1 a');
        // if either text or url are blank don't do anything
      }
    }else{
      custom_link_1 = $('.utility-header:first .utility-links:nth-child(1) .utility-custom-1 a');
    }
    
    if( undefined !== custom_link_1 ){
      if( newval.trim() && wp.customize._value.ca_utility_link_1_name._value.trim() ){
      		 custom_link_1.attr('href', newval);
        		custom_link_1.parent().removeClass('hidden');
      }else{
        	custom_link_1.parent().addClass('hidden');
      }    
    }
	} );
} );

// Utility Header Custom Link 1 Target
wp.customize( 'ca_utility_link_1_new_window', function( value ) {
	value.bind( function( newval ) {
    //Do stuff (newval variable contains your "new" setting data)
     var custom_link_1 = $('.utility-custom-1 a');
	 
	 if ( undefined !== custom_link_1 ){
		custom_link_1.attr("target", newval ? "_blank" : "");
	 }
	 
	 });
} );

// Utility Header Custom Link 2 Text
wp.customize( 'ca_utility_link_2_name', function( value ) {
	value.bind( function( newval ) {
    //Do stuff (newval variable contains your "new" setting data)
   	var custom_link_2 = undefined;
    // if there is not already a Custom Link 2 present
    if( !class_check( $('.utility-header:first .utility-links:nth-child(1) li') , 'utility-custom-2' ) ){
      // if the Custom Link 2 Text and Url are not blank add a LI to Utility Links
      if(newval.trim() && wp.customize._value.ca_utility_link_2._value.trim() ){ 
        var new_link = '<li class="utility-custom-2"><a href="' + wp.customize._value.ca_utility_link_2._value +  '"></a></li>';
        // if Custom Link 1 exists, add Custom Link 2 after it
        if( class_check( $('.utility-header:first .utility-links:nth-child(1) li') , 'utility-custom-1' ) ){
        	$(new_link).insertAfter('.utility-header:first .utility-links:nth-child(1) .utility-custom-1');
         // else Custom Link 1 does not exists, add Custom Link 2 first
        }else{
          $('.utility-header:first .utility-links:nth-child(1)').prepend( new_link );
        }
        custom_link_2 = $('.utility-header:first .utility-links:nth-child(1) .utility-custom-2 a');
        // if either text or url are blank don't do anything
      }
    }else{
      custom_link_2 = $('.utility-header:first .utility-links:nth-child(1) .utility-custom-2 a');
    }
    
    if( undefined !== custom_link_2 ){
      if( newval.trim() && wp.customize._value.ca_utility_link_2._value.trim() ){
      			custom_link_2.html(newval);
        		custom_link_2.parent().removeClass('hidden');
      }else{
        	custom_link_2.parent().addClass('hidden');
      }        
    }
	} );
} );

// Utility Header Custom Link 2 Url
wp.customize( 'ca_utility_link_2', function( value ) {
	value.bind( function( newval ) {
    //Do stuff (newval variable contains your "new" setting data)
    var custom_link_2 = undefined;
    // if there is not already a Custom Link 1 present
    if( !class_check( $('.utility-header:first .utility-links:nth-child(1) li') , 'utility-custom-2' )  ){
      // if the Custom Link 2 Text and Url are not blank add a LI to Utility Links
      if(newval.trim() && wp.customize._value.ca_utility_link_2_name._value.trim() ){ 
        var new_link = '<li class="utility-custom-2"><a href="">' + wp.customize._value.ca_utility_link_2_name._value +  '</a></li>';
        // if Custom Link 1 exists, add Custom Link 2 after it
        if( class_check( $('.utility-header:first .utility-links:nth-child(1) li') , 'utility-custom-1' ) ){
        	$(new_link).insertAfter('.utility-header:first .utility-links:nth-child(1) .utility-custom-1');
          // else Custom Link 1 does not exists, add Custom Link 2 first
        }else{
          $('.utility-header:first .utility-links:nth-child(1)').prepend( new_link );
        }
        
        custom_link_2 = $('.utility-header:first .utility-links:nth-child(1) .utility-custom-2 a');
        // if either text or url are blank don't do anything
      }
    }else{
      custom_link_2 = $('.utility-header:first .utility-links:nth-child(1) .utility-custom-2 a');
    }
    if( undefined !== custom_link_2 ){
      if( newval.trim() && wp.customize._value.ca_utility_link_2_name._value.trim() ){
      		 custom_link_2.attr('href', newval);
        		custom_link_2.parent().removeClass('hidden');
      }else{
        	custom_link_2.parent().addClass('hidden');
      }    
    }
	} );
} );

// Utility Header Custom Link 2 Target
wp.customize( 'ca_utility_link_2_new_window', function( value ) {
	value.bind( function( newval ) {
    //Do stuff (newval variable contains your "new" setting data)
     var custom_link_2 = $('.utility-custom-2 a');
	 
	 if ( undefined !== custom_link_2 ){
		custom_link_2.attr("target", newval ? "_blank" : "");
	 }
	 
	 });
} );

// Utility Header Custom Link 3 Text
wp.customize( 'ca_utility_link_3_name', function( value ) {
	value.bind( function( newval ) {
    //Do stuff (newval variable contains your "new" setting data)
    var custom_link_3 = undefined;
    // if there is not already a Custom Link 1 present
    if( !class_check( $('.utility-header:first .utility-links:nth-child(1) li') , 'utility-custom-3' ) ){
      // if the Custom Link 3 Text and Url are not blank add a LI to Utility Links
      if(newval.trim() && wp.customize._value.ca_utility_link_3._value.trim() ){ 
        var new_link = '<li class="utility-custom-3"><a href="' + wp.customize._value.ca_utility_link_3._value + '"></a></li>';
        // if Custom Link 2 exists, add Custom Link 3 after it
        if( class_check( $('.utility-header:first .utility-links:nth-child(1) li') , 'utility-custom-2' ) ){
        	$(new_link).insertAfter('.utility-header:first .utility-links:nth-child(1) .utility-custom-2');
         // else Custom Link 2 does not exists, check if Custom Link 1 exists 
         // if it does insert after Custom Link 1
        }else if(class_check( $('.utility-header:first .utility-links:nth-child(1) li') , 'utility-custom-1' )){
          $(new_link).insertAfter('.utility-header:first .utility-links:nth-child(1) .utility-custom-1');
          // else Custom Link 1 nor Custom Link 2 exists, add Custom Link 3 first 
        }else{          
          $('.utility-header:first .utility-links:nth-child(1)').prepend( new_link );
        }
        custom_link_3 = $('.utility-header:first .utility-links:nth-child(1) .utility-custom-3 a');
        // if either text or url are blank don't do anything
      }
    }else{
      custom_link_3 = $('.utility-header:first .utility-links:nth-child(1) .utility-custom-3 a');
    }
    
    if( undefined !== custom_link_3 ){
      if( newval.trim() && wp.customize._value.ca_utility_link_3._value ){
      			custom_link_3.html(newval);
        		custom_link_3.parent().removeClass('hidden');
      }else{
        	custom_link_3.parent().addClass('hidden');
      }    
    }
	} );
} );

// Utility Header Custom Link 3 Url
wp.customize( 'ca_utility_link_3', function( value ) {
	value.bind( function( newval ) {
    //Do stuff (newval variable contains your "new" setting data)
    var custom_link_3 = undefined;
    // if there is not already a Custom Link 1 present
    if( !class_check( $('.utility-header:first .utility-links:nth-child(1) li') , 'utility-custom-3' )){
      // if the Custom Link 3 Text and Url are not blank add a LI to Utility Links
      if(newval.trim() && wp.customize._value.ca_utility_link_3_name._value.trim() ){ 
        var new_link = '<li class="utility-custom-3"><a href="">' + wp.customize._value.ca_utility_link_3_name._value + '</a></li>';
        // if Custom Link 2 exists, add Custom Link 3 after it
        if( class_check( $('.utility-header:first .utility-links:nth-child(1) li') , 'utility-custom-2' ) ){
        	$(new_link).insertAfter('.utility-header:first .utility-links:nth-child(1) .utility-custom-2');
         // else Custom Link 2 does not exists, check if Custom Link 1 exists 
         // if it does insert after Custom Link 1
        }else if( !class_check( $('.utility-header:first .utility-links:nth-child(1) li') , 'utility-custom-1' ) ){
          $(new_link).insertAfter('.utility-header:first .utility-links:nth-child(1) .utility-custom-1');
          // else Custom Link 1 nor Custom Link 2 exists, add Custom Link 3 first 
        }else{          
          $('.utility-header:first .utility-links:nth-child(1)').prepend( new_link );
        }
        custom_link_3 = $('.utility-header:first .utility-links:nth-child(1) .utility-custom-3 a');
        // if either text or url are blank don't do anything
      }
    }else{
      custom_link_3 = $('.utility-header:first .utility-links:nth-child(1) .utility-custom-3 a');
    }
    
    if( undefined !== custom_link_3 ){
      if( newval.trim() && wp.customize._value.ca_utility_link_3_name._value.trim() ){
      		 custom_link_3.attr('href', newval);
        		custom_link_3.parent().removeClass('hidden');
      }else{
        	custom_link_3.parent().addClass('hidden');
      }    
    }
	} );
} );
// Utility Header Custom Link 3 Target
wp.customize( 'ca_utility_link_3_new_window', function( value ) {
	value.bind( function( newval ) {
    //Do stuff (newval variable contains your "new" setting data)
     var custom_link_3 = $('.utility-custom-3 a');
	 
	 if ( undefined !== custom_link_3 ){
		custom_link_3.attr("target", newval ? "_blank" : "");
	 }
	 
	 });
} );



} );
