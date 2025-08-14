
// const convertCSVtoWaypoints = require('./parse_csv'); // Adjust the path accordingly


// const waypoints = convertCSVtoWaypoints('data.csv');
// colors : https://sites.google.com/site/gmapsdevelopment/

function formatDuration(duration) {
	if (!duration || typeof duration !== 'string') return null;
	// Handle formats like "3h", "1h30", "2h45", etc.
	if (duration.includes("h")) {
		// Split by "h" to get hours and minutes
		var parts = duration.split("h");
		var hours = parts[0];
		var minutes = parts[1] || "00"; // Default to "00" if no minutes

		// Ensure minutes is always 2 digits
		if (minutes.length === 1) {
			minutes = minutes + "0";
		}

		return hours + ":" + minutes;
	}

	// If no "h" found, return as is
	return duration;
}
var markerIcons = {
	gray: "http://labs.google.com/ridefinder/images/mm_20_gray.png",
	green: "http://labs.google.com/ridefinder/images/mm_20_green.png",
	orange: "http://labs.google.com/ridefinder/images/mm_20_orange.png",
	purple: "http://labs.google.com/ridefinder/images/mm_20_purple.png",
	red: "http://labs.google.com/ridefinder/images/mm_20_red.png",
	white: "http://labs.google.com/ridefinder/images/mm_20_white.png",
	yellow: "http://labs.google.com/ridefinder/images/mm_20_yellow.png",
	black: "http://labs.google.com/ridefinder/images/mm_20_black.png",
	blue: "http://labs.google.com/ridefinder/images/mm_20_blue.png",
	brown: "http://labs.google.com/ridefinder/images/mm_20_brown.png",
	shadow: "http://labs.google.com/ridefinder/images/mm_20_shadow.png"
};


function getLatLngFromCity(cityName, callback) {
	const geocoder = new google.maps.Geocoder();

	geocoder.geocode({ address: cityName }, function(results, status) {
		if (status === google.maps.GeocoderStatus.OK) {
			const location = results[0].geometry.location;
			const latitude = location.lat();
			const longitude = location.lng();
			callback({ lat: latitude, lng: longitude }); // Call the callback with the result
		} else {
			console.error("Geocode was not successful for '" + cityName + "' for the following reason:", status);
		}
	});
}

function display_map() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 47.05048, lng: 8.30635 }, // Zurich, Switzerland
		zoom: 8
	});

	var travelMode = null;
	var openInfoWindow = null; // Variable to store the currently open InfoWindow
	var startLocation = null;
	var startMarker = null; // Store the start location marker
	var directionsService = new google.maps.DirectionsService();
	var directionsRenderer = new google.maps.DirectionsRenderer({
		map: map,
		suppressMarkers: true
	});

	var markersData = []; // Store marker and waypoint data

	// Function to get the selected label options
	function getSelectedLabelOptions() {
		var checkboxes = document.getElementsByName('labelOption');
		var options = [];
		for (var i = 0; i < checkboxes.length; i++) {
			if (checkboxes[i].checked) {
				options.push(checkboxes[i].value);
			}
		}
		return options; // return empty array if none selected
	}

	// Function to get label text based on options and waypoint
	function getLabelText(waypoint, options) {
		var texts = [];

		if (options.includes('name') && waypoint.name) {
			texts.push(waypoint.name);
		}

		if (options.includes('duration')) {
			var duration = formatDuration(waypoint.viaFerrataDuration);
			if (duration) {
				texts.push(duration);
			}
		}

		return texts.length > 0 ? texts.join('\n') : null;
	}

	// Function to calculate distance between two lat/lng points in meters
	function calculateDistance(lat1, lng1, lat2, lng2) {
		var R = 6371000; // Earth's radius in meters
		var dLat = (lat2 - lat1) * Math.PI / 180;
		var dLng = (lng2 - lng1) * Math.PI / 180;
		var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
				Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
				Math.sin(dLng/2) * Math.sin(dLng/2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		return R * c;
	}

	// Function to detect overlapping markers and assign offset levels
	function calculateLabelOffsets() {
		var offsetMap = {};
		var overlapThreshold = 5000; // 5km threshold for considering markers as overlapping

		markersData.forEach(function(markerData, index) {
			var offsetLevel = 0;
			var currentLat = markerData.waypoint.latLng.lat;
			var currentLng = markerData.waypoint.latLng.lng;

			// Check against all previous markers
			for (var i = 0; i < index; i++) {
				var otherMarkerData = markersData[i];
				var otherLat = otherMarkerData.waypoint.latLng.lat;
				var otherLng = otherMarkerData.waypoint.latLng.lng;

				var distance = calculateDistance(currentLat, currentLng, otherLat, otherLng);

				if (distance < overlapThreshold) {
					// Found an overlapping marker, increase offset level
					offsetLevel = Math.max(offsetLevel, (offsetMap[i] || 0) + 1);
				}
			}

			offsetMap[index] = offsetLevel;
		});

		return offsetMap;
	}

	// Function to update all marker labels with overlap detection
	function updateMarkerLabels() {
		var selectedOptions = getSelectedLabelOptions();
		var offsetMap = calculateLabelOffsets();

		markersData.forEach(function(markerData, index) {
			var labelText = getLabelText(markerData.waypoint, selectedOptions);
			if (labelText && labelText.trim()) {
				var offsetLevel = offsetMap[index] || 0;
				var yOffset = -26 - (offsetLevel * 25); // Base offset -26px, then -25px for each overlap level

				markerData.marker.setLabel({
					color: '#ffffff',
					fontWeight: 'bold',
					fontSize: '10px',
					text: labelText,
					className: 'marker-label marker-label-offset-' + offsetLevel
				});

				// Store the offset for CSS styling
				markerData.offsetLevel = offsetLevel;
			} else {
				markerData.marker.setLabel(null);
				markerData.offsetLevel = 0;
			}
		});
	}

	// Function to create start location marker
	function createStartMarker(location) {
		// Remove existing start marker if it exists
		if (startMarker) {
			startMarker.setMap(null);
		}

		// Use geocoder to get coordinates from location string
		var geocoder = new google.maps.Geocoder();
		geocoder.geocode({ address: location }, function(results, status) {
			if (status === google.maps.GeocoderStatus.OK) {
				var position = results[0].geometry.location;

				// Create big red marker for start location
				startMarker = new google.maps.Marker({
					position: position,
					map: map,
					icon: {
						url: 'data:image/svg+xml;base64,' + btoa(`
							<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
								<circle cx="20" cy="20" r="18" fill="#ff0000" stroke="#ffffff" stroke-width="3"/>
								<circle cx="20" cy="20" r="8" fill="#ffffff"/>
							</svg>
						`),
						scaledSize: new google.maps.Size(40, 40),
						anchor: new google.maps.Point(20, 20)
					},
					title: 'Lieu de départ: ' + location,
					zIndex: google.maps.Marker.MAX_ZINDEX + 100
				});
			}
		});
	}

	waypoints.forEach(function(waypoint) {
		getLatLngFromCity(waypoint.city, function(latLng) {
			waypoint.latLng = latLng;

			var marker = new google.maps.Marker({
				position: waypoint.latLng,
				map: map,
				animation: google.maps.Animation.DROP,
				title: waypoint.name,
				icon: {
					url: markerIcons.gray,
					scaledSize: new google.maps.Size(20, 34)
				},
				label: {
					color: '#ffffff',
					fontWeight: 'bold',
					fontSize: '12px',
					text: getLabelText(waypoint, getSelectedLabelOptions()),
					className: 'marker-label'
				}
			});

			var label = new google.maps.InfoWindow({
				content: "<h2 style='color: #007bff;'>"+ waypoint.name +"</h2>" +
				"<hr>" +
				"<ul>" +
                "<li><b>Durée de la via ferrata :</b> " + waypoint.viaFerrataDuration + "</li>" +
                "<li><b>Lieu :</b> " + waypoint.city + "</li>" +
                "<li><b>Difficulté :</b> " + waypoint.difficulty + "</li>" +
                "<li><b>Caractéristiques :</b> " + waypoint.characteristics + "</li>" +
                "<li><b>Lien :</b> <a href='" + waypoint.link + "' target='_blank' style='color: #007bff; text-decoration: underline;'>Visitez le site</a></li>" +
                "</ul>"
			});

			marker.addListener('click', function() {
				// Close any previously open InfoWindow
				if (openInfoWindow) {
					openInfoWindow.close();
				}
				// Open the InfoWindow for the marker
				label.open(map, marker);
				openInfoWindow = label;
				// Set a higher zIndex for the InfoWindow to ensure it's displayed above the train tip
				label.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);

				// Calculate and display directions
				calculateDirections(map, directionsService, directionsRenderer, startLocation, waypoint.latLng, travelMode);
			});

			// Add an event listener to close the directions when the InfoWindow is closed
			google.maps.event.addListener(label, 'closeclick', function() {
				directionsRenderer.setMap(null); // Clears the directions from the map
			});

			// Store marker data for later use
			markersData.push({
				waypoint: waypoint,
				marker: marker,
				label: label
			});
		});
	});

	// Add single event listener for form submission
	document.getElementById("locationForm").addEventListener("submit", function(event) {
		event.preventDefault(); // Prevent form submission
		if (openInfoWindow) {
			openInfoWindow.close();
		}
		startLocation = document.getElementById("startLocation").value;
		travelMode = getTravelMode();

		// Create start location marker
		createStartMarker(startLocation);

		// Calculate travel times for all waypoints
		markersData.forEach(function(markerData) {
			calculateTravelTimes(startLocation, markerData.waypoint, markerData.label, markerData.marker, travelMode);
		});
	});

	// Add event listener for label option changes
	var checkboxes = document.getElementsByName('labelOption');
	for (var i = 0; i < checkboxes.length; i++) {
		checkboxes[i].addEventListener('change', function() {
			updateMarkerLabels();
		});
	}
}

function getTravelMode() {
	var travelModeText = document.getElementById("travelMode").value;
	if (travelModeText == "DRIVING") {
		var travelMode = google.maps.TravelMode.DRIVING;
	} else if (travelModeText == "WALKING") {
		var travelMode = google.maps.TravelMode.WALKING;
	} else if (travelModeText == "BICYCLING") {
		var travelMode = google.maps.TravelMode.BICYCLING;
	} else if (travelModeText == "TRANSIT") {
		var travelMode = google.maps.TravelMode.TRANSIT;
	}
	return travelMode;
}


function calculateDirections(map, directionsService, directionsRenderer, origin, destination, travelMode) {
	if (travelMode == null || origin == null || destination == null) {
		return;
	}

	var request = {
		origin: origin,
		destination: destination,
		travelMode: travelMode
	};

	directionsService.route(request, function(result, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			directionsRenderer.setDirections(result);
			directionsRenderer.setMap(map);
		} else {
			console.error("Directions request failed with status: " + status);
		}
	});
}


function calculateTravelTimes(startLocation, waypoint, label, marker, travelMode) {

	var directionsService = new google.maps.DirectionsService();

	var departureTime = new Date();
	departureTime.setHours(8, 30, 0);

	var request = {
		origin: startLocation,
		destination: new google.maps.LatLng(waypoint.latLng.lat, waypoint.latLng.lng),
		travelMode: travelMode,
		transitOptions : {departureTime: departureTime}
	};

	directionsService.route(request, function(response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			var route = response.routes[0];
			var travelTimeText = route.legs[0].duration.text;
			var travelTimeHours = route.legs[0].duration.value / 3600;
			// waypoint.time_by_car = travelTime;

			// Update label info window with updated travel time
			label.setContent("<h2 style='color: #007bff;'>"+ waypoint.name +"</h2>" +
				"<hr>" +
				"<ul>" +
                "<li><b>Temps de déplacement :</b> " + travelTimeText + "</li>" +
                "<li><b>Durée de la via ferrata :</b> " + waypoint.viaFerrataDuration + "</li>" +
                "<li><b>Lieu :</b> " + waypoint.city + "</li>" +
                "<li><b>Difficulté :</b> " + waypoint.difficulty + "</li>" +
                "<li><b>Caractéristiques :</b> " + waypoint.characteristics + "</li>" +
                "<li><b>Lien :</b> <a href='" + waypoint.link + "' target='_blank' style='color: #007bff; text-decoration: underline;'>Visitez le site</a></li>" +
                "</ul>");
						// Set the marker color to yellow

						// colors coresponding to the travel time
			var colorUrl = markerIcons.gray;
			if (travelTimeHours < 1) {
				colorUrl = markerIcons.green;
			} else if (travelTimeHours < 1.5) {
				colorUrl = markerIcons.yellow;
			} else if (travelTimeHours < 2) {
				colorUrl = markerIcons.orange;
			} else if (travelTimeHours < 3) {
				colorUrl = markerIcons.red;
			} else if (travelTimeHours < 6) {
				colorUrl = markerIcons.purple;
			} else {
				colorUrl = markerIcons.black;
			}
			marker.setIcon({url: colorUrl, scaledSize: new google.maps.Size(20, 34)});
		} else {
			var colorUrl = markerIcons.gray;
			label.setContent("<h2 style='color: #007bff;'>"+ waypoint.name +"</h2>" +
				"<hr>" +
				"<ul>" +
                "<li><b>Temps de déplacement :</b> Non disponible</li>" +
                "<li><b>Durée de la via ferrata :</b> " + waypoint.viaFerrataDuration + "</li>" +
                "<li><b>Lieu :</b> " + waypoint.city + "</li>" +
                "<li><b>Difficulté :</b> " + waypoint.difficulty + "</li>" +
                "<li><b>Caractéristiques :</b> " + waypoint.characteristics + "</li>" +
                "<li><b>Lien :</b> <a href='" + waypoint.link + "' target='_blank' style='color: #007bff; text-decoration: underline;'>Visitez le site</a></li>" +
                "</ul>");
			marker.setIcon({url: colorUrl, scaledSize: new google.maps.Size(20, 34)});

		}
	});
}
