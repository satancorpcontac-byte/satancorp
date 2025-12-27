const nav =document.querySelector('.nav-bg');
    
window.addEventListener('scroll',function(){
    nav.classList.toggle('nav-bg-act' ,window.scrollY >0)
})
