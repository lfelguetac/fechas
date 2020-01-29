import { CodigoFormatoFecha } from "../constants";
/**
 *
 * @param fecha
 * @param cantidadDiazHabiles
 * Obtiene una nueva fecha habil al sumar o restar días habiles (considera fines de semana y festivos )
 */
export declare function addDiasHabiles(fecha: string, cantidadDiazHabiles: number): string | CodigoFormatoFecha;
