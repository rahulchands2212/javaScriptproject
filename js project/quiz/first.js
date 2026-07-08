const form = document.querySelector('form');

const answers = {
    q1: "Tiger",
    q2: "Pacific Ocean",
    q3: "26 January 1950",
    q4: "Mercury",
    q5: "Mahatma Gandhi"
};



form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let score = 0;
    const data = new FormData(form);

    for(let [key,value] of data.entries()){
        if(answers[key]==value){
            score++;
        }
        
    }

   const ans =  document.querySelector('#ans');
   ans.textContent = `your score is ${score} out of 5`;

   form.reset();
})