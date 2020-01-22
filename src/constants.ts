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
    FTM_CORRECTO = 'CORRECTO',

    /* Errores en el formato de la fecha  */
    ERR_FECHA_INVALIDA = 'ERRORFORMATO',  /*Cuando no se puede determinar el tipo de error en fecha*/
    ERR_ANIO_INVALIDO = 'ANOINVALIDO',
    ERR_MES_INVALIDO = 'MESINVALIDO',
    ERR_DIA_INVALIDO = 'DIAINVALIDO'
};


export const feriadosFijos = [
    {dia : '01', mes : '01'},
    {dia : '01', mes : '05'},
    {dia : '21', mes : '05'},
    {dia : '15', mes : '08'},
    {dia : '18', mes : '09'},
    {dia : '19', mes : '09'},
    {dia : '01', mes : '11'},
    {dia : '08', mes : '12'},
    {dia : '25', mes : '12'},
    {dia : '15', mes : '01'}
];


export const feriadosVariables = [
    { dia : '10', mes : '04', anio : '2020' },
    { dia : '11', mes : '04', anio : '2020' }
];


export const diasDelMes = [
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


