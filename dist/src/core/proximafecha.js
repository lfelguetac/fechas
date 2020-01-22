"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const validarfecha_1 = require("./validarfecha");
const formatearfecha_1 = require("./formatearfecha");
const getformatofecha_1 = require("./getformatofecha");
const disgregarfecha_1 = require("./disgregarfecha");
/**
 * @param fecha
 * @param cantidadDiaz
 * Obtiene una nueva fecha al sumar o restar días
*/
function addDias(fecha, nDias) {
    const codigoFormatoFecha = validarfecha_1.validarFecha(fecha);
    if (codigoFormatoFecha !== constants_1.CodigoFormatoFecha.FTM_CORRECTO) {
        return codigoFormatoFecha;
    }
    const aFecha = new Date(formatearfecha_1.setFormatoFecha(fecha, constants_1.CodigoFormatoFecha.FMT_INVERSO));
    const newDate = new Date(aFecha.setDate(aFecha.getDate() + nDias));
    const newDateString = newDate.toISOString().slice(0, 10).replace(/[-]/g, '/');
    const { dia, mes, anio } = disgregarfecha_1.disgregarFecha(newDateString);
    const fmto = getformatofecha_1.getFormatoFecha(fecha);
    switch (fmto) {
        case constants_1.CodigoFormatoFecha.FMT_ESPANOL:
            return dia + '/' + mes + '/' + anio;
        case constants_1.CodigoFormatoFecha.FMT_ITALIANO:
            return dia + '-' + mes + '-' + anio;
        case constants_1.CodigoFormatoFecha.FMT_PLANO:
            return dia + mes + anio;
        case constants_1.CodigoFormatoFecha.FMT_INVERSOPLANO:
            return anio + mes + dia;
        case constants_1.CodigoFormatoFecha.FMT_INVERSO:
            return anio + '/' + mes + '/' + dia;
    }
}
exports.addDias = addDias;
//# sourceMappingURL=proximafecha.js.map