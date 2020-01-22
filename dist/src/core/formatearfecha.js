"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getformatofecha_1 = require("./getformatofecha");
const constants_1 = require("../constants");
const disgregarfecha_1 = require("./disgregarfecha");
/**
 *
 * @param fecha
 * @param tpoFormato Codigo formato de fecha
 * Asigna algunos de los formatos validos a una fecha dada.
 */
function setFormatoFecha(fecha, tpoFormato) {
    const formato = getformatofecha_1.getFormatoFecha(fecha);
    if (formato === constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA) {
        return formato;
    }
    const { dia, mes, anio } = disgregarfecha_1.disgregarFecha(fecha);
    switch (formato) {
        case constants_1.CodigoFormatoFecha.FMT_ESPANOL:
        case constants_1.CodigoFormatoFecha.FMT_ITALIANO:
            /* dd/mm/yyyy o dd-mm-yyyy*/
            if (tpoFormato === constants_1.CodigoFormatoFecha.FMT_ITALIANO) {
                return fecha.replace(/[/]/g, '-');
            }
            if (tpoFormato === constants_1.CodigoFormatoFecha.FMT_ESPANOL) {
                return fecha.replace(/[-]/g, '/');
            }
            if (tpoFormato === constants_1.CodigoFormatoFecha.FMT_PLANO) {
                return fecha.replace(/[/-]/g, '');
            }
            if (tpoFormato === constants_1.CodigoFormatoFecha.FMT_INVERSOPLANO) {
                return anio + mes + dia;
            }
            if (tpoFormato === constants_1.CodigoFormatoFecha.FMT_INVERSO) {
                return anio + '/' + mes + '/' + dia;
            }
            return fecha;
        case constants_1.CodigoFormatoFecha.FMT_PLANO:
            /* ddmmyyyy*/
            if (tpoFormato === constants_1.CodigoFormatoFecha.FMT_ITALIANO) {
                return dia + '-' + mes + '-' + anio;
            }
            if (tpoFormato === constants_1.CodigoFormatoFecha.FMT_ESPANOL) {
                return dia + '/' + mes + '/' + anio;
            }
            if (tpoFormato === constants_1.CodigoFormatoFecha.FMT_INVERSOPLANO) {
                return anio + mes + dia;
            }
            if (tpoFormato === constants_1.CodigoFormatoFecha.FMT_INVERSO) {
                return anio + '/' + mes + '/' + dia;
            }
            if (tpoFormato === constants_1.CodigoFormatoFecha.FMT_PLANO) {
                return fecha;
            }
            return fecha;
        case constants_1.CodigoFormatoFecha.FMT_INVERSOPLANO:
            /* yyyymmdd */
            if (tpoFormato === constants_1.CodigoFormatoFecha.FMT_ITALIANO) {
                return dia + '-' + mes + '-' + anio;
            }
            if (tpoFormato === constants_1.CodigoFormatoFecha.FMT_ESPANOL) {
                return dia + '/' + mes + '/' + anio;
            }
            if (tpoFormato === constants_1.CodigoFormatoFecha.FMT_PLANO) {
                return dia + mes + anio;
            }
            if (tpoFormato === constants_1.CodigoFormatoFecha.FMT_INVERSO) {
                return anio + '/' + mes + '/' + dia;
            }
            if (tpoFormato === constants_1.CodigoFormatoFecha.FMT_INVERSOPLANO) {
                return fecha;
            }
            return fecha;
        case constants_1.CodigoFormatoFecha.FMT_INVERSO:
            /* yyyy/mm/dd */
            if (tpoFormato === constants_1.CodigoFormatoFecha.FMT_ITALIANO) {
                return dia + '-' + mes + '-' + anio;
            }
            if (tpoFormato === constants_1.CodigoFormatoFecha.FMT_ESPANOL) {
                return dia + '/' + mes + '/' + anio;
            }
            if (tpoFormato === constants_1.CodigoFormatoFecha.FMT_PLANO) {
                return dia + mes + anio;
            }
            if (tpoFormato === constants_1.CodigoFormatoFecha.FMT_INVERSO) {
                return fecha;
            }
            if (tpoFormato === constants_1.CodigoFormatoFecha.FMT_INVERSOPLANO) {
                return anio + mes + dia;
                ;
            }
            return fecha;
    }
}
exports.setFormatoFecha = setFormatoFecha;
//# sourceMappingURL=formatearfecha.js.map