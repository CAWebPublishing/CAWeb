   $ = jQuery.noConflict();

   jQuery(document).ready(function() {
    
    var blogs = $('div').filter(function(){ return this.className.match(/et_pb_blog_\d/); });

    if( blogs.length ){
        blogs.each(function(index, element) {
            blog =  $(element).find('article');
            blog.each(function(i) {
             b =  $(blog[i]); 
             title = b.children('.entry-title').text();
             
             read_more = b.children('.post-content').children('.more-link:last-child');
      
             if(read_more.length){
                 read_more.append('<span class="sr-only">' + title + '</span>');
             }
             });
         });      
    }   

});
