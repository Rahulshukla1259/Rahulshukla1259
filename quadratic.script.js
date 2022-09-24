let btn=document.querySelector(".btn");
btn.addEventListener("click",function(){

    let a1=document.querySelector(".a").value;
let b1=document.querySelector(".b").value;
let c1=document.querySelector(".c").value;
let a=parseInt(a1)
let b=parseInt(b1)
let c=parseInt(c1)
let k=b*b-4*a*c;
let arr=[];

if(a==null && b==null && c== null){
    return;
}

  else if (k>=0 && a!=0){

    let r1=(-b + Math.sqrt(k)) / (2 * a);
    let r2=(-b - Math.sqrt(k)) / (2 * a);

    arr.push(r1);
    arr.push(r2);

   let m1= document.querySelector(".result").innerText=arr;

    
}
else if(a==0){
    let p=-c/b;
    document.querySelector(".result").innerText=p;

}

else{
    //alert("no real root");
    //document.querySelector(".result").innerText="No real root";
    let c1=(-b/(2*a));
    let c2= Math.sqrt(-k) / (2 * a)
    let c3=c1.toString()
    let c4=c2.toString()

    console.log(c3,c4);
    arr.push(c3+"+"+c4+"i");
    arr.push(c3+"-"+c4+"i");

   let m1= document.querySelector(".result").innerText=arr;

}







   
})
