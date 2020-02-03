import { CodigoFormatoFecha } from "../constants";
import { validarFecha } from "./validarfecha";
import { setFormatoFecha } from "./formatearfecha";
import { getFormatoFecha } from "./getformatofecha";
import { disgregarFecha } from "./disgregarfecha";

/**
 * @param fecha 
 * @param nDias 
 * Obtiene una nueva fecha al sumar o restar días
*/
export function addDias ( fecha: string, nDias: number ): string {
    try {

        validarFecha(fecha);

        const aFecha = new Date(setFormatoFecha(fecha, CodigoFormatoFecha.FMT_INVERSO));
        const newDate = new Date(aFecha.setDate(aFecha.getDate() + nDias));
        const newDateString = newDate.toISOString().slice(0,10).replace(/[-]/g, '/');
    
        const {dia, mes, anio} = disgregarFecha(newDateString);
        const fmto = getFormatoFecha(fecha);
    
        switch (fmto) 
        {
            case CodigoFormatoFecha.FMT_ESPANOL: 
                return dia + '/' + mes  + '/' + anio;
            case CodigoFormatoFecha.FMT_ITALIANO:
                return dia + '-' + mes  + '-' + anio;
            case CodigoFormatoFecha.FMT_PLANO:
                return dia + mes + anio;
            case CodigoFormatoFecha.FMT_INVERSOPLANO:
                return anio + mes  + dia;
            case CodigoFormatoFecha.FMT_INVERSO:
                return anio + '/' + mes  + '/' + dia;
        }
    } catch (error) {
        throw (error)
    }

}