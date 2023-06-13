const GeoLocation = () => {
    let lat = ''
    let lon = ''

    const getCoordinates = () => {
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(showPosition)
    }

    const showPosition = (position) => {
        lat = position.coords.latitude
        lon = position.coords.longitude

        console.log(`Lat: ${lat} \nLong: ${lon}`)
    } 

    return { getCoordinates }
}


GeoLocation().getCoordinates()