const polzun = document.querySelector(".wrap");
let pip = document.querySelector(".pip");
pip.style.left="0%";

const corInPerc=(obj)=> {
    obj.perc=(obj.clientX- obj.left)/ obj. width*100;
    console.log(obj.perc)
    if ( obj.perc>=0 && obj.perc<100){
        pip.style.left=`${obj.perc-1}%`;
    }

    return pip.style.left
};


const getLeftMargin=(e)=>{
    const objParams={};
    objParams.clientX=e.clientX;
    objParams.left=polzun.getBoundingClientRect().left;
    objParams. width=polzun.getBoundingClientRect().width ;
    corInPerc(objParams);


};
polzun.addEventListener('mousedown', getLeftMargin)
pip.addEventListener('mousedown', function () {
    flag=true;
    console.log(flag);
    polzun.addEventListener('mousemove',  getLeftMargin);
});
pip.addEventListener('mouseup',function () {

    polzun.removeEventListener('mousemove',  getLeftMargin);


});
