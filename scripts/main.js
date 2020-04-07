  	var logo = $('#logo');
  	var titleCard = $('#title-card');
  	var headerBarLimbic = $('#header-bar-limbic');
  	var headerBarXd = $('#header-bar-xd');
  	var headerBarCase = $('#header-bar-case');
  	var headerBarSpark = $('#header-bar-spark');

  	function hideEverything() {
	  	headerBarLimbic.hide();
	  	headerBarXd.hide();
	  	headerBarCase.hide();
	  	headerBarSpark.hide();
  	}

  	hideEverything();

  	function removeSelected() {
  		$('#li-content-a').removeClass('selected');
  		$('#li-content-b').removeClass('selected');
  		$('#li-content-c').removeClass('selected');
  		$('#li-content-d').removeClass('selected');
  		$('#li-content-e').removeClass('selected');
  	}

    $('#li-content-a').on('click', function(){
      hideEverything();
      removeSelected();
      titleCard.fadeIn('slow');
    $('#player').attr('src', 'content/content-a.html');
    $('#li-content-a').addClass('selected');
    });
  	
  	$('#li-content-b').on('click', function(){
  		hideEverything();
  		removeSelected();
  		titleCard.fadeOut('slow');
		  headerBarLimbic.show();
		$('#player').attr('src', 'content/content-b.html');
		$('#li-content-b').addClass('selected');
  	});

    $('#li-content-c').on('click', function(){
       hideEverything();
       removeSelected();
       titleCard.fadeOut('slow');
       headerBarXd.show();
    $('#player').attr('src', 'content/content-c.html');
    $('#li-content-c').addClass('selected');
    });

  	$('#li-content-d').on('click', function(){
  		hideEverything();
  		removeSelected();
  		titleCard.fadeOut('slow');
		  headerBarSpark.show();
		$('#player').attr('src', 'https://spark.adobe.com/page/5VpWQHBdx1unT/');
		$('#li-content-d').addClass('selected');
  	});

    $('#li-content-e').on('click', function(){
  	   	hideEverything();
        removeSelected();
  		  titleCard.fadeOut('slow');
		    headerBarCase.show();
		$('#player').attr('src', 'https://www.youtube.com/embed/gtEvrqyguak?controls=0&autoplay');
		 $('#li-content-e').addClass('selected');
		});

		logo.on('click', function(){
		$('#header-bar-container').toggle();
	});