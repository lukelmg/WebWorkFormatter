let page = false;
var MQ = MathQuill.getInterface(2);
if ((window.location.href).includes('//webwork2.') == true) {
    page = true;
    let input = $('input');
    for (let i = 0; i < input.length; i++) {
        if (input[i].type == 'text') {
            let output = document.createElement('span');
            //console.log((input[i].value).latex());
            input[i].parentNode.insertBefore(output, input[i].nextSibling);

            var htmlElement = output;
            var mathField = MQ.MathField(htmlElement);
            mathField.write(input[i].value)
            console.log(mathField.el()); // => '2^{\\frac{3}{2}}'
        }
    }
}
