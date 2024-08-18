let display = document.getElementById('displayInput');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let string = '';
buttonsArray.forEach(btn => {
    btn.addEventListener('click',(event)=>{
        if(event.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            console.log(event.target)
            display.value = string;
        }else if(event.target.innerHTML == '='){
            try{
            string = string.replace("x", '*');
            string = eval(string);
            if(!Number.isInteger(string))
            {
                string = string.toFixed(3)
            }
            display.value = string;
        } catch(error){
            display.value = "Math Error";
            string = '';
        }
            
        }else if(event.target.innerHTML == 'RESET'){
            string = '';
            display.value = string;
        }else{
            string += event.target.innerHTML;
            display.value = string;
        }
        
    })
})