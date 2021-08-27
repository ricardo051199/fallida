const nombre = document.querySelector("#nombre-input");
const edad = document.querySelector("#edad-input");
const genero = document.querySelector("#genero-input");
const idioma = document.querySelector("#idioma-input");
const form = document.querySelector("#saludador-form");


form.addEventListener("submit", (event) => {

    // Variables
    var text1 = "";
    var text2 = "";
    var text3 = "";
    var today = new Date();
    
    // Saludar segun el idioma
    if(idioma.value == "English"){
        text1 = "hi";

        // Saludar segun la hora
        if(today.getHours() < 12 && today.getHours() > 0){
            text2 = "good morning";
        }
    
        if(today.getHours() <= 19 && today.getHours() >= 12){
            text2 = "good afternoon";
        }
    
        if(today.getHours() < 24 && today.getHours() > 19){
            text2 = "good evening";
        }

        // Saludar segun el genero
        if(genero.value == "Hombre"){

            // Saludar segun la edad
            if(edad.value < 10 && edad.value > 5){
                text3 = "boy";
            }
        
            if(edad.value <= 24 && edad.value >= 10){
                text3 = "young";
            }
        
            if(edad.value < 100 && edad.value > 24){
                text3 = "mister";
            }
        }
        if(genero.value == "Mujer"){
            
            // Saludar segun la edad
            if(edad.value < 10 && edad.value > 5){
                text3 = "girl";
            }
        
            if(edad.value <= 24 && edad.value >= 10){
                text3 = "miss";
            }
        
            if(edad.value < 100 && edad.value > 24){
                text3 = "missis";
            }
        }

    }

    if(idioma.value == "Español"){
        text1 = "hola";

        // Saludar segun la hora
        if(today.getHours() < 12 && today.getHours() > 0){
            text2 = "buenos dias";
        }
    
        if(today.getHours() <= 19 && today.getHours() >= 12){
            text2 = "buenos tardes";
        }
    
        if(today.getHours() < 24 && today.getHours() > 19){
            text2 = "buenos noches";
        }

        // Saludar segun el genero
        if(genero.value == "Hombre"){

            // Saludar segun la edad
            if(edad.value < 10 && edad.value > 5){
                text3 = "niño";
            }
        
            if(edad.value <= 24 && edad.value >= 10){
                text3 = "joven";
            }
        
            if(edad.value < 100 && edad.value > 24){
                text3 = "señor";
            }
        }
        if(genero.value == "Mujer"){
            
            // Saludar segun la edad
            if(edad.value < 10 && edad.value > 5){
                text3 = "niña";
            }
        
            if(edad.value <= 24 && edad.value >= 10){
                text3 = "señorita";
            }
        
            if(edad.value < 100 && edad.value > 24){
                text3 = "señora";
            }
        }
    }

    // Mensaje de saludo
    alert(text1 + ", " + text2 + " " + text3 + " " + nombre.value);
});