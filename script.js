$(document).ready(function(){

    $("body").scrollspy({target: "#mynavbar"});

    $(".nav a").click(function(event){
	    if(this.hash !== ""){
	        event.preventDefault();
	        let hash = this.hash;
	        $('html, body').animate({
	            scrollTop: $(hash).offset().top
	        }, 'slow', function(){
	            window.location.hash = hash;
	        });
	    }  
    });
  
    $(window).scroll(function(){
  		var navscroll = $(window).scrollTop();
	    if (navscroll > 100) {
	    	$(".navbar").css("background" , "rgba(16,16,16,1)");
	    }
	    else{
	    	$(".navbar").css("background" , "rgba(16,16,16,0.4)");  	
	    }
    });
  
  
  	/**************************Form Validation*********************/
	const regExp = {
	  name: /^[a-z\d]+$/i,
	  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	}
	$('form input, textarea').each( () => {
		$(this).on('keydown', (event)=>{
			validate(event.target.id, regExp[event.target.name]);
	   	})
	});

	function validate(field, regex){
		if(field == 'message' && regex == undefined){
			if($('#'+field).val().length < 20 || $('#'+field).val().length > 280){
				$('#'+field).removeClass("valid");
				$('#'+field).addClass("invalid");
			}
			else{
				$('#'+field).removeClass("invalid");
				$('#'+field).addClass("valid");
			}
		}
		else if(!regex.test($('#'+field).val())){
			$('#'+field).removeClass("valid");
			$('#'+field).addClass("invalid");
		}
		else{
			$('#'+field).removeClass("invalid");
			$('#'+field).addClass("valid");
		}
	}
});
