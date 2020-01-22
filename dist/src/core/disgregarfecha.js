"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const getformatofecha_1 = require("./getformatofecha");
/**
 *
 * @param fecha
 * Obtiene de una fecha dada y valida, año mes y dia por separados
 */
function disgregarFecha(fecha) {
    /* all formattes */
    const formato = getformatofecha_1.getFormatoFecha(fecha);
    let dia, mes, anio;
    switch (formato) {
        case constants_1.CodigoFormatoFecha.FMT_ESPANOL:
            /* dd/mm/yyyy */
            [dia, mes, anio] = fecha.split('/');
            break;
        case constants_1.CodigoFormatoFecha.FMT_ITALIANO:
            /* dd-mm-yyyy*/
            [dia, mes, anio] = fecha.split('-');
            break;
        case constants_1.CodigoFormatoFecha.FMT_PLANO:
            /* ddmmyyyy*/
            dia = fecha.substr(0, 2);
            mes = fecha.substr(2, 2);
            anio = fecha.substr(4, 4);
            break;
        case constants_1.CodigoFormatoFecha.FMT_INVERSOPLANO:
            /* yyyymmdd */
            anio = fecha.substr(0, 4);
            mes = fecha.substr(4, 2);
            dia = fecha.substr(6, 2);
            break;
        case constants_1.CodigoFormatoFecha.FMT_INVERSO:
            /* yyyy/mm/dd ej: 2020/09/16*/
            anio = fecha.substr(0, 4);
            mes = fecha.substr(5, 2);
            dia = fecha.substr(8, 2);
            break;
    }
    return { dia: dia, mes: mes, anio: anio };
}
exports.disgregarFecha = disgregarFecha;
//# sourceMappingURL=disgregarfecha.js.map