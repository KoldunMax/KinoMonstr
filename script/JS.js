/*$(function(){

    var menuelements = $('.menu').children("li");

	menuelements.click(function(){

		 menuelements.each(function(index){

		 	if($(menuelements[index]).hasClass('selected')){
		 	   $(menuelements[index]).removeClass('selected');
		 	};
		 });

		 $(this).addClass('selected');
	});*/
	
$(function(){	
	var review_btn = $(".send .btn");
    
    	var review_name; // Элементы для записи введенных пользователем
	var review_text; // значений в пустые поля

	var new_review_name; // Новый коммент 
	var new_review_text; // Новый текст : будут добавлены добавлены

	var text_for_name;
	var text_for_text; // текст для textarea

	var reviews = document.getElementsByClassName("reviews");

	review_btn.click((e) => {
		e.preventDefault();

		review_name = $("input[name='review_name']").val();
		review_text = $("#review_text").val()

		if(review_name && review_text){
		new_review_name = document.createElement('div');
		$(new_review_name).addClass("reviews_name");
		text_for_name = document.createTextNode(review_name);
		new_review_name.appendChild(text_for_name);
		$(".reviews").append($(new_review_name));	

		new_review_text = document.createElement('div');
		$(new_review_text).addClass("reviews_text");
		text_for_text = document.createTextNode(review_text);
		new_review_text.appendChild(text_for_text);
		console.log(text_for_text);
		$(".reviews").append($(new_review_text));

		$("input[name='review_name']").val('');
		$("#review_text").val('');

		}

	});

});

		$(document).ready(function(){
			
			var touch = $("#touch_menu");
			var nav = $(".menubar");
			var backgroundColor = "#615a8f";

			$("#touch_menu").on('click', function(e){

				if(backgroundColor === "#615a8f"){
				    touch.css("background-color", backgroundColor);
				    backgroundColor = "darkslateblue";
			    } else {
			    	touch.css("background-color", backgroundColor);
				    backgroundColor = "#615a8f";
			    }

				nav.slideToggle();
			});

			$(window).resize(function(){
				if($(window).width() > 568 && nav.is(':hidden')){
					nav.removeAttr("style");
				}
			});

		});