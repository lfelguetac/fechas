import { CodigoFormatoFecha, FormatoFeriados } from "../constants"
import { validarFecha } from "./validarfecha";
import { addDias } from "./proximafecha";
import { isHabil } from "./diahabil";

 /**
  * 
  * @param fecha 
  * @param feriados 
  * Obtiene la próxima fecha hábil dados una fecha y el listado de feriados de su país
  */
export function getDiaHabilSiguiente(fecha: string, listaFeriados: FormatoFeriados[]): string {
    try {
        validarFecha(fecha);
        let diaHabilSiguiente: string = '';
        let habil:boolean = false;
        let sgteDia: number = 1;
        while(!habil){
            let siguienteFecha = addDias(fecha, sgteDia);
            if (isHabil(siguienteFecha, listaFeriados)){
                diaHabilSiguiente = siguienteFecha;
                habil = true;
            }
            sgteDia += 1;
        }
        
        return diaHabilSiguiente;
    
    } catch (error) {
        throw new Error(error);
    }
}