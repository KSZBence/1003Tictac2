class ElemView{
    #shape = ""
    #index
    constructor(szuloElem, index){
        szuloElem.append(`<div class='box'><p></p></div>`)
        this.elem = szuloElem.last()
        this.pelem = this.elem.children("p")
        this.elem.on("click", ()=>{
            this.#sajatEsemenyKezelo("kivalaszt");
        })
    }

    setShape(shape){
        this.pelem.html(shape)
    }
    
    #sajatEsemenyKezelo(esemeny){
        const sajatesemeny = new CustomEvent(esemeny,{detail : this})
        window.dispatchEvent(sajatesemeny)
    }

}
export default ElemView