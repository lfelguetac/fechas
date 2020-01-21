import { validarFecha } from "./validarfecha";
import { CodigoFormatoFecha } from "../constants";
import { setFormatoFecha } from "./formatearfecha";
import { getFormatoFecha } from "./getformatofecha";
import { disgregarFecha } from "./disgregarfecha";

/**
 * 
 * @param fecha 
 * @param nMeses
 * Adiciona N cantidad de meses a una determinada fecha sin importar el formato que esta tenga. Devolviendo la fecha en algunos de los formatos validos que ha sido enviado. Acepta 'sumar' numeros negativos.
 */
export function addNmeses(fecha: string, nMeses: number): string | CodigoFormatoFecha{

    if (validarFecha(fecha) !== CodigoFormatoFecha.FTM_CORRECTO) { return  CodigoFormatoFecha.ERR_FECHA_INVALIDA }

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
    
}