"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param n
 * Indica si el contenido de una variable es numerico o no.
 */
function isNumero(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}
exports.isNumero = isNumero;
//# sourceMappingURL=numeros.js.map