"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const validarfecha_1 = require("./validarfecha");
const proximafecha_1 = require("./proximafecha");
const diahabil_1 = require("./diahabil");
/**
 * @param fecha
 * @param cantidadDiazHabiles
 * Obtiene una nueva fecha habil al sumar o restar días habiles (considera fines de semana y festivos )
 */
function addDiasHabiles(fecha, cantidadDiazHabiles, feriados) {
    if (validarfecha_1.validarFecha(fecha) !== constants_1.CodigoFormatoFecha.FTM_CORRECTO) {
        return constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA;
    }
    let habil = false;
    let sgteDia = 1;
    let match = 0;
    while (!habil) {
        let siguienteFecha = proximafecha_1.addDias(fecha, sgteDia);
        if (diahabil_1.isHabil(siguienteFecha, feriados)) {
            match += 1;
        }
        if (cantidadDiazHabiles === match) {
            return siguienteFecha;
        }
        sgteDia += 1;
    }
}
exports.addDiasHabiles = addDiasHabiles;
//# sourceMappingURL=proximafechahabil.js.map