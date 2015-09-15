(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v2.4";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));





	var $overlay = $("<div id='overlay'> </div>")

	var $image = $("<img>");

	var $caption = $("<p> </p>");

//add overlay to body

	$overlay.appendTo("body");

//add images to overlay

	$overlay.append($image);

//add caption to overlay

	$overlay.append($caption);

//capture the click event browser default on images


	$(".supporting-content a").click(function(event){

	event.preventDefault();

	var $imageLocation = $(this).attr("href");

// update overlay with images

	$image.attr( "src", $imageLocation);


// show overlay

	$overlay.show();

  // get childs alt attribute of img and set caption.
  var $captionText = $(this).children("img").attr("alt");

  $caption.text($captionText);

});



// remove overlay when clicked

	$($overlay).click(function(){

		$(this).hide();
		
	});