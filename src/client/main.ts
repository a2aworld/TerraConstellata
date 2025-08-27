/**
 * This is the only script needed for the Terra Constellata app.
 * Its sole purpose is to find the main container in our HTML
 * and embed the "Heaven on Earth Map" into it.
 */

// A simple function to keep our code clean and focused.
function embedHeavenOnEarthMap(): void {
  // 1. Find the vessel: the 'app-container' div we created in our index.html.
  const container = document.getElementById('app-container');

  // 2. A necessary check to ensure the vessel exists, preventing any errors.
  if (container) {
    // 3. Create the heart of our app: the map iframe.
    const mapIframe = document.createElement('iframe');
    
    // 4. Set its source to your sacred map.
    mapIframe.src = "http://googleusercontent.com/maps/google.com/0";
    
    // 5. Command it to fill the entire screen, to be immersive.
    mapIframe.width = "100%";
    mapIframe.height = "100%";
    
    // 6. Place the map into the vessel, completing the creation.
    container.appendChild(mapIframe);
  } else {
    // This is our safety net. If the container is missing, we'll know precisely why.
    console.error('Fatal Error: The #app-container was not found. Please check src/client/index.html.');
  }
}

// 7. Execute the function. Bring the map to life.
embedHeavenOnEarthMap();