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
  		$('#li-intro').removeClass('selected');
  		$('#li-limbic').removeClass('selected');
  		$('#li-xd-slides').removeClass('selected');
  		$('#li-case').removeClass('selected');
  		$('#li-spark').removeClass('selected');
  	}

  	//headerBar.hide();
  	
  	$('#li-limbic').on('click', function(){
  		hideEverything();
  		removeSelected();
  		titleCard.fadeOut('slow');
		headerBarLimbic.show();
		$('#player').attr('src', 'content/limbic-video.html');
		$('#li-limbic').addClass('selected');
  	});


  	$('#li-spark').on('click', function(){
  		hideEverything();
  		removeSelected();
  		titleCard.fadeOut('slow');
		headerBarSpark.show();
		$('#player').attr('src', 'https://spark.adobe.com/page/5VpWQHBdx1unT/');
		$('#li-spark').addClass('selected');
  	});

  	 $('#li-intro').on('click', function(){
  	 	hideEverything();
  		removeSelected();
  		titleCard.fadeIn('slow');
		$('#player').attr('src', 'content/opening-video.html');
		$('#li-intro').addClass('selected');
  	});
  	   	 $('#li-xd-slides').on('click', function(){
  	   	hideEverything();
  		removeSelected();
  		titleCard.fadeOut('slow');
		headerBarXd.show();
		$('#player').attr('src', 'content/xd.html');
		$('#li-xd-slides').addClass('selected');
  	});


  	   	$('#li-case').on('click', function(){
  	   	hideEverything();
  		removeSelected();
  		titleCard.fadeOut('slow');
		headerBarCase.show();
		$('#player').attr('src', 'https://www.youtube.com/embed/gtEvrqyguak?controls=0&autoplay');
		$('#li-case').addClass('selected');
		});

		logo.on('click', function(){
		$('#header-bar-container').toggle();
	});