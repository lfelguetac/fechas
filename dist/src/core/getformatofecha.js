"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const numeros_1 = require("./numeros");
/**
 *
 * @param fecha
 * Obtiene el tipo de formato de una fecha dada
 */
function getFormatoFecha(fecha) {
    let dia, mes, anio;
    dia = fecha.substr(0, 2);
    mes = fecha.substr(2, 2);
    anio = fecha.substr(4, 4);
    if ((fecha.substr(2, 1) === '/' && fecha.substr(5, 1) === '/') && fecha.length === 10 && (numeros_1.isNumero(fecha.split('/')[0]) && fecha.split('/')[0].length <= 2) && (numeros_1.isNumero(fecha.split('/')[1]) && fecha.split('/')[1].length <= 2) && (numeros_1.isNumero(fecha.split('/')[2]) && fecha.split('/')[2].length === 4)) {
        /*  dd/mm/yyyy  */
        return constants_1.CodigoFormatoFecha.FMT_ESPANOL;
    }
    else if ((fecha.substr(4, 1) === '/' && fecha.substr(7, 1) === '/') && (numeros_1.isNumero(fecha.split('/')[0]) && fecha.split('/')[0].length === 4) && (numeros_1.isNumero(fecha.split('/')[1]) && fecha.split('/')[1].length <= 2) && (numeros_1.isNumero(fecha.split('/')[2]) && fecha.split('/')[2].length <= 2)) {
        /*  yyyy/mm/dd  o fmto largo, ej: 2021-01-16T03:00:00.000Z */
        return constants_1.CodigoFormatoFecha.FMT_INVERSO;
    }
    if ((fecha.substr(2, 1) === '-' && fecha.substr(5, 1) === '-') && fecha.length <= 10 && (numeros_1.isNumero(fecha.split('-')[0]) && fecha.split('-')[0].length <= 2) && (numeros_1.isNumero(fecha.split('-')[1]) && fecha.split('-')[1].length <= 2) && (numeros_1.isNumero(fecha.split('-')[2]) && fecha.split('-')[2].length <= 4)) {
        return constants_1.CodigoFormatoFecha.FMT_ITALIANO;
    }
    if (numeros_1.isNumero(fecha) && fecha.length === 8 && (dia >= 1 && dia <= 31) && (mes >= 1 && mes <= 12) && (anio >= 1901 && anio <= 2150)) {
        return constants_1.CodigoFormatoFecha.FMT_PLANO;
    }
    dia = fecha.substr(6, 2);
    mes = fecha.substr(4, 2);
    anio = fecha.substr(0, 4);
    if (numeros_1.isNumero(fecha) && fecha.length === 8 && (dia >= 1 && dia <= 31) && (mes >= 1 && mes <= 12) && (anio >= 1901 && anio <= 2150)) {
        return constants_1.CodigoFormatoFecha.FMT_INVERSOPLANO;
    }
    return constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA;
}
exports.getFormatoFecha = getFormatoFecha;
//# sourceMappingURL=getformatofecha.js.map