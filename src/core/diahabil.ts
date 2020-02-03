import { setFormatoFecha } from "./formatearfecha";
import { CodigoFormatoFecha, FormatoFeriados, ErroresComunes } from "../constants";
import { disgregarFecha } from "./disgregarfecha";
import { validarFecha } from "./validarfecha";


/**
 * 
 * @param fecha 
 * @param feriados
 * Valida que una fecha sea hábil o no dados la fecha y el listado de feriados de su país. Valida feriados considerando dd mm yyyy y fines de semana.
 */
export function isHabil ( fecha: string, listaFeriados: FormatoFeriados[] ): boolean {
    try {

        validarFecha(fecha);

        if (listaFeriados.length === 0) {  
            throw new Error(ErroresComunes.ERR_FERIADOS_VACIO)
        }
    
        let habil = true;
        let dateFormatted = setFormatoFecha( fecha, CodigoFormatoFecha.FMT_INVERSO );
        const diaObtenido = new Date(dateFormatted).getDay();
        
        /* Fin de semana */
        if (diaObtenido === 0 || diaObtenido === 6){
            habil = false;
        }
    
        const { dia, mes, anio } = disgregarFecha(dateFormatted);
    
        listaFeriados.filter(filtro => !filtro.hasOwnProperty("anio")).map(fecha =>{
            if (fecha.dia === dia && fecha.mes === mes){
                habil = false;
            }
        });
    
        listaFeriados.filter(filtro => filtro.hasOwnProperty("anio")).map(fecha =>{
            if (fecha.dia === dia && fecha.mes === mes  && fecha.anio === anio){
                habil = false;
            }
        });
    
        return habil;

    } catch (error) { throw (error) }

}