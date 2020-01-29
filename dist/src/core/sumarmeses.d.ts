import { CodigoFormatoFecha } from "../constants";
/**
 *
 * @param fecha
 * @param nMeses
 * Adiciona N cantidad de meses a una determinada fecha sin importar el formato que esta tenga. Devolviendo la fecha en algunos de los formatos validos que ha sido enviado. Acepta 'sumar' numeros negativos.
 */
export declare function addNmeses(fecha: string, nMeses: number): string | CodigoFormatoFecha;
