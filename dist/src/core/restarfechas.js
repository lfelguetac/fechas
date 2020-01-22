"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getformatofecha_1 = require("./getformatofecha");
const formatearfecha_1 = require("./formatearfecha");
const constants_1 = require("../constants");
const validarfecha_1 = require("./validarfecha");
/**
 *
 * @param fecha1
 * @param fecha2
 *
 * Obtiene la diferencia en dias de dos fechas validas
 */
function restarFechas(fecha1, fecha2) {
    const codigoFormatoFecha1 = validarfecha_1.validarFecha(fecha1);
    const codigoFormatoFecha2 = validarfecha_1.validarFecha(fecha2);
    if (codigoFormatoFecha1 !== constants_1.CodigoFormatoFecha.FTM_CORRECTO) {
        return codigoFormatoFecha1;
    }
    else if (codigoFormatoFecha2 !== constants_1.CodigoFormatoFecha.FTM_CORRECTO) {
        return codigoFormatoFecha2;
    }
    if (getformatofecha_1.getFormatoFecha(fecha1) !== getformatofecha_1.getFormatoFecha(fecha2)) {
        return constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA;
    }
    let aFecha1 = new Date(fecha1);
    let aFecha2 = new Date(fecha2);
    if (getformatofecha_1.getFormatoFecha(fecha1) != constants_1.CodigoFormatoFecha.FMT_INVERSO) {
        aFecha1 = new Date(formatearfecha_1.setFormatoFecha(fecha1, constants_1.CodigoFormatoFecha.FMT_INVERSO));
        aFecha2 = new Date(formatearfecha_1.setFormatoFecha(fecha2, constants_1.CodigoFormatoFecha.FMT_INVERSO));
    }
    const diff = aFecha1.getTime() - aFecha2.getTime();
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    return diffDays;
}
exports.restarFechas = restarFechas;
//# sourceMappingURL=restarfechas.js.map