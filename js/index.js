<script>
		
	// Our List of ideas
	var app = [
		'Messaging app', 
		'Marketplace',
		'Yelp',
		'Instagram',
		'Tinder',
		'SnapChat',
		'Netflix',
		'Spotify',
		'A barcode reader',
		'Twitter',
		'News app',
		'Pinterest',
		'Cooking app'
	];
	
	// Our List of titles
	var titles = [
		'Students',
		'Bands',
		'Travellers',
		'Shoe enthuasists',
		'Cops',
		'Job Seekers',
		'Parents',
		'Teachers',
		'Chefs',
		'Babysitters',
		'Thrift Stores',
		'Tech Enthuasists',
		'Actors'
	];
	//math.floor is largest integer less than or equal to a given number
	//Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive) and app.length is 13
	
	var randomNumber = Math.floor(Math.random()*app.length);
	//returns a random integer from 0 to 12
	
	var appName = app[randomNumber];
	var titlesName = titles[randomNumber];
	
	//document.write(randomNumber);
	
	document.write(appName + " for " + titlesName);
	//document.write(app.length);
	
	</script>