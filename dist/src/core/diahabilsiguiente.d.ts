import { CodigoFormatoFecha, OptionFeriados } from "../constants";
/**
 *
 * @param fecha
 * Obtiene el próximo dia hábil de una fecha dada
 */
export declare function getDiaHabilSiguiente(fecha: string, feriados: OptionFeriados[]): string | CodigoFormatoFecha;
