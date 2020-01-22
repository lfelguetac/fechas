import { CodigoFormatoFecha, diasDelMes } from "../constants";
import { getFormatoFecha } from "./getformatofecha";
import { disgregarFecha } from "./disgregarfecha";
import { isBisiesto } from "./bisiesto";

/**
 * 
 * @param fecha 
 * Valida la consistencia de una fecha dada
 */
export function validarFecha (fecha: string): CodigoFormatoFecha {

    let codigoFormatoFecha: CodigoFormatoFecha = CodigoFormatoFecha.FTM_CORRECTO;

    // if (fecha.length > 10) { 
    //     return CodigoFormatoFecha.ERR_FECHA_INVALIDA;
    // }
    
    const formato: CodigoFormatoFecha = getFormatoFecha(fecha);
    if (formato === CodigoFormatoFecha.ERR_FECHA_INVALIDA) { return CodigoFormatoFecha.ERR_FECHA_INVALIDA };

    const {dia, mes, anio} = disgregarFecha(fecha);

    if (anio < 1901 || anio > 2150) {
        codigoFormatoFecha = CodigoFormatoFecha.ERR_ANIO_INVALIDO;
    }

    if (mes < 1 || mes  > 12) {
        codigoFormatoFecha = CodigoFormatoFecha.ERR_MES_INVALIDO;
    }

    if (dia < 1 || dia  > 31) {
        codigoFormatoFecha = CodigoFormatoFecha.ERR_DIA_INVALIDO;
    }

    if (mes === '02') {
        if (!isBisiesto(anio) && dia > 28) { codigoFormatoFecha = CodigoFormatoFecha.ERR_DIA_INVALIDO }
        if (dia < 1 || dia > 29) { codigoFormatoFecha = CodigoFormatoFecha.ERR_DIA_INVALIDO }
    }

    if (dia < 1 || dia > 31) { 
        codigoFormatoFecha = CodigoFormatoFecha.ERR_DIA_INVALIDO;
    }

    diasDelMes.map(fecha => {
        if (mes !== '02' && mes === fecha.mes  && dia > fecha.dia) { 
            codigoFormatoFecha = CodigoFormatoFecha.ERR_DIA_INVALIDO;
        }
    });
    
    return codigoFormatoFecha;

}