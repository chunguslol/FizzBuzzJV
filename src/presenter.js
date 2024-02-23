// presenter.js
import generarFizzBuzz from "./fizzbuzz";

const form = document.querySelector("#fizzbuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    div.innerHTML = "";

    
    const numeroIngresado = document.querySelector("#numero").value;
    
   
    if (!isNaN(numeroIngresado) && numeroIngresado > 0) {
        
        for (let i = 1; i <= numeroIngresado; i++) {
            let resultado = generarFizzBuzz(i);  
            div.innerHTML += "<p>" + resultado + "</p>";
        }
    } else {
        console.log("Por favor, ingrese un número válido y mayor que cero.");
    }
});
