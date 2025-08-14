# FerrataFinder

A web application to find and visualize via ferrata routes with travel time calculations and interactive mapping.

## Features

- **Interactive Map**: View via ferrata locations on a map with different colored markers based on travel time
- **Travel Time Calculation**: Calculate travel times from your starting location using different transportation modes (car, public transport, bicycle, walking)
- **Flexible Label Display**: Choose to display ferrata duration, names, or both on map markers
- **Overlap Detection**: Automatically stacks labels when multiple ferrata are close together
- **Start Location Marker**: Big red marker shows your departure point
- **Color-coded Distance Legend**: Easy-to-read legend showing travel time ranges

## Setup Instructions

### 1. Clone or Download the Project

```bash
git clone [your-repository-url]
cd FerrataFinder
```

### 2. Set up Google Maps API Key

1. Get a Google Maps API key:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the following APIs:
     - Maps JavaScript API
     - Geocoding API
     - Directions API
   - Create an API key with appropriate restrictions

2. Configure the API key:
   - Copy `env-config.template.js` to `env-config.js`:
     ```bash
     cp env-config.template.js env-config.js
     ```
   - Edit `env-config.js` and replace `YOUR_API_KEY_HERE` with your actual API key:
     ```javascript
     window.CONFIG = {
         GOOGLE_MAPS_API_KEY: 'your_actual_api_key_here'
     };
     ```

### 3. Run the Application

Simply open `index.html` in a web browser. No server required!


## Usage

1. **Select Transportation Mode**: Choose how you want to travel (car, public transport, bicycle, walking)

2. **Choose Label Display**:
   - Check "Durée de la ferrata" to show duration on markers
   - Check "Nom de la ferrata" to show names on markers
   - You can select both or neither

3. **Set Starting Location**: Enter your departure city/address and click "Calculer"

4. **View Results**:
   - Your start location appears as a big red marker
   - Ferrata locations are color-coded by travel time:
     - Green: < 1 hour
     - Yellow: 1-1.5 hours
     - Orange: 1.5-2 hours
     - Red: 2-3 hours
     - Purple: 3-6 hours
     - Black: > 6 hours
     - Gray: No travel data available

5. **Click on Markers**: Get detailed information and directions to each ferrata
