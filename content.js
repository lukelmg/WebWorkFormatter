let page = false;

if ((window.location.href).includes('//webwork2.') == true) {
    page = true;
    let input = $('input');
    for (let i = 0; i < input.length; i++) {
        if (input[i].type == 'text') {
            let output = document.createElement('span');
            input[i].parentNode.insertBefore(output, input[i].nextSibling);

            
        }
    }
}
