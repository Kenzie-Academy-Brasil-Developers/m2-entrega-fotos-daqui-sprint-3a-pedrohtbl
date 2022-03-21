import { Interface } from "./Interface.js"

export class Api {
    static proxy = 'https://shrouded-mountain-15003.herokuapp.com/'
    static URL = 'https://flickr.com/services/rest/?api_key=a432ac2d7ec50da7cbe73d305066ff41&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&'

    static async pegaFotos (latitude, longitude, busca){
        const response = await fetch(`${this.proxy}${this.URL}lat=${latitude}&lon=${longitude}&text=${busca}`)
        const data = await response.json()
        
        return data
    }
}