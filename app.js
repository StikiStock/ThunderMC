
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
