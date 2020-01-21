import { getFormatoFecha } from "./getformatofecha";
import { CodigoFormatoFecha } from "../constants";
import { disgregarFecha } from "./disgregarfecha";

/**
 * 
 * @param fecha 
 * @param tpoFormato Codigo formato de fecha
 * Asigna algunos de los formatos validos a una fecha dada. 
 */
export function setFormatoFecha( fecha: string, tpoFormato: CodigoFormatoFecha ) : string | CodigoFormatoFecha{
    
    const formato = getFormatoFecha(fecha);
    if (formato === CodigoFormatoFecha.ERR_FECHA_INVALIDA) { return formato }

    const {dia, mes, anio} = disgregarFecha(fecha);
    switch ( formato ){
        case CodigoFormatoFecha.FMT_ESPANOL: case CodigoFormatoFecha.FMT_ITALIANO:
        /* dd/mm/yyyy o dd-mm-yyyy*/
            if (tpoFormato ===  CodigoFormatoFecha.FMT_ITALIANO){
                return fecha.replace(/[/]/g, '-');
            }
            if (tpoFormato ===  CodigoFormatoFecha.FMT_ESPANOL){
                return fecha.replace(/[-]/g, '/');
            }
            if (tpoFormato === CodigoFormatoFecha.FMT_PLANO){
                return fecha.replace(/[/-]/g,'');
            }
            if (tpoFormato === CodigoFormatoFecha.FMT_INVERSOPLANO){
                return anio + mes + dia;
            }
            if (tpoFormato === CodigoFormatoFecha.FMT_INVERSO){
                return anio + '/' + mes  + '/' + dia;
            }
            return fecha;
        case CodigoFormatoFecha.FMT_PLANO:
        /* ddmmyyyy*/
            if (tpoFormato ===  CodigoFormatoFecha.FMT_ITALIANO){
                return dia + '-' + mes  + '-' + anio;
            }
            if (tpoFormato ===  CodigoFormatoFecha.FMT_ESPANOL){
                return dia + '/' + mes  + '/' + anio;
            }
            if (tpoFormato === CodigoFormatoFecha.FMT_INVERSOPLANO){
                return anio + mes + dia;
            }
            if (tpoFormato === CodigoFormatoFecha.FMT_INVERSO){
                return anio + '/' + mes  + '/' + dia;
            }
            if (tpoFormato === CodigoFormatoFecha.FMT_PLANO){
                return fecha;
            }
            return fecha;
        case CodigoFormatoFecha.FMT_INVERSOPLANO:
        /* yyyymmdd */
            if (tpoFormato ===  CodigoFormatoFecha.FMT_ITALIANO){
                return dia + '-' + mes + '-' + anio;
            }
            if (tpoFormato ===  CodigoFormatoFecha.FMT_ESPANOL){
                return dia + '/' + mes + '/' + anio;
            }
            if (tpoFormato === CodigoFormatoFecha.FMT_PLANO){
                return dia + mes + anio;
            }
            if (tpoFormato === CodigoFormatoFecha.FMT_INVERSO){
                return anio + '/' + mes + '/' + dia;
            }
            if (tpoFormato === CodigoFormatoFecha.FMT_INVERSOPLANO){
                return fecha;
            }
            return fecha;
        case CodigoFormatoFecha.FMT_INVERSO:
        /* yyyy/mm/dd */
            if (tpoFormato ===  CodigoFormatoFecha.FMT_ITALIANO){
                return dia + '-' + mes + '-' + anio;
            }
            if (tpoFormato ===  CodigoFormatoFecha.FMT_ESPANOL){
                return dia + '/' + mes + '/' + anio;
            }
            if (tpoFormato === CodigoFormatoFecha.FMT_PLANO){
                return dia + mes + anio;
            }
            if (tpoFormato === CodigoFormatoFecha.FMT_INVERSO){
                return fecha;
            }
            if (tpoFormato === CodigoFormatoFecha.FMT_INVERSOPLANO){
                return anio + mes + dia;;
            }
            return fecha;
        }

}