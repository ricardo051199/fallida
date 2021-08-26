const nombre = document.querySelector("#nombre-input");
const edad = document.querySelector("#edad-input");
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

    alert("Hola " + text1 + " " + nombre.value);
});