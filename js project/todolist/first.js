const form = document.querySelector('form');
const input = document.querySelector('#task');
const alltask = document.querySelector('#alltask');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(input.value.trim()==""){
        return ;
    }
    const parent = document.createElement('div');
    parent.style.marginBottom = "10px";

    const task = document.createElement('span');
    task.textContent = input.value.trim();
    task.style.marginRight = "10px";

    const done = document.createElement('button');
    done.textContent = 'Done';

    const del = document.createElement('button');
    del.textContent = 'Delete';
   
    done.style.marginRight = "10px";

    //text ke bech me line done hogaya to
    done.addEventListener('click',(e)=>{
        e.preventDefault();
        task.style.textDecoration = "line-through";
        task.style.color = 'grey';
    })

    //double click se wo line remove
    done.addEventListener('dblclick',(e)=>{
        e.preventDefault();
        task.style.textDecoration = "none";
        task.style.color = 'white';
    })

    parent.append(task,done,del);   //parent div ke andar apend 
    
    //task delete ke leye
    del.addEventListener('click',(e)=>{
        e.preventDefault();
        parent.remove();
    })


    //parent div to all task ke andar append
    alltask.append(parent);

    form.reset();
  
})