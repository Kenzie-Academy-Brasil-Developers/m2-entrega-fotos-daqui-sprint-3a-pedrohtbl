import { Api } from "./Api.js"

export class GeoLocation{

    static coord = []

    static showError(error){
        console.log(error)
    }
    static showPosition (positon){
        let arr = []
        arr.push(positon.coords.latitude)
        arr.push(positon.coords.longitude)
        GeoLocation.getTermo(arr)
    }

    static getLocation (){
        if(navigator.geolocation){
           navigator.geolocation.getCurrentPosition(this.showPosition,this.showError)
        }else{
            console.log("Geolocation is not supported by this browser.")
        }
    }

    static getTermo (arr){
        this.coord = arr
    }
}