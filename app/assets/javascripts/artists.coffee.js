// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(document).scroll(function() {
	var status = false;
  if (status==false) {
    $('.vid-container').animate({ marginTop: '-800px' }, 'slow');
	  $('.logo').animate({ marginTop: '-400px' }, 'slow');
		$('.menuBar').fadeIn('slow');
	  status=true;
	  
  } 
  
});
	
$(document).ready(function(){

		$('.artist_home').css('opacity', '0');

		setTimeout(function() {
			$('.artist_home').each(function(i) {
			var t = $(this);
      setTimeout(function(){ 
                     t.animate({
                                opacity:1
	                              }, 500);
              }, (i+1) * 100);
			});
		},100);


		$(".artist_home").mouseenter(function() {
				$(this).find('img').css('transform', 'scale(1.2,1.2)');
		});

		$(".artist_home").mouseleave(function() {
				$(this).find('img').css('transform', 'scale(1.05, 1.05)');
		});

    $(".close_sub_cat").click(function(){
        
		$('.content_sub').fadeOut('slow');
		
    });
	
	$(".close_sub_cat_sec").click(function(){
        
		$('.content_sub_sec').fadeOut('slow');
		
    });
	
	$(".bttn_all").click(function(){
        
		
		$('.east').show('fast');
		$('.west').show('fast');
		$('.south').show('fast');
		$('.midwest').show('fast');
		$('.international').show('fast');
		
    });
	
	$(".bttn_east").click(function(){
        
		
		$('.east').hide('800');
		$('.west').hide('800');
		$('.south').hide('800');
		$('.midwest').hide('800');
		$('.international').hide('800');
		$('.east').show('300');
		
    });
	
	$(".bttn_west").click(function(){
        $('.east').hide('800');
		$('.west').hide('800');
		$('.south').hide('800');
		$('.midwest').hide('800');
		$('.international').hide('800');
		$('.west').show('300');
    });
	
	$(".bttn_south").click(function(){
        
		$('.east').hide('800');
		$('.west').hide('800');
		$('.south').hide('800');
		$('.midwest').hide('800');
		$('.international').hide('800');
		$('.south').show('300');
		
    });
	
	$(".bttn_midwest").click(function(){
        
		$('.east').hide('800');
		$('.west').hide('800');
		$('.south').hide('800');
		$('.midwest').hide('800');
		$('.international').hide('800');
		$('.midwest').show('300');
		
    });
	
	$(".bttn_international").click(function(){
        
		$('.east').hide('800');
		$('.west').hide('800');
		$('.south').hide('800');
		$('.midwest').hide('800');
		$('.international').hide('800');
		$('.international').show('300');
		
    });
	
	$(".logo").click(function(){
        $('.vid-container').animate({ marginTop: '-800px' }, 500);
		$('.menuBar').fadeIn('500');
		$('.logo').animate({ marginTop: '-400px' }, 'slow');
    });
	
	$(".down").click(function(){
        $('.vid-container').animate({ marginTop: '-800px' }, 500);
		$('.menuBar').fadeIn('500');
		$('.logo').animate({ marginTop: '-400px' }, 'slow');
    });
	
	$(".up").click(function(){
        $('.vid-container').animate({ marginTop: '-10px' }, 500);
		$('.menuBar').fadeOut('500');
		$('.logo').animate({ marginTop: '0px' }, 'slow');
    });
	
	$(".hot_box_bttn").click(function(){
        $('.vid-container').animate({ marginTop: '-10px' }, 500);
		$('.menuBar').fadeOut('500');
		$('.logo').animate({ marginTop: '0px' }, 'slow');
    });
	
});
	
$(document).ready(function(){
    $(".on-air").click(function(){
        
		$('.content_sub').fadeIn('slow');
    });
	
});