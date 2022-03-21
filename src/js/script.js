import { Api } from "./Api.js";
import { GeoLocation } from "./GeoLocation.js";
import { Interface } from "./Interface.js";

GeoLocation.getLocation()

const button = document.querySelector('.div--button')
const form = document.querySelector('form')
let acc = 0

form.addEventListener('submit', async (event)=>{
    event.preventDefault()
    acc = 0
    const arr = GeoLocation.coord
    const arrForm = event.target
    const termo = arrForm[0].value
    if(arr.length === 2){
        const obj = await Api.pegaFotos(arr[0],arr[1],termo)
        Interface.fotos(obj)
        Interface.montaInterface(0)
    }else{
        const obj =  await Api.pegaFotos(-13,-38.516667,termo)
        Interface.fotos(obj)
        Interface.montaInterface(0)
    }
})

button.addEventListener('click', (event)=>{
    if(event.target.className === 'proxima--img' && acc < 4){
        acc++
        Interface.montaInterface(acc)
    }
    if(event.target.className === 'img--anterior' && acc > 0){
        acc--
        Interface.montaInterface(acc)
    }
})




