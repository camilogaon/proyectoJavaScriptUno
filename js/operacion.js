function operacion(){
    let num1, num2, suma;
    num1 = parseInt(document.getElementById('numero1').value);
    num2 = parseInt(document.getElementById('numero2').value);
    suma = num1 + num2;
    resta =  num1 - num2;
    multi = num1 * num2;
    alert("El resultado de la suma es: "+suma);
    alert("El resultado de la resta es: "+resta);
    alert("El resultado de la multiplicacion es:"+multi)
    if(num2 > 0){
        divi=num1/num2;
        alert("El resultado de la division es:"+divi);
    }else{
        alert("No existe la divicion entre cero");
    }
}