let btn=document.querySelector(".button");


btn.addEventListener("click",function(){
    let a=document.querySelector(".n1").value;
    let b=document.querySelector(".n2").value;
   
   let a1=parseInt(a)
   let b1=parseInt(b)

   if (a1 && b1==null){
    alert("plz enter the number ");
   }
   else{
    let sum=a1+b1;
    function addans(){
        let divans=document.querySelector(".ans").innerText=sum;
    
    }
    addans();
   }
    
    
    
})
