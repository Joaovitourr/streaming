const sociaisFooter = document.querySelectorAll('[data-anime]')


function eventoScroll(){
   const alturaPagina = window.pageYOffset + window.innerHeight * 0.85;

    sociaisFooter.forEach((element) => {
        if(alturaPagina > element.offsetTop){
            element.classList.add("animate")
        } else{
            element.classList.remove('animate')
        }
    })

}

window.addEventListener('scroll', eventoScroll)
