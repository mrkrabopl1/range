class Controller{


    constructor(model,domElementClass) {
        this._domElementClass = domElementClass;
        this.domObj = {}
        this._model = model
    }

    changeMax(arg){
        if (arg) {

            if (Number(arg)) {
                this._model.changeMax(arg);
                return arg
            }
            else {

                let item = window.prompt('Please input number', '');
                this.changeMax(item)
                return false
            }
        }
        else{
            let item = window.prompt('Add item', '');

            if (Number(item)) {

                this._model.changeMax(item);
            } else {

                item = window.prompt('Please input number', '');
                this.changeMax(item)

            }
            return false
        }

    }
     compareMaxItem(maxElem){
        if(maxElem>this._model._items[0]){
            return true
        }
    }
    recreateElem(){
        let numberInterval=this._model._items.length-1
        let ScaleInterval=(this._model._items.slice().pop()-this._model._items[0])/numberInterval
        for (let i=1 ;i<numberInterval;i++){
            this._model._items[i]=this._model._items[0]+ScaleInterval*i
        }
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
module.exports=Controller
