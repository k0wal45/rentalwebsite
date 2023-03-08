window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        document.querySelector('.up-arrow').classList.remove("non-visible");
        document.querySelector('.up-arrow').classList.add("visible");
    
    } else {

        document.querySelector('.up-arrow').classList.remove("visible");
        document.querySelector('.up-arrow').classList.add("non-visible");
    
    }

   

    
});