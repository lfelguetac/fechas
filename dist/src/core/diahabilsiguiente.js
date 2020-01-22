"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const validarfecha_1 = require("./validarfecha");
const proximafecha_1 = require("./proximafecha");
const diahabil_1 = require("./diahabil");
/**
 *
 * @param fecha
 * Obtiene el próximo dia hábil de una fecha dada
 */
function getDiaHabilSiguiente(fecha) {
    const codigoFormato = validarfecha_1.validarFecha(fecha);
    if (codigoFormato !== constants_1.CodigoFormatoFecha.FTM_CORRECTO) {
        return codigoFormato;
    }
    let diaHabilSiguiente = '';
    let habil = false;
    let sgteDia = 1;
    while (!habil) {
        let siguienteFecha = proximafecha_1.addDias(fecha, sgteDia);
        if (diahabil_1.isHabil(siguienteFecha)) {
            diaHabilSiguiente = siguienteFecha;
            habil = true;
        }
        sgteDia += 1;
    }
    return diaHabilSiguiente;
}
exports.getDiaHabilSiguiente = getDiaHabilSiguiente;
//# sourceMappingURL=diahabilsiguiente.js.map