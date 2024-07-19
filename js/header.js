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
const mobileMenu = $.querySelector('.header-mobile-nav-list')
const hambergerMenu = $.querySelector('.header-hamberger')
const headerXIcon = $.querySelector('.header-mobile-nav-list__x')

hambergerMenu.addEventListener('click',function(){
    mobileMenu.classList.add('header-mobile-nav-list--open')
})
headerXIcon.addEventListener('click',function(){
    mobileMenu.classList.remove('header-mobile-nav-list--open')
})