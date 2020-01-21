import { CodigoFormatoFecha } from "../constants";
import { validarFecha } from "./validarfecha";
import { addDias } from "./proximafecha";
import { isHabil } from "./diahabil";

/**
 * 
 * @param fecha 
 * @param cantidadDiazHabiles 
 * Obtiene una nueva fecha habil al sumar o restar días habiles (considera fines de semana y festivos )
 */
export function addDiasHabiles ( fecha: string, cantidadDiazHabiles: number ): string | CodigoFormatoFecha { 

    if (validarFecha(fecha) !== CodigoFormatoFecha.FTM_CORRECTO) { return CodigoFormatoFecha.ERR_FECHA_INVALIDA }

    let habil:boolean = false;
    let sgteDia: number = 1;
    let match: number = 0;
    while(!habil){
        let siguienteFecha = addDias(fecha, sgteDia);
        if (isHabil(siguienteFecha)){
            match += 1;
        }
        if (cantidadDiazHabiles === match){
            return siguienteFecha;
        }
        sgteDia += 1;
    }

}


