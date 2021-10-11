
var valor = 'ASOCIACIÓN MUTUAL DE RECUPERADORES DEL MEDIO AMBIENTE Factura' //'901172943;ASOCIACIÓN DE RECICLADORES DE LA COSTA;91;01;ASOCIACIÓN DE RECICLADORES DE LA COSTA;'
var re = new RegExp('[A-Z]*[:]*[\s]*[0-9]*[-]*[0-9]*[;]\s*([A-Z]{0,}[a-z]{0,}[0-9]{0,}[\s]*[.]*[-]*)*');
var r  = valor.match(re);
if (r == null)
{
    console.log(false)
}
else{
    if (r.length > 0)
    {
        console.log(true)
        console.log(r[1])
    }    
    else
        console.log(false)
}
    
