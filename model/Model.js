class Model{
    #allapot
    constructor(){
        this.#allapot="X"
    }
    setAllapot(){
        if (this.#allapot === "X") {
            this.#allapot = "O"
        }else{
            this.#allapot = "X"
        }
    }
    getAllapot(){
        return this.#allapot
    }

}
export default Model