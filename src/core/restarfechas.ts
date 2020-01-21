import { getFormatoFecha } from "./getformatofecha";
import { setFormatoFecha } from "./formatearfecha";
import { CodigoFormatoFecha } from "../constants";
import { validarFecha } from "./validarfecha";

/**
 * 
 * @param fecha1 
 * @param fecha2 
 * 
 * Obtiene la diferencia en dias de dos fechas validas
 */
export function restarFechas ( fecha1: string, fecha2: string ): number | CodigoFormatoFecha {

    const codigoFormatoFecha1 = validarFecha(fecha1);
    const codigoFormatoFecha2 = validarFecha(fecha2);

    if ( codigoFormatoFecha1 !== CodigoFormatoFecha.FTM_CORRECTO ){
        return codigoFormatoFecha1;
    } else if (codigoFormatoFecha2 !== CodigoFormatoFecha.FTM_CORRECTO){
        return codigoFormatoFecha2;
    }

    if (getFormatoFecha(fecha1) !== getFormatoFecha(fecha2)) { return CodigoFormatoFecha.ERR_FECHA_INVALIDA }

    let aFecha1 = new Date(fecha1);
    let aFecha2 = new Date(fecha2);

    if (getFormatoFecha(fecha1) != CodigoFormatoFecha.FMT_INVERSO){
        aFecha1 = new Date(setFormatoFecha(fecha1, CodigoFormatoFecha.FMT_INVERSO));
        aFecha2 = new Date(setFormatoFecha(fecha2, CodigoFormatoFecha.FMT_INVERSO));
    }

    const diff = aFecha1.getTime() - aFecha2.getTime();
    
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));

    return diffDays;
}