export enum CodigoFormatoFecha {

    /** ddmmyyyy */
    FMT_PLANO = 'PLANO', 
    /** yyyymmdd */
    FMT_INVERSOPLANO = 'INVERSOPLANO', 
    /** yyyy/mm/dd */
    FMT_INVERSO = 'INVERSO',
    /** dd/mm/yyyy */
    FMT_ESPANOL = 'ESPANOL',
    /** dd-mm-yyyy */
    FMT_ITALIANO = 'ITALIANO',
    /** ...para saber si fecha tiene algunos de los formatos validos */
    FMT_CORRECTO = 'CORRECTO',

};


export enum ErroresComunes {
    ERR_FERIADOS_VACIO = 'La lista de feriados no puede venir vacia',
    /* Errores en el formato de la fecha  */
    ERR_FECHA_INVALIDA = 'Formato de fecha invalida',  /*Cuando no se puede determinar el tipo de error en fecha*/
    ERR_ANIO_INVALIDO = 'Formato de año invalido',
    ERR_MES_INVALIDO = 'Formato de mes invalido',
    ERR_DIA_INVALIDO = 'Formato de dia invalido',
    ERR_FMTOS_DISPARES = 'Las fechas dadas deben tener el mismo formato.'
}

export interface FormatoFeriados {
    dia: string;
    mes: string;
    anio?: string
}


export const diasDelMes: FormatoFeriados[] = [
    {dia : '31', mes : '01'},
    {dia : '28', mes : '02'},
    {dia : '31', mes : '03'},
    {dia : '30', mes : '04'},
    {dia : '31', mes : '05'},
    {dia : '30', mes : '06'},
    {dia : '31', mes : '07'},
    {dia : '31', mes : '08'},
    {dia : '30', mes : '09'},
    {dia : '31', mes : '10'},
    {dia : '30', mes : '11'},
    {dia : '31', mes : '12'},
];
