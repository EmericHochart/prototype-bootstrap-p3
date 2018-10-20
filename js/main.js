/* Scrolling Navbar */
function verifmedia(largeur) {
    if (largeur.matches) { // If media query matches
        $('nav').addClass('black');
        
    } else {
        $('nav').removeClass('black');
        
    }
}

var largeur = window.matchMedia("(max-width: 768px)");
verifmedia(largeur);
largeur.addListener(verifmedia); 

$(window).on("scroll", function() {
            if($(window).scrollTop()) {
            	    $('nav').addClass('black');
            }

            else {
                  
					var largeur = window.matchMedia("(max-width: 768px)");
					verifmedia(largeur);
					largeur.addListener(verifmedia);
					
                  
                  
            }
      })
/* Navigation fluide */
$(function () {

  $('#monmenu li a').on('click', function(e) {

    e.preventDefault();

    var hash = this.hash;

    $('html, body').animate({

      scrollTop: $(this.hash).offset().top

    }, 1000, function(){

      window.location.hash = hash;

    });

  });

});
/* Formulaire modal */
$(function(){

        $("form").submit(function(e) {

          e.preventDefault();

          var $form = $(this);

          $.post($form.attr("action"), $form.serialize())

          .done(function(data) {

            $("#boutonreservation").html(data);

            $("#reservation").modal("hide"); 

          })

          .fail(function() {

            alert("Les données seront traitées via le menu administration");

          });

        });

      });

/* Code de la section Films */
$(document).ready(function() {
  

	  
    var numItems = $('li.fancyTab').length;
		
	
			  if (numItems == 12){
					$("li.fancyTab").width('8.3%');
				}
			  if (numItems == 11){
					$("li.fancyTab").width('9%');
				}
			  if (numItems == 10){
					$("li.fancyTab").width('10%');
				}
			  if (numItems == 9){
					$("li.fancyTab").width('11.1%');
				}
			  if (numItems == 8){
					$("li.fancyTab").width('12.5%');
				}
			  if (numItems == 7){
					$("li.fancyTab").width('14.2%');
				}
			  if (numItems == 6){
					$("li.fancyTab").width('16.666666666666667%');
				}
			  if (numItems == 5){
					$("li.fancyTab").width('20%');
				}
			  if (numItems == 4){
					$("li.fancyTab").width('25%');
				}
			  if (numItems == 3){
					$("li.fancyTab").width('33.3%');
				}
			  if (numItems == 2){
					$("li.fancyTab").width('50%');
				}

		});

$(window).load(function() {

  $('.fancyTabs').each(function() {

    var highestBox = 0;
    $('.fancyTab a', this).each(function() {

      if ($(this).height() > highestBox)
        highestBox = $(this).height();
    });

    $('.fancyTab a', this).height(highestBox);

  });
});

/* Pagination Actualités */
var show_per_page = 3; 

    var current_page = 0;


    function set_display(first, last) {

      $('#content').children().css('display', 'none');

      $('#content').children().slice(first, last).css('display', 'block');

    }


    function previous(){

        if($('.active').prev('.page_link').length) go_to_page(current_page - 1);

    }


    function next(){

        if($('.active').next('.page_link').length) go_to_page(current_page + 1);

    }


    function go_to_page(page_num){

      current_page = page_num;

      start_from = current_page * show_per_page;

      end_on = start_from + show_per_page;

      set_display(start_from, end_on);

      $('.active').removeClass('active');

      $('#id' + page_num).addClass('active');

    }  


    $(document).ready(function() {


      var number_of_pages = Math.ceil($('#content').children().length / show_per_page);

      

      var nav = '<ul class="pagination"><li><a href="javascript:previous();">&laquo;</a>';


      var i = -1;

      while(number_of_pages > ++i){

        nav += '<li class="page_link'

        if(!i) nav += ' active';

        nav += '" id="id' + i +'">';

        nav += '<a href="javascript:go_to_page(' + i +')">'+ (i + 1) +'</a>';

      }

      nav += '<li><a href="javascript:next();">&raquo;</a></ul>';


      $('#page_navigation').html(nav);

      set_display(0, show_per_page);

      

    });