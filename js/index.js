/**

     
**/

    function input(e){
    	let input=document.querySelector('#tex');
        if(input.value==0){
            input.value=e;
        }else{
    	input.value+=e;
    }
    }
   
    function clean(){
    	let input=document.querySelector('#tex');
    	input.value=0;
    }
    clear.addEventListener('click',clean);
     
     function del(){
     	let input=document.querySelector('#tex').value;
     	 let len=input.length-1;
     	 let arr=[];
     	 for(let i of input){
     	 	arr.push(i);
     	 }
     	 arr.splice(len,1);
     	 document.querySelector('#tex').value=arr.join('');
     }
     cancel.addEventListener('click',del);

     function equa(){
        let input=document.querySelector('#tex').value;
        let result=eval(input);
        document.querySelector('#tex').value=result;
     }
     equal.addEventListener('click',equa);

     function sine(){
        let value=document.querySelector('#tex').value;
         document.querySelector('#tex').value=Math.sin(value);
     }
