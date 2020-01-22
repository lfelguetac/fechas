"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const getformatofecha_1 = require("./getformatofecha");
const disgregarfecha_1 = require("./disgregarfecha");
const bisiesto_1 = require("./bisiesto");
/**
 *
 * @param fecha
 * Valida la consistencia de una fecha dada
 */
function validarFecha(fecha) {
    let codigoFormatoFecha = constants_1.CodigoFormatoFecha.FTM_CORRECTO;
    // if (fecha.length > 10) { 
    //     return CodigoFormatoFecha.ERR_FECHA_INVALIDA;
    // }
    const formato = getformatofecha_1.getFormatoFecha(fecha);
    if (formato === constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA) {
        return constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA;
    }
    ;
    const { dia, mes, anio } = disgregarfecha_1.disgregarFecha(fecha);
    if (anio < 1901 || anio > 2150) {
        codigoFormatoFecha = constants_1.CodigoFormatoFecha.ERR_ANIO_INVALIDO;
    }
    if (mes < 1 || mes > 12) {
        codigoFormatoFecha = constants_1.CodigoFormatoFecha.ERR_MES_INVALIDO;
    }
    if (dia < 1 || dia > 31) {
        codigoFormatoFecha = constants_1.CodigoFormatoFecha.ERR_DIA_INVALIDO;
    }
    if (mes === '02') {
        if (!bisiesto_1.isBisiesto(anio) && dia > 28) {
            codigoFormatoFecha = constants_1.CodigoFormatoFecha.ERR_DIA_INVALIDO;
        }
        if (dia < 1 || dia > 29) {
            codigoFormatoFecha = constants_1.CodigoFormatoFecha.ERR_DIA_INVALIDO;
        }
    }
    if (dia < 1 || dia > 31) {
        codigoFormatoFecha = constants_1.CodigoFormatoFecha.ERR_DIA_INVALIDO;
    }
    constants_1.diasDelMes.map(fecha => {
        if (mes !== '02' && mes === fecha.mes && dia > fecha.dia) {
            codigoFormatoFecha = constants_1.CodigoFormatoFecha.ERR_DIA_INVALIDO;
        }
    });
    return codigoFormatoFecha;
}
exports.validarFecha = validarFecha;
//# sourceMappingURL=validarfecha.js.map