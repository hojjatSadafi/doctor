let $ = document
let navBar = $.getElementById('header')
    
$.addEventListener('scroll',function(){ 
    if($.documentElement.scrollTop===0){
        navBar.classList.remove('scroll')
    } else {
        navBar.classList.add('scroll')
    }
})