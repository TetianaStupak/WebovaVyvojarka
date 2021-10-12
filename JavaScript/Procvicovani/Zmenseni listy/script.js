let header = document.querySelector("header")
 
window.addEventListener("scroll", function(){
    if(window.scrollY > 100){
        header.style.height = "80px"
    } else if (window.scrollY <= 100) {
        header.style.height = "100px"
    }
})

