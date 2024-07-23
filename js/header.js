let $ = document
// scroll
let navBar = $.getElementById('header')
    
$.addEventListener('scroll',function(){ 
    if($.documentElement.scrollTop===0){
        navBar.classList.remove('scroll')
    } else {
        navBar.classList.add('scroll')
    }
})
// mobile menu toggle
const mobileMenu = $.querySelector('.header-nav-wrapper')
const hambergerMenu = $.querySelector('.header-hamberger')
const headerXIcon = $.querySelector('.header-nav-list__x')

hambergerMenu.addEventListener('click',function(){
    mobileMenu.classList.add('header-nav-wrapper--open')
})
headerXIcon.addEventListener('click',function(){
    mobileMenu.classList.remove('header-nav-wrapper--open')
})