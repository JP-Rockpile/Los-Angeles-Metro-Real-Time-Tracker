  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1IjoianByb2NrcGlsZSIsImEiOiJja3ByMjgzMWcwMGczMm9ueG9mNTljZ2o0In0.WStS7AFu0gdbbRe34ijn9g';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-118.243048, 34.01988],
    zoom: 10,
  });
  
  
  async function run(){
    // get rail data    
	const locations = await getRailLocations();
	console.log(new Date());
	console.log(locations);
    const length = locations.length;

    for (let i=0; i<length; i++){
        a = locations[i];
        let long = a.longitude;
        let lat = a.latitude;

        var marker = new mapboxgl.Marker()
            .setLngLat([long, lat])
            .addTo(map);
    }
    
    timer
	    setTimeout(run, 15000); 

}

// equest rail data
async function getRailLocations(){
	const url = 'https://api.metro.net/agencies/lametro-rail/vehicles/';
	const response = await fetch(url);
	const json     = await response.json();
	return json.items;
}

  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }