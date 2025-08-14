import googlemaps

api_key = 'AIzaSyD34TaKsZO2ZelIloIwKW4kfxq0wxn4-8M'

gmaps = googlemaps.Client(key=api_key)

# Geocoding an address
origin = 'Yverdon-les-Bains, Switzerland'
destination = 'Leysin'

# distance with train
res = gmaps.distance_matrix(origin, destination, mode='transit', transit_mode='train')	# transit_mode can be 'bus', 'subway', 'train', 'tram', 'rail'
print(res)

# format it in a table
for (key, value) in res.items():
	print(key, value)
