import { CodigoFormatoFecha } from "../constants";
/**
 *
 * @param fecha
 * Obtiene el final de mes para cada mes dado en alguno de los formatos validos. Considera años bisiestos.
 */
export declare function getUltimoDiaMes(fecha: string): string | CodigoFormatoFecha;
