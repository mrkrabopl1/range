class Model{

    constructor(items){
        this._items=items;
        this._selectedIndex=-1
    }
    getItem(index) {
        if (this._items[Number(index)]) {
            return this._items[Number(index)]
        }
    }
    cons(){console.log(9)}
    changeMax(item){
        this._items.splice(this._selectedIndex,1,Number(item))
    }
    changeMin(item){
        this._selectedIndex=0;
        this._items[this._selectedIndex]=item
    }
}
module.exports=Model;
