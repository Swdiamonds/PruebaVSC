document.getElementById('boton1').onclick = function(){ /*Crea un botón que muestre la resta de dos variables y su multiplicación en un alert y después otro
    mensaje de alerta con su división.*/

    op1 = parseInt(prompt("Introduce operador1")) 
    op2 = parseInt(prompt("Introduce operador2")) 

    resta = op1 - op2
    multi = op1 * op2
    divi = op1 / op2

    alert("La resta de "+ op1 + " - "+ op2 + " es: " + resta +" "+ "y la multiplicación es:"+ multi )
    alert("La divión de "+ op1 + " / "+ op2 + " es: " + divi )
}

document.getElementById('boton2').onclick = function(){ /*Crea un botón que muestre la resta de dos variables y su multiplicación en un alert y después otro
    mensaje de alerta con su división.*/
    window.open("https://www.youtube.com/", "_blanck", "width=550, height=620");
}

document.getElementById('boton3').onclick = function(){ /* . Crea un botón que permita leer 2 números diferentes y nos diga cuál es el mayor de los dos
números.*/

    op1 = parseInt(prompt("Introduce operador1")) 
    op2 = parseInt(prompt("Introduce operador2")) 

    if(op1>op2){
        alert("el mayor es:"+op1)
    }

    else if (op2>op1){
        alert("el mayor es:"+op2)

    }
     if (op2=op1){
        alert("Son iguals!")
    }
  
}
