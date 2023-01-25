        const element= document.getElementById("btn");
        element.addEventListener('click',handlesubmit);
        let id=0;
function handlesubmit() { 
        
  debugger;
  let Email=document.getElementById('email').value;
        let Name=document.getElementById('name').value;
        let Passw=document.getElementById('pass').value;
      var json={
            "id":id++,
            "Name":"",
            "Pass":"",
           "Email":""
         }
        
         
       json.Email=Email;
        json.Name=Name;
        json.Pass=Passw;  
		
		
       
        var str=JSON.stringify(json);
       
        document.getElementById('demo').innerHTML=str;

     alert(str);
		console.log(str);
		
       }  


/* call back examples */

       function demo(){
        console.log('hello');

       }

       function gemo(num1,num2,callback){
        let sum= num1+num2;
        callback(sum);
       }
       gemo(2,3,demo);



       function demo(){
        console.log('hi im sohail');

       }
        function dipo(name,mico){
          console.log(name+'welcome');
          mico();
        }
        dipo('john',demo);






 


        let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

