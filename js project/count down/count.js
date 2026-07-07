const result = document.getElementById('result');

setInterval(()=>{
const ct = Date.now();
const ot = new Date(2028,6,14).getTime();
let time = ot-ct;

const day = Math.floor((time)/(1000*60*60*24));
time = time%(1000*60*60*24);

const hour = Math.floor((time)/(1000*60*60));
time = time%(1000*60*60);

const min = Math.floor((time)/(1000*60));
time = time%(1000*60);

const sec = Math.floor((time)/(1000));
time = time%(1000); //milisec;

result.textContent = `${day} Days  ${hour} hours ${min} minutes  ${sec} sec  milisec ${time}`;

},1)
