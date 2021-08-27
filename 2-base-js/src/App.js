const nombre = document.querySelector("#nombre-input");
const edad = document.querySelector("#edad-input");
const genero = document.querySelector("#genero-input");
const form = document.querySelector("#saludador-form");


form.addEventListener("submit", (event) => {

    // Variables
    var text1 = "";
    var text2 = "";
    var text3 = "";

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
    
    // Definir text3 tomando en cuenta la hora
    var today = new Date();

    if(today.getHours() < 12 && today.getHours() > 0){
        text3 = "buenos dias";
    }

    if(today.getHours() <= 19 && today.getHours() >= 12){
        text3 = "buenos tardes";
    }

    if(today.getHours() < 24 && today.getHours() > 19){
        text3 = "buenos noches";
    }


    alert("Hola, " + text3 + " " + text2 + " " + nombre.value);
});