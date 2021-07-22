let boton = document.getElementById('btnEnviar');

boton.addEventListener('click', palindromo)

function palindromo() {
    const palabra = document.querySelector('#palabra').value;
    const palConvert = palabra.normalize("NFD").toLowerCase().replace(/[\W_]/g, '');
    const palRevert = palConvert.split("").reverse().join("");

    if(palConvert===palRevert){
        alert(`${palConvert} es un palindromo`);
    }else{
        alert(`${palConvert} no es un palindromo`);
    }
}

//Modo largo:

//pedimos que se introduzca una palabra
//const palabra = prompt("introduzca una palabra");
//convertimos la palabra para que este en minuscula y si se le agregan caracteres especiales los tome (gracias a Hernani)
//palabraConvert = palabra.normalize("NFD").toLowerCase().replace(/[\W_]/g, '');
//revertimos la palabra para asi compararla con el if
//const palabraRevert = palabraConvert.split("").reverse().join("");
//si palabraconvertida es igual a palabra revertida
//if (palabraConvert === palabraRevert) {
//    alert(`${palabra} si es un palindromo`); //imprime que la palabra es palindromo
//  } else { //caso contrario
//    alert(`${palabra} no es un palindromo`); //la palabra no es palindromo
//  }


