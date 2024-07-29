const daysWrapper = document.getElementById('days-wrapper')
const timeBoxWrapper = document.getElementById('time-box-main')
const timeBoxsElem = document.querySelectorAll('.time-box-head__title')

daysWrapper.addEventListener('click',function(event){
    if(event.target.tagName === "SPAN"){

        deleteActiveClass('days-item','days-item--active')
        event.target.classList.add('days-item--active')

    } else if(event.target.tagName === "H6" || event.target.tagName === "P"){

        deleteActiveClass('days-item','days-item--active')
        event.target.parentElement.classList.add('days-item--active')

    }
})

timeBoxWrapper.addEventListener('click',function(event){
    if(event.target.tagName === "SPAN"){
        deleteActiveClass('time-item','time-item--active')
        event.target.classList.add('time-item--active')
    }
})


timeBoxsElem.forEach(function(timeBox){
    timeBox.addEventListener('click',function(event){
        deleteActiveClass('time-box-head__title','time-box-head__title--active')
        timeBox.classList.add('time-box-head__title--active')
    })
})



function deleteActiveClass(defultClass,deletingClassName){
    document.querySelectorAll('.'+defultClass).forEach(function(item){
            item.classList.remove(deletingClassName)
    })
}