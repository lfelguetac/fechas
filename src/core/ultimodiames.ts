import { CodigoFormatoFecha, diasDelMes } from "../constants";
import { getFormatoFecha } from "./getformatofecha";
import { validarFecha } from "./validarfecha";
import { disgregarFecha } from "./disgregarfecha";
import { isBisiesto } from "./bisiesto";

/**
 * 
 * @param fecha 
 * Obtiene el final de mes para cada mes dado en alguno de los formatos validos. Considera años bisiestos.
 */
export function getUltimoDiaMes( fecha: string ): string | CodigoFormatoFecha {

    if (validarFecha(fecha) !== CodigoFormatoFecha.FTM_CORRECTO) { return CodigoFormatoFecha.ERR_FECHA_INVALIDA }

    const mesFebrero = '02';
    const ultimoDiaBisiesto = '29';
    let ultimoDia: string;
    const {mes, anio}  = disgregarFecha(fecha);
    
    for (let fecha of diasDelMes){
        if ( isBisiesto(anio) && mes === mesFebrero ){
            ultimoDia = ultimoDiaBisiesto;
            break;
        } else if (mes === fecha.mes){ 
            ultimoDia = fecha.dia;
            break;
        }
    }

    const formato = getFormatoFecha(fecha);
    
    let fechaUltimoDiaMes;
    switch (formato){

        case CodigoFormatoFecha.FMT_ESPANOL: 
            /* dd/mm/yyyy */
            fechaUltimoDiaMes = ultimoDia + '/' + mes + '/' + anio;
            break;
        case CodigoFormatoFecha.FMT_ITALIANO:
            /* dd-mm-yyyy*/
            fechaUltimoDiaMes = ultimoDia + '-' + mes + '-' + anio;
            break;
        case CodigoFormatoFecha.FMT_PLANO:
            /* ddmmyyyy*/
            fechaUltimoDiaMes = ultimoDia + mes + anio;
            break;
        case CodigoFormatoFecha.FMT_INVERSOPLANO:
            /* yyyymmdd */
            fechaUltimoDiaMes = anio + mes + ultimoDia;
            break;
        case CodigoFormatoFecha.FMT_INVERSO:
            /* yyyy/mm/dd */
            fechaUltimoDiaMes = anio + '/' + mes + '/' + ultimoDia;
            break;

    }

    return fechaUltimoDiaMes;

}