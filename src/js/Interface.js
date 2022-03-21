export class Interface {
    static urls = []
    static arrFotos = []
    static ul = document.querySelector('.figure')
    static descricao = document.querySelector('.legenda--container')
    static span = document.querySelector('.autor')

    static constructImageURL (photoObj) { 
       const imageUrl = "https://farm" + photoObj.farm +".staticflickr.com/" + photoObj.server +"/" + photoObj.id + "_" + photoObj.secret + ".jpg"
        return imageUrl
    }

    static fotos (objeto){
        const arrFotos = objeto.photos.photo
        this.urls = []
        this.arrFotos = []

        arrFotos.forEach((foto) =>{
            this.urls.push(this.constructImageURL(foto))
            this.arrFotos.push(foto)
        })
    }

    static montaInterface(acc){
        this.ul.innerHTML = `<li><img src="${this.urls[acc]}"></li>`
        this.descricao.children[1].innerText = `${this.arrFotos[acc].title}`
        this.descricao.children[2].innerText = `Imagem filtrada por ${this.arrFotos[acc].owner}`
    }
}