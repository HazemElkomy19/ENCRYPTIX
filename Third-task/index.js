let calculation = localStorage.getItem('calculation') || '';
      displayCalculation();

      function updateCalculation(value) {
        calculation += value;
        
        console.log(calculation);
        saveCalculation();
        displayCalculation();
      }
      function displayCalculation(){
        const amount=document.querySelector('.output');
        amount.innerHTML=calculation;
      }
      function saveCalculation() {
        localStorage.setItem('calculation', calculation);
      }

const numberOfBuutos=document.querySelectorAll(".butt").length;
for(let i=0 ; i< numberOfBuutos ; i++){
  document.querySelectorAll(".butt")[i].addEventListener("click",function (){
    let buttonInnerHTML=this.innerHTML;
    if(!isNaN(buttonInnerHTML) || buttonInnerHTML === '.'){
      updateCalculation(buttonInnerHTML);
    }
    else{
      switch (buttonInnerHTML) {
          case "+":
          case "-":
          case "*":
          case "/":
              updateCalculation(buttonInnerHTML);
              break;   
          case "=":
              calculation = eval(calculation);
              displayCalculation();
              saveCalculation();
              
              break;
          
          
          
          case "Clear":
              calculation = '';
              displayCalculation();
              saveCalculation();
            break;
          
      
        default:
          break;
      }  
    }
    

  });
}    



