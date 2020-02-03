import { CodigoFormatoFecha, diasDelMes, ErroresComunes } from "../constants";
import { getFormatoFecha } from "./getformatofecha";
import { disgregarFecha } from "./disgregarfecha";
import { isBisiesto } from "./bisiesto";

/**
 * 
 * @param fecha 
 * Valida la consistencia de una fecha dada
 */
export function validarFecha (fecha: string): CodigoFormatoFecha {
    try {

        getFormatoFecha(fecha);
        const {dia, mes, anio} = disgregarFecha(fecha);
    
        if (anio < 1901 || anio > 2150) {
            throw new Error(ErroresComunes.ERR_ANIO_INVALIDO);   
        }

        if (mes < 1 || mes  > 12) {
            throw new Error(ErroresComunes.ERR_MES_INVALIDO);
        }

        if (dia < 1 || dia > 31) {
            throw new Error(ErroresComunes.ERR_DIA_INVALIDO);
        }

        if (mes === '02') {
            if (!isBisiesto(anio) && dia > 28) { throw new Error(ErroresComunes.ERR_DIA_INVALIDO); }
            if (dia < 1 || dia > 29) { throw new Error(ErroresComunes.ERR_DIA_INVALIDO); }
        }

        diasDelMes.map(fecha => {
            if (mes !== '02' && mes === fecha.mes  && dia > fecha.dia) { 
                throw new Error(ErroresComunes.ERR_DIA_INVALIDO);
            }
        });

        return CodigoFormatoFecha.FMT_CORRECTO;

    } catch (error) {
        throw (error);
    }

}