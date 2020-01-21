import { setFormatoFecha } from "./formatearfecha";
import { CodigoFormatoFecha, feriadosFijos, feriadosVariables } from "../constants";
import { disgregarFecha } from "./disgregarfecha";
import { validarFecha } from "./validarfecha";

/**
 * @param fecha 
 * Valida que una fecha sea habil o no. Considera fines de semana, feriados fijos y variables.
 */
export function isHabil ( fecha: string ): boolean | CodigoFormatoFecha{

    const codigoFormato = validarFecha(fecha);
    if (codigoFormato !== CodigoFormatoFecha.FTM_CORRECTO) { return codigoFormato }

    let habil = true;
    let dateFormatted = setFormatoFecha( fecha, CodigoFormatoFecha.FMT_INVERSO );
    const diaObtenido = new Date(dateFormatted).getDay();
    
    /* Fin de semana */
    if (diaObtenido === 0 || diaObtenido === 6){
        habil = false;
    }

    const { dia, mes, anio } = disgregarFecha(dateFormatted);

    feriadosFijos.map(fecha => {
        if (fecha.dia === dia && fecha.mes === mes){
            habil = false;
        }
    });
    
    feriadosVariables.map(fecha => {
        if (fecha.dia === dia && fecha.mes === mes && fecha.anio === anio){
            habil = false;
        }
    });

    return habil;

}