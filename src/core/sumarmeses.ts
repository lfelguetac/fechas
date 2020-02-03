import { validarFecha } from "./validarfecha";
import { CodigoFormatoFecha } from "../constants";
import { setFormatoFecha } from "./formatearfecha";
import { getFormatoFecha } from "./getformatofecha";
import { disgregarFecha } from "./disgregarfecha";

/**
 * 
 * @param fecha 
 * @param nMeses
 * Suma N cantidad de meses a una determinada fecha sin importar el formato que este tenga, devolviendo la fecha en algunos de los formatos validos que ha sido enviado. Acepta 'sumar' números negativos.
 */
export function addMeses(fecha: string, nMeses: number): string {
    try {

        validarFecha(fecha)
        
        const dateConvert = setFormatoFecha(fecha, CodigoFormatoFecha.FMT_INVERSO);
        const aFecha = new Date(dateConvert);
    
        const newDate = new Date(aFecha.setMonth(aFecha.getMonth() + nMeses));
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