import Model from "../model/Model.js"
import ElemView from "../view/ElemView.js"
import JatekterView from "../view/jatekterView.js"

class Controller{
    constructor(){
        let main = $("main")
        this.MODELL = new Model
        this.JATEKTER = new JatekterView(main)
        
        
        $(window).on("kivalaszt", (event) => {
            this.MODELL.setAllapot()
            event.detail.setShape(this.MODELL.getAllapot())
        });
    }
    
}
export default Controller