
/**
 * 
 * @param año 
 * Indica si el año dado es bisiesto o no 
 */
export function isBisiesto(anio:number): boolean {
    return ((anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0) ? true : false;
}