function js_style() 
{
//font styles added by JS:
 text.style.fontSize = "14pt";
 text.style.fontFamily = "Comic Sans MS";
 text.style.color = "green";
}

function is_creditCard(str)
{
 regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;

 debugger;
        if (regexp.test(str))
          {
           let tr='checked'
            return tr;
          }
        else
          {
           let err='entred wrong please check'
            return ;
          }
}



console.log(is_creditCard(prompt("")));
