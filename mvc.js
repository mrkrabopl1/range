
class Model{
    constructor(items){
        this._items=items;
        this._selectedIndex=-1
    }
    changeMax(item){
        this._items.splice(this._selectedIndex,1,Number(item))
    }
    changeMin(item){
        this._selectedIndex=0;
        this._items[this._selectedIndex]=item
    }
}

model=new Model([0,5,10])
class Controller{
    constructor(model,domElementClass) {
        this._domElementClass = domElementClass;
        this.domObj = {}
        this._model = model
    }
   changeMax(){

        const item=window.prompt('Add item:', '');

         this._model.changeMax(item);

    }

    createDOMElem(domElementClass){
        let obj={}

        domElementClass.forEach(function(doms){
             obj[doms]=[];
            console.log(obj[doms])
            let count=1;
            while(document.querySelector(`.${doms+count}`)){

                obj[doms].push(document.querySelector(`.${doms+count}`))
                count++;
            }


        });
        this.domObj=obj;

    }
    rebuildList(className){

        for(let i=0; i<this._model._items.length; i++){


             this.domObj[className][i].dataset.label=this._model._items[i]
        }

    }

    getDOMElem(className,idx){
       if (idx+1>this.domObj[className].length) {
           idx=-1;
       }
        return this.domObj[className][idx]
    }
    changeDOMElem(elem,item){
        elem.dataset.label=item;

    }

    log(){
        console.log(this._model._items)
        console.log(this.domObj)
    }
}

cotrol= new Controller(model,['slider-scale-big','jjj']) ;


cotrol.createDOMElem(['slider-scale-big','jjj'])
cotrol.rebuildList('slider-scale-big')

let max=document.getElementById("btnmax")
max.addEventListener("click",function () {
    cotrol.changeMax();
    cotrol.log()
    cotrol.rebuildList('slider-scale-big')

})
// pip1.rebuildList()
