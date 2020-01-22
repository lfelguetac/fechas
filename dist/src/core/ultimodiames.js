"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const getformatofecha_1 = require("./getformatofecha");
const validarfecha_1 = require("./validarfecha");
const disgregarfecha_1 = require("./disgregarfecha");
const bisiesto_1 = require("./bisiesto");
/**
 *
 * @param fecha
 * Obtiene el final de mes para cada mes dado en alguno de los formatos validos. Considera años bisiestos.
 */
function getUltimoDiaMes(fecha) {
    if (validarfecha_1.validarFecha(fecha) !== constants_1.CodigoFormatoFecha.FTM_CORRECTO) {
        return constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA;
    }
    const mesFebrero = '02';
    const ultimoDiaBisiesto = '29';
    let ultimoDia;
    const { mes, anio } = disgregarfecha_1.disgregarFecha(fecha);
    for (let fecha of constants_1.diasDelMes) {
        if (bisiesto_1.isBisiesto(anio) && mes === mesFebrero) {
            ultimoDia = ultimoDiaBisiesto;
            break;
        }
        else if (mes === fecha.mes) {
            ultimoDia = fecha.dia;
            break;
        }
    }
    const formato = getformatofecha_1.getFormatoFecha(fecha);
    let fechaUltimoDiaMes;
    switch (formato) {
        case constants_1.CodigoFormatoFecha.FMT_ESPANOL:
            /* dd/mm/yyyy */
            fechaUltimoDiaMes = ultimoDia + '/' + mes + '/' + anio;
            break;
        case constants_1.CodigoFormatoFecha.FMT_ITALIANO:
            /* dd-mm-yyyy*/
            fechaUltimoDiaMes = ultimoDia + '-' + mes + '-' + anio;
            break;
        case constants_1.CodigoFormatoFecha.FMT_PLANO:
            /* ddmmyyyy*/
            fechaUltimoDiaMes = ultimoDia + mes + anio;
            break;
        case constants_1.CodigoFormatoFecha.FMT_INVERSOPLANO:
            /* yyyymmdd */
            fechaUltimoDiaMes = anio + mes + ultimoDia;
            break;
        case constants_1.CodigoFormatoFecha.FMT_INVERSO:
            /* yyyy/mm/dd */
            fechaUltimoDiaMes = anio + '/' + mes + '/' + ultimoDia;
            break;
    }
    return fechaUltimoDiaMes;
}
exports.getUltimoDiaMes = getUltimoDiaMes;
//# sourceMappingURL=ultimodiames.js.map