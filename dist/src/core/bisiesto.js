"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param año
 * Indica si el año dado es bisiesto o no
 */
function isBisiesto(anio) {
    return ((anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0) ? true : false;
}
exports.isBisiesto = isBisiesto;
//# sourceMappingURL=bisiesto.js.map