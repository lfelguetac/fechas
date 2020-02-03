
/**
 * 
 * @param n 
 * Indica si el contenido de una variable es numerica o no.
 */
export function isNumero(n): boolean { 
    return !isNaN(parseFloat(n)) && !isNaN(n - 0); 
}