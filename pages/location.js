import React, { useState } from 'react'

function Location() {

    const [Location, setLocation] = useState('')

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getPosition, handleLocationError);
        } else {
            alert("Geolocation is not supported by this browser.")
        }
      }
    
      function getPosition(position) {setLocation(position.coords)}

// get city name
      async function getCityName(latitude, longitude) {
        const API_KEY = 'YOUR_GOOGLE_API_KEY';
        const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`;
      
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
      
          if (data.results.length > 0) {
            const city = data.results[0].address_components.find(
              (component) => component.types.includes('locality')
            );
      
            if (city) {
              return city.long_name;
            }
          }
      
          // If no city found
          return 'City not found';
        } catch (error) {
          console.error('Error fetching data from Google Maps API:', error);
          return 'Error fetching data';
        }
      }
      
      // Example usage
      const latitude = 37.7749;
      const longitude = -122.4194;
      
      getCityName(latitude, longitude ).then((cityName) => {
        console.log('City Name:', cityName);
      });
      

      console.log(Location)

      function handleLocationError(error) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.")
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.")
            break;
          case error.TIMEOUT:
            alert("The request to get user location timed out.")
            break;
          case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.")
            break;
        }
      }



  return (
    <div>
        <button className='bg-blue-500 p-4' onClick={()=>getLocation()}>click</button>
        Location
        {/* {Location && 
            <img src={`https://www.google.com/maps?q=${Location.coords.latitude}, ${Location.coords.longitude}`}
                className='h-[100px] w-[100px]'
            alt="" />
        } */}
    </div>
  )
}

export default Location