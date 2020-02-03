"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatearfecha_1 = require("./formatearfecha");
const constants_1 = require("../constants");
const disgregarfecha_1 = require("./disgregarfecha");
const validarfecha_1 = require("./validarfecha");
/**
 * @param fecha
 * Valida que una fecha sea habil o no. Considera fines de semana, feriados fijos y variables.
 */
function isHabil(fecha, feriados) {
    const codigoFormato = validarfecha_1.validarFecha(fecha);
    if (codigoFormato !== constants_1.CodigoFormatoFecha.FTM_CORRECTO) {
        return codigoFormato;
    }
    let habil = true;
    let dateFormatted = formatearfecha_1.setFormatoFecha(fecha, constants_1.CodigoFormatoFecha.FMT_INVERSO);
    const diaObtenido = new Date(dateFormatted).getDay();
    /* Fin de semana */
    if (diaObtenido === 0 || diaObtenido === 6) {
        habil = false;
    }
    const { dia, mes, anio } = disgregarfecha_1.disgregarFecha(dateFormatted);
    feriados.filter(item => !item.hasOwnProperty("anio")).map(fecha => {
        if (fecha.dia === dia && fecha.mes === mes) {
            habil = false;
        }
    });
    feriados.filter(item => item.hasOwnProperty("anio")).map(fecha => {
        if (fecha.dia === dia && fecha.mes === mes && fecha.anio === anio) {
            habil = false;
        }
    });
    return habil;
}
exports.isHabil = isHabil;
//# sourceMappingURL=diahabil.js.map