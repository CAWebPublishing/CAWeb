( function( $ ) {  
   
  function class_check(haystack, needle){
   	var found = false;
    haystack.each(function( obj ) {  
      if(-1 < $( this ).attr("class").search(needle) ) 
        found = true;   
    });
    
    return found;
  }
  
// Organization Logo Brand
wp.customize( 'header_ca_branding', function( value ) {
	value.bind( function( newval ) {
		//Do stuff (newval variable contains your "new" setting data)
    if(4 == wp.customize._value.ca_site_version._value){
      var org_logo = document.getElementsByClassName('header-organization-banner')[0].getElementsByTagName('a')[0];
    }else{
      var org_logo = document.getElementsByClassName('header-cagov-logo')[0].getElementsByTagName('a')[0];
    }
    
    var img = document.createElement('img');
    img.src = newval;
    
    org_logo.innerHTML = '';
    org_logo.appendChild(img);
	} );
} );
  

// Search on Front Page
wp.customize( 'ca_frontpage_search_enabled', function( value ) {
	value.bind( function( newval ) {
		//Do stuff (newval variable contains your "new" setting data)
    if(5 <= wp.customize._value.ca_site_version._value){
      if( newval ){
      	$('#head-search').addClass('featured-search'); 
      	$('#head-search').removeClass('hidden');        
      }else{        
         $('#head-search').addClass('hidden'); 
      }
    }
    
	} );
} );

// Sticky Navigation
var current_padding = 0;
wp.customize( 'ca_sticky_navigation', function( value ) {
	value.bind( function( newval ) {
    current_padding = 0 == current_padding ? $('#main-content').css('padding-top') : current_padding;
		//Do stuff (newval variable contains your "new" setting data)
    if(5 <= wp.customize._value.ca_site_version._value){
      if( newval ){
     		$('body').addClass('sticky_nav');
      	$('#header').addClass('fixed');
        $('#main-content').css('padding-top', current_padding);
      }else{        
      	$('body').removeClass('sticky_nav');
      	$('#header').removeClass('fixed');
        $('#main-content').css('padding-top', 0);
      }
    }
    
	} );
} );
  
// Menu Home Link
wp.customize( 'ca_home_nav_link', function( value ) {
	value.bind( function( newval ) {
    //Do stuff (newval variable contains your "new" setting data)
    if( '/' == document.location.pathname ){
      alert( "This feature is not visible on the Front Page." );
    }else{
      if(-1 == $('#nav_list li:first').attr("class").search('nav-item-home') )
        $('#nav_list').prepend('<li class="nav-item nav-item-home"><a href="/" class="first-level-link"><span class="ca-gov-icon-home"></span> Home</a></li>');
      
      if( newval ){
          $('#nav_list li:first').removeClass('hidden');
      }else{
          $('#nav_list li:first').addClass('hidden');
      }
    }
      
      
	} );
} );  


// Utility Header Home Link
wp.customize( 'ca_utility_home_icon', function( value ) {
	value.bind( function( newval ) {
    var first_link = $('.utility-header:first .social-media-links li:first');
    //Do stuff (newval variable contains your "new" setting data)
    if(undefined !== first_link && 
       (undefined == first_link.attr("class") || -1 == first_link.attr("class").search('utility-home-icon') ) )
        $('.utility-header:first .social-media-links').prepend('<li class="utility-home-icon"><a href="/" title="Home" ><span class="ca-gov-icon-home"></span><span class="sr-only">Home</span></a></li>');
    
      if( newval ){
          $('.utility-header:first .social-media-links li:first').removeClass('hidden');
      }else{
          $('.utility-header:first .social-media-links li:first').addClass('hidden');
      }  
      
	} );
} );


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
  
// Utility Header Contact Us Link
wp.customize( 'ca_contact_us_link', function( value ) {
	value.bind( function( newval ) {
    var contact_us_link = undefined;
    // if there is not already a Contact Us Link
    if( !class_check( $('.utility-header:first .utility-links:nth-child(1) li') , 'utility-contact-us' )){
      // if the Contact Us Link Url is not blank add a LI to Utility Links
      if( newval.trim()  ){ 
        var new_link = '<li class="utility-contact-us"><a href="">Contact Us</a></li>';
      	$( new_link ).insertBefore('.utility-header:first .utility-links:nth-child(1) .utility-settings');
      	contact_us_link = $('.utility-header:first .utility-links:nth-child(1) .utility-contact-us a');
      }
    }else{
      contact_us_link = $('.utility-header:first .utility-links:nth-child(1) .utility-contact-us a');
    }
    
    if( undefined !== contact_us_link ){
      if( newval.trim()  ){
        contact_us_link.attr('href', newval);
        contact_us_link.parent().removeClass('hidden');
      }else{
        contact_us_link.parent().addClass('hidden');
      }  
    }
   
	} );
} );

// Bind to Google Translate Custom Translate Page 
wp.customize( 'ca_google_trans_page', function( value ) {
	value.bind( function( newval ) {
		
		if( newval.trim()  ){ 
			$('#caweb-gtrans-custom').css({'display' : 'inline-block'});
			$('#caweb-gtrans-custom').attr('href', newval);
		}else{
			$('#caweb-gtrans-custom').css({'display' : 'none'});
		}
   
	} );
} );

// Bind to Google Translate Custom CAWeb_Customize_Icon_Control 
wp.customize( 'ca_google_trans_icon', function( value ) {
	value.bind( function( newval ) {
		var icon = $('#caweb-gtrans-custom span');
		if( "" == newval){
			icon.css({'display' : 'none'});	
		}else{
			icon.css({'display' : 'inline-block'});	
			icon.attr( "class",  "ca-gov-icon-" + newval);
		}
    
	} );
} );

} )( jQuery );
