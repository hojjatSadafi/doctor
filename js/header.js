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

// toogle theme btn
let themeChangeBtns = $.querySelectorAll('.theme-toggle-button')

themeChangeBtns.forEach(function(themeChangeBtn){
    themeChangeBtn.addEventListener('click',function(){
        $.body.classList.toggle('dark')
        if($.body.classList.contains('dark')){
            localStorage.setItem('doctor-theme','dark')
        } else {
            localStorage.setItem('doctor-theme','light')
        }
    })
})

// drop down shown

let profileBtn = $.querySelector('.header-profile-wrapper') 
let dropDownElem = $.querySelector('.header-drop-down')


profileBtn.addEventListener('click',function(){
    dropDownElem.classList.toggle('header-drop-down--active')
})
dropDownElem.addEventListener('click',function(event){
    event.stopPropagation() // when click on the drop down its dont close  
})