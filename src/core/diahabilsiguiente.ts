import { CodigoFormatoFecha } from "../constants"
import { validarFecha } from "./validarfecha";
import { addDias } from "./proximafecha";
import { isHabil } from "./diahabil";

/**
 * 
 * @param fecha 
 * Obtiene el próximo dia hábil de una fecha dada
 */
export function getDiaHabilSiguiente(fecha: string): string | CodigoFormatoFecha {
    
    const codigoFormato: CodigoFormatoFecha = validarFecha(fecha);
    if (codigoFormato !== CodigoFormatoFecha.FTM_CORRECTO){ return codigoFormato}
    
    let diaHabilSiguiente: string = '';
    let habil:boolean = false;
    let sgteDia: number = 1;
    while(!habil){
        let siguienteFecha = addDias(fecha, sgteDia);
        if (isHabil(siguienteFecha)){
            diaHabilSiguiente = siguienteFecha;
            habil = true;
        }
        sgteDia += 1;
    }
    
    return diaHabilSiguiente;

}