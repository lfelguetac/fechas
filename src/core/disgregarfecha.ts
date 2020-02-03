import { CodigoFormatoFecha } from "../constants";
import { getFormatoFecha } from "./getformatofecha";

/**
 * 
 * @param fecha 
 * Obtiene de una fecha valida dada, año, mes y dia por separados
 */
export function disgregarFecha(fecha:string): any{
    /* all formattes */
    try {

        const formato = getFormatoFecha(fecha);
    
        let dia, mes, anio;
        switch (formato){
            case CodigoFormatoFecha.FMT_ESPANOL: 
                /* dd/mm/yyyy */
                [dia, mes, anio] = fecha.split('/');
                break;        
            case CodigoFormatoFecha.FMT_ITALIANO:
                /* dd-mm-yyyy*/
                [dia, mes, anio] = fecha.split('-');
                break;
            case CodigoFormatoFecha.FMT_PLANO:
                /* ddmmyyyy*/
                dia = fecha.substr(0, 2);
                mes = fecha.substr(2, 2);
                anio = fecha.substr(4, 4);
                break;
            case CodigoFormatoFecha.FMT_INVERSOPLANO:
                /* yyyymmdd */
                anio = fecha.substr(0, 4);
                mes = fecha.substr(4, 2);
                dia = fecha.substr(6, 2);
    
                break;
            case CodigoFormatoFecha.FMT_INVERSO:
                /* yyyy/mm/dd ej: 2020/09/16*/
                anio = fecha.substr(0, 4);
                mes = fecha.substr(5, 2);
                dia = fecha.substr(8, 2);
                break;
        }
    
        return { dia: dia, mes: mes, anio: anio }

    } catch (error) {
        throw (error);
    }

}
