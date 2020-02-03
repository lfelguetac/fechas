export declare enum CodigoFormatoFecha {
    /** ddmmyyyy */
    FMT_PLANO = "PLANO",
    /** yyyymmdd */
    FMT_INVERSOPLANO = "INVERSOPLANO",
    /** yyyy/mm/dd */
    FMT_INVERSO = "INVERSO",
    /** dd/mm/yyyy */
    FMT_ESPANOL = "ESPANOL",
    /** dd-mm-yyyy */
    FMT_ITALIANO = "ITALIANO",
    /** ...para saber si fecha tiene algunos de los formatos validos */
    FTM_CORRECTO = "CORRECTO",
    ERR_FECHA_INVALIDA = "ERRORFORMATO",
    ERR_ANIO_INVALIDO = "ANOINVALIDO",
    ERR_MES_INVALIDO = "MESINVALIDO",
    ERR_DIA_INVALIDO = "DIAINVALIDO"
}
export interface OptionFeriados {
    dia: string;
    mes: string;
    anio?: string;
}
export declare const feriados: OptionFeriados[];
export declare const feriadosFijos: OptionFeriados[];
export declare const feriadosVariables: {
    dia: string;
    mes: string;
    anio: string;
}[];
export declare const diasDelMes: {
    dia: string;
    mes: string;
}[];
