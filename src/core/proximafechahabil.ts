import { CodigoFormatoFecha, FormatoFeriados, ErroresComunes } from "../constants";
import { validarFecha } from "./validarfecha";
import { addDias } from "./proximafecha";
import { isHabil } from "./diahabil";

/**
 * @param fecha 
 * @param cantidadDiazHabiles 
 * @param listaFeriados
 * Obtiene una nueva fecha hábil, dados una fecha válida y un listado de feriados, al sumar o restar días hábiles.
 */
export function addDiasHabiles( fecha: string, cantidadDiazHabiles: number, listaFeriados: FormatoFeriados[] ): string { 
    try {

        validarFecha(fecha);
        
        let siguienteFecha: string = '';
        let habil:boolean = false;
        let sgteDia: number = 1;
        let match: number = 0;
        while(!habil){
            siguienteFecha = addDias(fecha, sgteDia);
            if (isHabil(siguienteFecha, listaFeriados)){
                match += 1;
            }
            if (cantidadDiazHabiles === match){ 
                habil = true; 
            }
            sgteDia += 1;
        }
        return siguienteFecha;
    } catch (error) {
        throw (error)
    }

}


