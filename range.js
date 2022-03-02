const polzun = document.querySelector(".wrap");
let pip = document.querySelector(".pip");
let pip1 = document.querySelector(".pip1");
const count = document.querySelector(".uu1");
const count1 = document.querySelector(".uu2");
const block=document.querySelector(".block_layer1");
let flag =false;
let flag1 =false;
pip.style.left="0%";
const objParams={};
objParams.left=polzun.getBoundingClientRect().left;
objParams. width=polzun.getBoundingClientRect().width ;
const corInPerc=(obj)=> {



    obj.perc1=(obj.clientX- obj.left)/ obj. width*100;

    if ( obj.perc1>=0 && obj.perc1<=100){
        pip.style.left=`${obj.perc1-6}%`;


        count.innerHTML=`${Math.trunc(obj.perc1)}`;
    }
    else if (obj.perc1>100){
        pip.style.left=`94%`;
        count.innerHTML=`100`;
    }
    else if (obj.perc1<0){
        pip.style.left=`-6%`;
        count.innerHTML=`0`;
    }
    return pip.style.left
};
const corInPerc1=(obj)=> {

    console.log(objParams.clientX);
    obj.perc2=(obj.clientX- obj.left)/ obj. width*100;


    if ( obj.perc2>=0 && obj.perc2<100){

        pip1.style.left=`${obj.perc2-6}%`;

        count1.innerHTML=`${Math.trunc(obj.perc2)}`;
    }
    else if (obj.perc2>100){
        pip1.style.left=`94%`;
        count1.innerHTML=`100`;
    }
    else if (obj.perc2<0){
        pip1.style.left=`-6%`;
        count1.innerHTML=`0`;
    }


    return pip1.style.left
};


pip1.addEventListener('mousedown', function () {
    objParams.clientX=arguments[0].clientX;


    flag1 =true;



   document.addEventListener('mousemove', function(){
        objParams.clientX=arguments[0].clientX;

        if (flag1){

             cheekSpaceBetween(objParams);

            corInPerc1(objParams)

        }
    });
});


pip.addEventListener('mousedown', function () {
    objParams.clienX=arguments[0].clientX;
    flag =true;
    corInPerc1('mousedown',objParams)

    document.addEventListener('mousemove', function(){
        objParams.clientX=arguments[0].clientX;
        if (flag){
            cheekSpaceBetween(objParams);


            corInPerc(objParams)
        }
    });
});
window.addEventListener('mouseup', function () {
    flag=false;
    flag1 =false;




});
// pip.addEventListener('mousedown', () => corInPerc(objParams));
// pip1.addEventListener('mousedown', () => corInPerc1(objParams));
// pip1.addEventListener('mousedown', getLeftMargin);
// pip.addEventListener('mousedown', getLeftMargin);

const cheekSpaceBetween=(obj)=>{

    // console.log(  obj.perc1- obj.perc2)
    if(obj.perc1>obj.perc2){
        block.style.backgroundImage=`linear-gradient(to right, transparent 0%, transparent ${Math.trunc(obj.perc2)}%, blue ${Math.trunc(obj.perc2)}%,blue ${Math.trunc(obj.perc1)}%,transparent ${Math.trunc(obj.perc1)}%, transparent 100% )`;

    }
    else{
        // console.log(  obj.perc1- obj.perc2)
        block.style.backgroundImage=`linear-gradient(to right, transparent 0%, transparent ${Math.trunc(obj.perc1)}%, blue ${Math.trunc(obj.perc1)}%,blue ${Math.trunc(obj.perc2)}%,transparent ${Math.trunc(obj.perc2)}%, transparent 100% )`;

    }
}