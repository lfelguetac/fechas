
/**
 * 
 * @param n 
 * Indica si el contenido de una variable es numerico o no.
 */
export function isNumero(n) { 
    return !isNaN(parseFloat(n)) && !isNaN(n - 0); 
}