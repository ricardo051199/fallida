const nombre = document.querySelector("#nombre-input");
const edad = document.querySelector("#edad-input");
const genero = document.querySelector("#genero-input");
const form = document.querySelector("#saludador-form");

form.addEventListener("submit", (event) => {

    // Definir text1 tomando en cuenta la edad
    if(edad.value < 10 && edad.value > 5){
        text1 = "niño(a)";
    }

    if(edad.value <= 24 && edad.value >= 10){
        text1 = "joven";
    }

    if(edad.value < 100 && edad.value > 24){
        text1 = "señor(a)";
    }

    // Definir text2 tomando en cuenta el genero
    if(text1 == "niño(a)"){
        if(genero.value == "Hombre"){
            text2 = "niño";
        }
        if(genero.value == "Mujer"){
            text2 = "niña";
        }
    }

    if(text1 == "joven"){
        if(genero.value == "Hombre"){
            text2 = "joven";
        }
        if(genero.value == "Mujer"){
            text2 = "señorita";
        }
    }

    if(text1 == "señor(a)"){
        if(genero.value == "Hombre"){
            text2 = "señor";
        }
        if(genero.value == "Mujer"){
            text2 = "señara";
        }
    }

    alert("Hola " + text2 + " " + nombre.value);
});