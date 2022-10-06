ScrollReveal({
    reset: true
});

ScrollReveal().reveal('.description',{origin: 'top', delay: 50, distance: '20px'});
ScrollReveal().reveal('.lesgo',{origin: 'bottom', delay: 50, distance: '15px'});
ScrollReveal().reveal('.landscape',{origin: 'right', delay: 50, distance: '20px'});
ScrollReveal().reveal('.models',{origin: 'left', delay: 50, distance: '20px'});
ScrollReveal().reveal('.aboutmain',{origin: 'bottom', delay: 100, distance: '20px'});
ScrollReveal().reveal('.about-title',{origin: 'bottom', delay: 100, distance: '20px'});
ScrollReveal().reveal('.about-desc',{origin: 'bottom', delay: 200, distance: '20px'});
ScrollReveal().reveal('.about-img',{origin: 'bottom', delay: 300, distance: '20px'});
ScrollReveal().reveal('.card1',{origin: 'top', delay: 150, distance: '15px'});
ScrollReveal().reveal('.card2',{origin: 'top', delay: 100, distance: '15px'});
ScrollReveal().reveal('.card3',{origin: 'top', delay: 50, distance: '15px'});
ScrollReveal().reveal('.gridsec',{origin: 'bottom', delay: 150, distance: '15px'});
ScrollReveal().reveal('.mcmodel',{origin: 'bottom', delay: 150, distance: '20px'});
ScrollReveal().reveal('.dlbutton',{origin: 'bottom', scale: 0.85, delay: 150, distance: '20px'});
ScrollReveal().reveal('.footer',{origin: 'bottom', delay: 100, distance: '20px'});

function copy_text() {
    const copyText = document.querySelector('#ip');  
    const input = document.createElement("textarea");
    input.value = copyText.textContent;
    document.body.appendChild(input);
    input.select();
    document.execCommand("Copy");
    input.remove();
    const copybutton = document.querySelector('#copybutton')
    copybutton.innerHTML = "Done"
    copybutton.focus()
    setTimeout(() => {
        copybutton.innerHTML = "Copy"
        copybutton.blur()
    }, 1550);
    
    
};
