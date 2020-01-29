import { CodigoFormatoFecha } from "../constants";
/**
 * @param fecha
 * Valida que una fecha sea habil o no. Considera fines de semana, feriados fijos y variables.
 */
export declare function isHabil(fecha: string): boolean | CodigoFormatoFecha;
