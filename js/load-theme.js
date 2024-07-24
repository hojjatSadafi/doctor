// load theme

let localStorageVar = localStorage.getItem('doctor-theme')
console.log(localStorageVar);
if(localStorageVar === "dark"){
    $.body.classList.add('dark')
} else{
    $.body.classList.remove('dark')
}
