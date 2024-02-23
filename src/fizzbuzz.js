
function generarFizzbuzz(n) {
    if (n % 3 === 0) {
        return "Fizz";
    } else if (n % 5 === 0) {
        return "Buzz";
    } else {
        return n.toString(); // Convierte el número a cadena para que pueda imprimirse directamente
    }
}

export default generarFizzbuzz; 