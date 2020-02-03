import { getFormatoFecha } from "./getformatofecha";
import { CodigoFormatoFecha } from "../constants";
import { disgregarFecha } from "./disgregarfecha";

/**
 * 
 * @param fecha 
 * @param tipoFormato
 * Asigna alguno de los formatos validos a una fecha dada. 
 */
export function setFormatoFecha( fecha: string, tipoFormato: CodigoFormatoFecha ) : string {
    try {

        const codigoFormatoFecha = getFormatoFecha(fecha);

        const {dia, mes, anio} = disgregarFecha(fecha);
        switch ( codigoFormatoFecha ){
            case CodigoFormatoFecha.FMT_ESPANOL: case CodigoFormatoFecha.FMT_ITALIANO:
            /* dd/mm/yyyy o dd-mm-yyyy*/
                if (tipoFormato ===  CodigoFormatoFecha.FMT_ITALIANO){
                    return fecha.replace(/[/]/g, '-');
                }
                if (tipoFormato ===  CodigoFormatoFecha.FMT_ESPANOL){
                    return fecha.replace(/[-]/g, '/');
                }
                if (tipoFormato === CodigoFormatoFecha.FMT_PLANO){
                    return fecha.replace(/[/-]/g,'');
                }
                if (tipoFormato === CodigoFormatoFecha.FMT_INVERSOPLANO){
                    return anio + mes + dia;
                }
                if (tipoFormato === CodigoFormatoFecha.FMT_INVERSO){
                    return anio + '/' + mes  + '/' + dia;
                }
                return fecha;
            case CodigoFormatoFecha.FMT_PLANO:
            /* ddmmyyyy*/
                if (tipoFormato ===  CodigoFormatoFecha.FMT_ITALIANO){
                    return dia + '-' + mes  + '-' + anio;
                }
                if (tipoFormato ===  CodigoFormatoFecha.FMT_ESPANOL){
                    return dia + '/' + mes  + '/' + anio;
                }
                if (tipoFormato === CodigoFormatoFecha.FMT_INVERSOPLANO){
                    return anio + mes + dia;
                }
                if (tipoFormato === CodigoFormatoFecha.FMT_INVERSO){
                    return anio + '/' + mes  + '/' + dia;
                }
                if (tipoFormato === CodigoFormatoFecha.FMT_PLANO){
                    return fecha;
                }
                return fecha;
            case CodigoFormatoFecha.FMT_INVERSOPLANO:
            /* yyyymmdd */
                if (tipoFormato ===  CodigoFormatoFecha.FMT_ITALIANO){
                    return dia + '-' + mes + '-' + anio;
                }
                if (tipoFormato ===  CodigoFormatoFecha.FMT_ESPANOL){
                    return dia + '/' + mes + '/' + anio;
                }
                if (tipoFormato === CodigoFormatoFecha.FMT_PLANO){
                    return dia + mes + anio;
                }
                if (tipoFormato === CodigoFormatoFecha.FMT_INVERSO){
                    return anio + '/' + mes + '/' + dia;
                }
                if (tipoFormato === CodigoFormatoFecha.FMT_INVERSOPLANO){
                    return fecha;
                }
                return fecha;
            case CodigoFormatoFecha.FMT_INVERSO:
            /* yyyy/mm/dd */
                if (tipoFormato ===  CodigoFormatoFecha.FMT_ITALIANO){
                    return dia + '-' + mes + '-' + anio;
                }
                if (tipoFormato ===  CodigoFormatoFecha.FMT_ESPANOL){
                    return dia + '/' + mes + '/' + anio;
                }
                if (tipoFormato === CodigoFormatoFecha.FMT_PLANO){
                    return dia + mes + anio;
                }
                if (tipoFormato === CodigoFormatoFecha.FMT_INVERSO){
                    return fecha;
                }
                if (tipoFormato === CodigoFormatoFecha.FMT_INVERSOPLANO){
                    return anio + mes + dia;;
                }
                return fecha;
        }

    } catch (error) {
        throw (error);
    }

}