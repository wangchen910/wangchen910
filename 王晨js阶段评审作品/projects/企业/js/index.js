let ppp=document.querySelector(".lunbotu");
let arr=0;
setInterval(function () {
    arr=arr-1268;
    ppp.style.marginLeft=arr+"px";
    if(arr<-3789){
        arr=0
    }
},3000)