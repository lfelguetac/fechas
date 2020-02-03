import { getFormatoFecha } from "./getformatofecha";
import { setFormatoFecha } from "./formatearfecha";
import { CodigoFormatoFecha, ErroresComunes } from "../constants";
import { validarFecha } from "./validarfecha";

/**
 * 
 * @param fecha1 
 * @param fecha2 
 * 
 * Obtiene la diferencia en días de dos fechas validas con el mismo formato
 */
export function restarFechas ( fecha1: string, fecha2: string ): number {
    try {

        if (getFormatoFecha(fecha1) !== getFormatoFecha(fecha2)) { 
            throw new Error(ErroresComunes.ERR_FMTOS_DISPARES)
        }

        validarFecha(fecha1);
        validarFecha(fecha2);

        let aFecha1 = new Date(fecha1);
        let aFecha2 = new Date(fecha2);

        aFecha1 = new Date(setFormatoFecha(fecha1, CodigoFormatoFecha.FMT_INVERSO));
        aFecha2 = new Date(setFormatoFecha(fecha2, CodigoFormatoFecha.FMT_INVERSO));
                
        const diff = aFecha1.getTime() - aFecha2.getTime();
        
        const diffDays = Math.ceil(diff / (1000 * 3600 * 24));        

        return diffDays;

    } catch (err) {
        throw (err);
    }

}