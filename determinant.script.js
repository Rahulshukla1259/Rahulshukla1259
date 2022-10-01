let btn=document.querySelector(".mybtn");

btn.addEventListener("click",function(){
  let resul=document.querySelector(".result");

  resul.innerText=" ";

  let order=document.querySelector(".outer input[type='number']").value;
//let order2=parseInt(order);





if(order==3){
    
    

    
        let inner=document.querySelector(".inner")
        let html=`<img src="https://img.icons8.com/ios/50/000000/vertical-line.png"/>
        <div class="inputs">
          <div class="row1">
            <input type="text" name="number1" id="a11" class="a1">
            <input type="text" name="number1" id="a12" class="a1">
            <input type="text" name="number1" id="a13" class="a1">
          </div>
          <div class="row2">
            <input type="text" name="number1" id="a21" class="a1">
            <input type="text" name="number1" id="a22" class="a1">
            <input type="text" name="number1" id="a23" class="a1">
          </div>
          <div class="row3">
            <input type="text" name="number1" id="a31" class="a1">
            <input type="text" name="number1" id="a32" class="a1">
            <input type="text" name="number1" id="a33" class="a1">
      
          </div>
      
        </div>
        <img src="https://img.icons8.com/ios/50/000000/vertical-line.png"/>
      
      
      `
      inner.innerHTML=html;
      let calculate=document.querySelector("#calculate");

   calculate.addEventListener("click",function(){
   let a11=parseFloat(document.querySelector("#a11").value);

   let a12=parseFloat(document.querySelector("#a12").value);
   
   let a13=parseFloat(document.querySelector("#a13").value);
   
   let a21=parseFloat(document.querySelector("#a21").value);
   let a22=parseFloat(document.querySelector("#a22").value);

   let a23=parseFloat(document.querySelector("#a23").value);
   
   let a31=parseFloat(document.querySelector("#a31").value);
   
   let a32=parseFloat(document.querySelector("#a32").value);
   let a33=parseFloat(document.querySelector("#a33").value);



  //  console.log("a11=",a11);
  //  console.log("a12=",a12);
  //  console.log("a21=",a21);
  //  console.log("a22=",a22);
  //  console.log("a11=",a11);
  //  console.log("a12=",a12);
  //  console.log("a21=",a21);
  //  console.log("a22=",a22);
   

   let result=(a11*(a22*a33-a32*a23)-a12*(a21*a33-a31*a23)+a13*(a21*a32-a22*a31));
   let decimalplaces=document.querySelector(".decimalplaces").value;

   //result=result.toFixed(decimalplaces);
   
   
   

   let resul=document.querySelector(".result");
   resul.innerText=result;
   //let content = document.createTextNode(result);
//resul.appendChild(content);

   })
  
  }
 if(order==2){
  let inner=document.querySelector(".inner")

  let html=`<link rel="stylesheet" href="style.css">

  <div class="some">
  
  <img src="https://img.icons8.com/ios/50/000000/vertical-line.png"/>
          <div class="inputs">
            <div class="row1">
              <input type="text" name="number1" id="a11" class="a1">
              <input type="text" name="number1" id="a12"  class="a1">
              
            </div>
            <div class="row2">
              <input type="text" name="number1" id="a21"  class="a1">
              <input type="text" name="number1" id="a22"  class="a1">
              
            </div>
            
        
          </div>
          <img src="https://img.icons8.com/ios/50/000000/vertical-line.png"/>
        
      </div>`
      inner.innerHTML=html;
      let calculate=document.querySelector("#calculate");

   calculate.addEventListener("click",function(){
   let a11=document.querySelector("#a11").value;

   let a12=document.querySelector("#a12").value;
   
   let a21=document.querySelector("#a21").value;
   
   let a22=document.querySelector("#a22").value;

  //  console.log("a11=",a11);
  //  console.log("a12=",a12);
  //  console.log("a21=",a21);
  //  console.log("a22=",a22);
   let ia11=parseFloat(a11);
   let ia12=parseFloat(a12);
   let ia21=parseFloat(a21)
   let ia22=parseFloat(a22);

   let result=(ia11 * ia22 - ia21 * ia12);
   let decimalplaces=document.querySelector(".decimalplaces").value;



result=result.toFixed(decimalplaces);
       
     


   
   
   

   let resul=document.querySelector(".result");
   //resul.append(result);
   resul.innerText=result;
   //let content = document.createTextNode(result);
   //resul.appendChild(content);

})
 }

 if(order!=2 && order!=3){
  resul.innerText="Order should be 2 or 3";

 }

    






    })
  
