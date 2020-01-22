"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validarfecha_1 = require("./validarfecha");
const constants_1 = require("../constants");
const formatearfecha_1 = require("./formatearfecha");
const getformatofecha_1 = require("./getformatofecha");
const disgregarfecha_1 = require("./disgregarfecha");
/**
 *
 * @param fecha
 * @param nMeses
 * Adiciona N cantidad de meses a una determinada fecha sin importar el formato que esta tenga. Devolviendo la fecha en algunos de los formatos validos que ha sido enviado. Acepta 'sumar' numeros negativos.
 */
function addNmeses(fecha, nMeses) {
    if (validarfecha_1.validarFecha(fecha) !== constants_1.CodigoFormatoFecha.FTM_CORRECTO) {
        return constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA;
    }
    const dateConvert = formatearfecha_1.setFormatoFecha(fecha, constants_1.CodigoFormatoFecha.FMT_INVERSO);
    const aFecha = new Date(dateConvert);
    const newDate = new Date(aFecha.setMonth(aFecha.getMonth() + nMeses));
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
exports.addNmeses = addNmeses;
//# sourceMappingURL=sumarmeses.js.map