// class EventEmitter {
//     constructor() {
//         this._events = {};
//     }
//     on(evt, listener) {
//         (this._events[evt] || (this._events[evt] = [])).push(listener);
//
//         return this;
//
//     }
//     emit(evt, arg) {
//         (this._events[evt] || []).slice().forEach(lsn => lsn(arg));
//     }
// }
// class ListModel extends EventEmitter {
//     constructor(items) {
//         super();
//         this._domElement = domElement
//         this._items = items || []; //задает в объект model текстовые блоки
//         this._selectedIndex = -1;
//         this.domObj={};
//
//     }
//
//     getItems() {
//         return this._items.slice(); //дублирует массив items
//     }
//
//
//
//     addItem(item) {
//         this._items.push(item);
//         this.emit('itemAdded', item);
//     }
//
//     removeItemAt(index) {
//         const item = this._items.splice(index, 1)[0];
//         this.emit('itemRemoved', item);
//         if (index === this._selectedIndex) {
//             this.selectedIndex = -1;
//         }
//     }
//
//     get selectedIndex () {
//         return this._selectedIndex;
//     }
//
//     set selectedIndex(index) {
//         const previousIndex = this._selectedIndex;
//         this._selectedIndex = index;
//         this.emit('selectedIndexChanged', previousIndex);
//     }
// }
// class ListView extends EventEmitter {
//     constructor(model, elements) {
//         super();
//         this._model = model;
//         this._elements = elements;
//
//         // attach model listeners
//         model.on('itemAdded', () => this.rebuildList())
//             .on('itemRemoved', () => this.rebuildList());
//
//         // attach listeners to HTML controls
//         elements.list.addEventListener('change',
//             e => this.emit('listModified', e.target.selectedIndex));
//         elements.addButton.addEventListener('click',
//             () => this.emit('addButtonClicked'));
//         elements.delButton.addEventListener('click',
//             () => this.emit('delButtonClicked'));
//     }
//
//     show() {
//         this.rebuildList();
//     }
//
//     rebuildList() {
//         const list = this._elements.list;
//         console.log(list.options.length);
//         list.options.length = 0;
//         console.log(list.options.length);
//         this._model.getItems().forEach(
//             item => list.options.add(new Option(item)));
//         console.log(list.options.length);
//         this._model.selectedIndex = -1;
//     }
// }
//
// /**
//  * The Controller. Controller responds to user actions and
//  * invokes changes on the model.
//  */
// class ListController {
//     constructor(model, view) {
//         this._model = model;
//         this._view = view;
//
//         view.on('listModified', idx => this.updateSelected(idx));
//         view.on('addButtonClicked', () => this.addItem());
//         view.on('delButtonClicked', () => this.delItem());
//     }
//
//     addItem() {
//         const item = window.prompt('Add item:', '');
//         if (item) {
//             this._model.addItem(item);
//         }
//     }
//
//     delItem() {
//         const index = this._model.selectedIndex;
//         if (index !== -1) {
//             this._model.removeItemAt(index);
//         }
//     }
//
//     updateSelected(index) {
//         this._model.selectedIndex = index;
//     }
// }
//
//
//
// window.addEventListener('load', () => {
//     const model = new ListModel([0, 50,100]),
//         view = new ListView(model, {
//
//             'addButton' : document.getElementById('plusBtn'),
//
//             'delButton' : document.getElementById('minusBtn')
//         }),
//
//         controller = new ListController(model, view); //инициализация контроллера
//
//
//
//     view.show();
// });
//
//
// let count=1;
// while(document.querySelector(`.slider-scale-big${count}`)){
//     console.log(document.querySelector(`.slider-scale-big${count}`))
//     count++
// }
let slider=document.querySelector(".slider-scale")
class Model{
    cons(){console.log(9)}
    constructor(cords,progressBars){
        this._progressBars=progressBars||[];
        this._cords=cords;
        this._selectedIndex=-1
        this.domObj={}
    }
    changeMax(item){
        this._cords.splice(this._selectedIndex,1,Number(item))
    }
    changeMin(item){
        this._selectedIndex=0;
        this._cords[this._selectedIndex]=item
    }
    getItem(index){
        if(this._cords[index]){
            return this._cords[index]
        }
    }
}

model=new Model([0,5,10])
class Test{


    constructor(model,domElementClass) {
        this._domElementClass = domElementClass;

        this._model = model
    }

    compareMaxItem(maxElem){
        if(maxElem>this._model._cords[0]){
            return true
        }
    }
    recreateElem(){
        let numberInterval=this._model._cords.length-1
        let ScaleInterval=(this._model._cords.slice().pop()-this._model._cords[0])/numberInterval
        for (let i=1 ;i<numberInterval;i++){
            if((this._model._cords[0]+ScaleInterval*i)%1===0){
                this._model._cords[i]=(this._model._cords[0]+ScaleInterval*i)
            }
            else {
                this._model._cords[i]=(this._model._cords[0]+ScaleInterval*i).toFixed(2)
            }

        }
    }
   changeMax(arg){

        if (arg) {

            if (Number(arg)&&this.compareMaxItem(arg)) {
                this._model.changeMax(arg);
            }
            else {


                let item = window.prompt('Please input number', '');
                if(item===null){

                }
                else{
                    this.changeMax(item)
                }


            }
        }
        else{
            let item = window.prompt('Add item', '');
            if (Number(item)&&this.compareMaxItem(item)) {

                this._model.changeMax(item);
            } else {
                if(item===null){

                }
                else{
                    item = window.prompt('Please input number', '');
                    if(item===null){

                    }
                    else{
                        this.changeMax(item)
                    }


                }


            }
        }

   }

   addDOMArr(className,styles,teg,n){
     this._model.domObj[className] = [];
     console.log(this._model.domObj[className])
     for (let i=0;i<n;i++) {
         let DOMElem = document.createElement(teg)
         DOMElem.className = className + " " + className + i
         Object.assign(DOMElem.style, styles)
         if(teg==="a"){
             DOMElem.href="#"
         }




             this._model.domObj[className].push(DOMElem)
             console.log(this._model.domObj)

     }
   }

   createDOMArr(domElementClass){
        let obj={}

        domElementClass.forEach(function(doms){
             obj[doms]=[];
            console.log(obj)
            let count=1;
            while(document.querySelector(`.${doms+count}`)){

                obj[doms].push(document.querySelector(`.${doms+count}`))
                count++;
            }


        });
        this._model.domObj=obj;

    }
   rebuildList(){

        for(let i=0; i<this._model._cords.length; i++){


            this._model.domObj["slider-scale-tick"][i].dataset.label=this._model._cords[i]
        }

    }

    getDOMElem(className,idx){
       if (idx+1>this._model.domObj[className].length) {
           idx=-1;
       }
        return this._model.domObj[className][idx]
    }
    changeDOMElem(elem,item){
        elem.dataset.label=item;

    }
    createCors(n,min=0,max=100){
        let interval=(max-min)/n
        this._model._cords=[]
        for(let i=0;i<=n;i++){
            if((min+interval*i)%1===0){
                this._model._cords.push(min+interval*i)
            }
            else {
                this._model._cords.push((min+interval*i).toFixed(2))
            }

        }

        console.log(this._model._cords)


    }


}
class View{
    constructor(model) {
        this._model=model

    }
    show(){
        let object=window.prompt('Add item', '');
    }
    addElemInDOM(parent,child){
        parent.appendChild(child)

    }
    createScale(m){
        slider.innerHTML=''
        slider.appendChild(this._model.domObj["slider-scale-tick"][0])
        for(let i=0;i<m;i++){

                slider.appendChild(this._model.domObj["progress"][i])

                slider.appendChild( this._model.domObj["slider-scale-tick"][i+1])
        }
    }
    createMeasure(m){
        for(let i=0;i<=m;i++){
            model.domObj["slider-scale-tick"][i].dataset.label=this._model._cords[i]


        }
    }

}

let view=new View(model)

pip1= new Test(model,['slider-scale-big','progress']) ;


console.log(model)
pip1.createDOMArr(['slider-scale-big','progress'])
// pip1.rebuildList('slider-scale-big')
let styleProgress={
    position: "relative",
width: "100px",
height: "20px",
overflow: "hidden",
display: "inline-block",
};
let styleTick={
position: "relative",
height: "30px",
zIndex: 10,
width: "2px",
display: "inline-block",
backgroundColor:" black",
marginRight:  "18px"
}
let styleStrips={
position: "absolute",
top: 0,
left: 0,
right: 0,
bottom: 0,
backgroundImage: "linear-gradient(to right, #000 0%, #000 10%, transparent 10%, transparent 100%)",
backgroundSize:"20px 100%"
};


let max=document.getElementById("btnmax")
let create=document.getElementById("create")
create.addEventListener("click",function () {
    let item = window.prompt('Please input number', '');
    pip1.addDOMArr("strips",styleStrips,"div",item)
    pip1.addDOMArr("progress",styleProgress,"div",item)
    model.domObj["progress"].forEach(function (args,index) {
        args.appendChild(model.domObj["strips"][index])
    })
    pip1.addDOMArr("slider-scale-tick",styleTick,"a",Number(item)+1)
    view.createScale(item)
    pip1.createCors(Number(item))

    view.createMeasure(item)

})





max.addEventListener("click",function () {
pip1.changeMax();
pip1.recreateElem();

pip1.rebuildList('slider-scale-big')
 //view.show()

})
// pip1.rebuildList()
