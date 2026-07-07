const form = document.getElementById('parent');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const income = document.getElementById('income');
    let tax = document.querySelector('h2');
    const amount = parseInt(income.value);

    let total_tax= 0;
    if(amount<=1200000){
        total_tax = 0;
    }else if(amount<=1600000){
        total_tax = (amount-1200000)*0.15;
    }else if(amount<=2000000){
        total_tax = (amount-1600000)*0.20 + 60000;
    }else if(amount<=2400000){
        total_tax = (amount-2000000)*0.25 + 60000 + 80000;
    }else{
         total_tax = (amount-2400000)*0.30 + 60000 + 80000+100000;
    }

    tax.textContent = `Total tax : ${total_tax}`;
    form.reset();
})