

class GeoCodingRepository {
   async getCoordinates(address: string): Promise<{ lat: number; lng: number }> {
        const response = await fetch(`https://photon.komoot.io/api/?q=${encodeURIComponent(address)}`)
        const json = await response.json()
        return {
            lat: json.features[0].geometry.coordinates[1],
            lng: json.features[0].geometry.coordinates[0]
        }
    }
}

export default new GeoCodingRepository();