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

            var config = {
                autoOperatorNames: 'sin cos arcsin arccos arctan tan sec csc',
                charsThatBreakOutOfSupSub: '+-=<>()'
            }

            var htmlElement = output;
            var mathField = MQ.StaticMath(htmlElement);

           // mathField.write(input[i].value)
            for (let e = 0; e < (input[i].value).length; e++) {
                mathField.write((input[i].value)[e])
            }
            console.log(mathField.htmlElement()); // => '2^{\\frac{3}{2}}'
        }
    }
}