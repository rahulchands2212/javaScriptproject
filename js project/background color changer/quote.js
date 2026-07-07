const parent = document.getElementById("parent");

parent.addEventListener('click',(e)=>{
 let child = e.target;
  const body = document.querySelector('body');
  body.style.backgroundColor = child.id;
});