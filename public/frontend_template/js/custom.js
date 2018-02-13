jQuery(function () {
	"use strict";
    
    /*global jQuery, $*/
	jQuery(document).ready(function(){
		
		// Customize Select BOX
		jQuery('select').select2();
		
		// Featured Properties Image Slider
		jQuery('.fp-images').bxSlider({
			controls:false
		});
		
		// Single Properties Area Slider
		jQuery('.spi-slider').bxSlider({
			pagerCustom: '.spi-slider-pager',
			controls:false
		});		
		
		// Close Menu After Click On Mobile View
		jQuery('.navbar-collapse').click('li', function() {
			jQuery('.navbar-collapse').collapse('hide');
		});
		
		// Image Pop up
		jQuery('.image-popup').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-fade',
		});	
		
		// Embedded Pop up
		jQuery('.embedded-popup').magnificPopup({
			//disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
		
		//Prev & Next For Tab
		jQuery('.next-tab').on('click', function(e) {
			jQuery('.nav-tabs > .active').next('li').find('a').trigger('click');
			e.preventDefault();
		});
		jQuery('.prev-tab').on('click', function(e) {
			jQuery('.nav-tabs > .active').prev('li').find('a').trigger('click');
			e.preventDefault();
		});
		
		
		//Initialize filterizr with default options
        jQuery('.filtr-container').filterizr();
		
		jQuery('.simplefilter li').on('click', function() {
			jQuery(".simplefilter li").removeClass("active");
			jQuery(this).addClass("active");
		});

	});
	
}());

	// When the window has finished loading create our google map below
	google.maps.event.addDomListener(window, 'load', init);

	function init() {
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 16,

			// The latitude and longitude to center the map (always required)
			center: new google.maps.LatLng(40.6700, -73.9400), // New York

			// How you would like to style the map. 
			// This is where you would paste any style found on Snazzy Maps.
			styles: []
		};

		// Get the HTML DOM element that will contain your map 
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('office-map');

		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);

		// Let's also add a marker while we're at it
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(40.6700, -73.9400),
			map: map,
			title: 'Snazzy!'
		});
	}