import { CodigoFormatoFecha } from '../src/constants';
import { addNmeses,getDiaHabilSiguiente, getFormatoFecha, setFormatoFecha, isBisiesto, isHabil, validarFecha, restarFechas, disgregarFecha, getUltimoDiaMes, addDias, addDiasHabiles } from '../src';


describe('determina el formato de las fechas', () => {

    it('valida getFormatoFecha formato espanol', () => {
        expect(getFormatoFecha('11/06/2015')).toBe(CodigoFormatoFecha.FMT_ESPANOL);
    });

    it('valida getFormatoFecha formato para calcular dia weekend', () => {
        expect(getFormatoFecha('2015/06/11')).toBe(CodigoFormatoFecha.FMT_INVERSO);
    });

    it('valida getFormatoFecha formato italiano', () => {
        expect(getFormatoFecha('11-06-2015')).toBe(CodigoFormatoFecha.FMT_ITALIANO);
    });

    it('valida getFormatoFecha formato plano', () => {
        expect(getFormatoFecha('11062015')).toBe(CodigoFormatoFecha.FMT_PLANO);
    });

    it('valida getFormatoFecha formato inverso', () => {
        expect(getFormatoFecha('20150611')).toBe(CodigoFormatoFecha.FMT_INVERSOPLANO);
    });


    it('valida formatos invalidos, ej: que dias y meses no tengan más de 2 caracteres y sean valores númericos, etc', () => {
        expect(getFormatoFecha('158/12/2019')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(getFormatoFecha('15/122/2019')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(getFormatoFecha('15/12/20199')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);

        expect(getFormatoFecha('=0/122/2019')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(getFormatoFecha('12/$8/2019')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(getFormatoFecha('11/12/20.19')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(getFormatoFecha('11/1-2/2019')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        
        expect(getFormatoFecha('11/1i2/2019')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(getFormatoFecha('11/12/20o19')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(getFormatoFecha('1i1/12/2019')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);


        expect(getFormatoFecha('1/1/12/2019')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(getFormatoFecha('11/12/20/19')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        
        expect(getFormatoFecha('11/10/2019')).toBe(CodigoFormatoFecha.FMT_ESPANOL);

        expect(getFormatoFecha('158-12-2019')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(getFormatoFecha('15-122-2019')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(getFormatoFecha('15-12-20199')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);

        expect(getFormatoFecha('=0-122-2019')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(getFormatoFecha('12-$8-2019')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(getFormatoFecha('11-12-20.19')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(getFormatoFecha('11-1-2-2019')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        
        expect(getFormatoFecha('11-1i2-2019')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(getFormatoFecha('11-12-20o19')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(getFormatoFecha('1i1-12-2019')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);


        expect(getFormatoFecha('1/1-12-2019')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(getFormatoFecha('11-12-20-19')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        
        expect(getFormatoFecha('11-10-2019')).toBe(CodigoFormatoFecha.FMT_ITALIANO);

    });


    it('valida que fechas con apariencia de inverso y plano pero incorrectos sean erroneos', () => {
        expect(getFormatoFecha( '150.12020')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(getFormatoFecha( '150120203')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(getFormatoFecha( '202400321')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(getFormatoFecha( '2020-0321')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
    });

});


describe ('prueba convertir formato PLANO a otros formatos', () => {

    it('setFormatoFecha 15012020 a CALCNOHABIL', () => {
        expect(setFormatoFecha( '15012020',CodigoFormatoFecha.FMT_INVERSO )).toBe('2020/01/15');
    });
    it('setFormatoFecha 15012020 a ESPANOL', () => {
        expect(setFormatoFecha( '15012020',CodigoFormatoFecha.FMT_ESPANOL )).toBe('15/01/2020');
    });
    it('setFormatoFecha 15012020 a INVERSO', () => {
        expect(setFormatoFecha( '15012020',CodigoFormatoFecha.FMT_INVERSOPLANO )).toBe('20200115');
    });
    it('setFormatoFecha 15012020 a ITALIANO', () => {
        expect(setFormatoFecha( '15012020',CodigoFormatoFecha.FMT_ITALIANO )).toBe('15-01-2020');
    });
    it('setFormatoFecha 15012020 a PLANO', () => {
        expect(setFormatoFecha( '15012020',CodigoFormatoFecha.FMT_PLANO )).toBe('15012020');
    });

});


describe('prueba convertir formato ESPANOL a otros formatos', () => {
    
    it('setFormatoFecha 15/01/2020 a CALCNOHABIL', () => {
        expect(setFormatoFecha( '15/01/2020',CodigoFormatoFecha.FMT_INVERSO )).toBe('2020/01/15');
    });
    it('setFormatoFecha 15/01/2020 a PLANO', () => {
        expect(setFormatoFecha( '15/01/2020',CodigoFormatoFecha.FMT_PLANO )).toBe('15012020');
    });
    it('setFormatoFecha 15/01/2020 a ESPANOL', () => {
        expect(setFormatoFecha( '15/01/2020',CodigoFormatoFecha.FMT_ESPANOL )).toBe('15/01/2020');
    });
    it('setFormatoFecha 15/01/2020 a ITALIANO', () => {
        expect(setFormatoFecha( '15/01/2020',CodigoFormatoFecha.FMT_ITALIANO )).toBe('15-01-2020');
    });
    it('setFormatoFecha 15/01/2020 a INVERSO', () => {
        expect(setFormatoFecha( '15/01/2020',CodigoFormatoFecha.FMT_INVERSOPLANO )).toBe('20200115');
    });
});

describe('prueba convertir formato ITALIANO a otros formatos', () => {

    it('setFormatoFecha 15-01-2020 a ITALIANO', () => {
        expect(setFormatoFecha( '15-01-2020',CodigoFormatoFecha.FMT_ITALIANO )).toBe('15-01-2020');
    });
    it('setFormatoFecha 15-01-2020 a ESPANOL', () => {
        expect(setFormatoFecha( '15-01-2020',CodigoFormatoFecha.FMT_ESPANOL )).toBe('15/01/2020');
    });
    it('setFormatoFecha 15-01-2020 a PLANO', () => {
        expect(setFormatoFecha( '15-01-2020',CodigoFormatoFecha.FMT_PLANO )).toBe('15012020');
    });
    it('setFormatoFecha 15-01-2020 a INVERSO PLANO', () => {
        expect(setFormatoFecha( '15-01-2020',CodigoFormatoFecha.FMT_INVERSOPLANO )).toBe('20200115');
    });
    it('setFormatoFecha 15-01-2020 a INVERSO', () => {
        expect(setFormatoFecha( '15-01-2020',CodigoFormatoFecha.FMT_INVERSO )).toBe('2020/01/15');
    });

});

describe('prueba convertir formato INVERSOPLANO a otros formatos', () => {

    it('setFormatoFecha 20200115 a INVERSOPLANO', () => {
        expect(setFormatoFecha( '20200115',CodigoFormatoFecha.FMT_INVERSOPLANO )).toBe('20200115');
    });
    it('setFormatoFecha 20200115 a ITALIANO', () => {
        expect(setFormatoFecha( '20200115',CodigoFormatoFecha.FMT_ITALIANO )).toBe('15-01-2020');
    });
    it('setFormatoFecha 20200115 a PLANO', () => {
        expect(setFormatoFecha( '20200115',CodigoFormatoFecha.FMT_PLANO )).toBe('15012020');
    });
    it('setFormatoFecha 20200115 a ESPANOL', () => {
        expect(setFormatoFecha( '20200115',CodigoFormatoFecha.FMT_ESPANOL )).toBe('15/01/2020');
    });
    it('setFormatoFecha 20200115 a INVERSO', () => {
        expect(setFormatoFecha( '20200115',CodigoFormatoFecha.FMT_INVERSO )).toBe('2020/01/15');
    });

});


describe('prueba convertir formato INVERSO a otros formatos', () => {

    it('setFormatoFecha 2020/01/15 a INVERSOPLANO', () => {
        expect(setFormatoFecha( '2020/01/15',CodigoFormatoFecha.FMT_INVERSOPLANO )).toBe('20200115');
    });
    it('setFormatoFecha 2020/01/15 a ITALIANO', () => {
        expect(setFormatoFecha( '2020/01/15',CodigoFormatoFecha.FMT_ITALIANO )).toBe('15-01-2020');
    });
    it('setFormatoFecha 2020/01/15 a PLANO', () => {
        expect(setFormatoFecha( '2020/01/15',CodigoFormatoFecha.FMT_PLANO )).toBe('15012020');
    });
    it('setFormatoFecha 2020/01/15 a ESPANOL', () => {
        expect(setFormatoFecha( '2020/01/15',CodigoFormatoFecha.FMT_ESPANOL )).toBe('15/01/2020');
    });
    it('setFormatoFecha 2020/01/15 a INVERSO', () => {
        expect(setFormatoFecha( '2020/01/15',CodigoFormatoFecha.FMT_INVERSO )).toBe('2020/01/15');
    });

    it('else path not taken', () => {
        expect(setFormatoFecha( '15-01-2020',CodigoFormatoFecha.FTM_CORRECTO)).toBe('15-01-2020');
        expect(setFormatoFecha( '15012020',CodigoFormatoFecha.FTM_CORRECTO)).toBe('15012020');
        expect(setFormatoFecha( '2020/01/15',CodigoFormatoFecha.FTM_CORRECTO)).toBe('2020/01/15');
        expect(setFormatoFecha( '20200115',CodigoFormatoFecha.FTM_CORRECTO)).toBe('20200115');
    });


});


describe('valida consistencia al formatear fecha', ()=> {
    
    it('valida formato de fecha invalido', () => {
        expect(setFormatoFecha( '34012020',CodigoFormatoFecha.FMT_PLANO )).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(setFormatoFecha( '15.01.2020',CodigoFormatoFecha.FMT_PLANO )).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(setFormatoFecha( '1313020',CodigoFormatoFecha.FMT_PLANO )).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(setFormatoFecha( '15|01|2020',CodigoFormatoFecha.FMT_PLANO )).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA); 
    });

});

describe('validacion años bisiestos', () => {

    it('prueba años bisiestos anterior y posterior a 2020', () => {
        expect(isBisiesto(2004)).toBe(true);
        expect(isBisiesto(2012)).toBe(true);
        expect(isBisiesto(2020)).toBe(true);
        expect(isBisiesto(2028)).toBe(true);
        expect(isBisiesto(2036)).toBe(true);
    });


    it('prueba que los años efectivamente no sean bisiestos', () => {
        expect(isBisiesto(2007)).toBe(false);
        expect(isBisiesto(2010)).toBe(false);
        expect(isBisiesto(2015)).toBe(false);
        expect(isBisiesto(2026)).toBe(false);
        expect(isBisiesto(2030)).toBe(false);
    });
});


describe('valida que fechas sean habiles', () => {

    it ('valida consistencia de fecha', () => {
        // expect(isHabil('29-02-2021')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        // expect(isHabil('29/02/2021')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);

        expect(isHabil('18.01.2020')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(isHabil('13-01/2020')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);

        expect(isHabil('31/04/2021')).toBe(CodigoFormatoFecha.ERR_DIA_INVALIDO);

        expect(isHabil('20200431')).toBe(CodigoFormatoFecha.ERR_DIA_INVALIDO);
        expect(isHabil('2020/04/31')).toBe(CodigoFormatoFecha.ERR_DIA_INVALIDO);
        expect(isHabil('2021/02/29')).toBe(CodigoFormatoFecha.ERR_DIA_INVALIDO);
        expect(isHabil('2020/02/29')).toBe(false);
        
    });

    
    it ('valida el dato correcto cuando es fin de semana o no lo sea', () => {
        expect(isHabil('18/01/2020')).toBe(false);
        expect(isHabil('13/01/2020')).toBe(true);
    });

    it('valida dia festivo', () => {
        expect(isHabil('01/01/2020')).toBe(false)
    });

    it('valida que 15/01/2020 sea festivo', () => {
        expect(isHabil('15/01/2020')).toBe(false)
    });

    it('valida que 29/02/2020 sea no-habil', () => {
        expect(isHabil('29/02/2020')).toBe(false)
    });
});

describe('valida feriados variables', () => {

    it ('valida feriado semana santa 2020', () => {
        expect(isHabil('10/04/2020')).toBe(false);
        expect(isHabil('11/04/2020')).toBe(false);
    });

});



describe('valida que fechas sean correctas', () => {

    it('valida que el el año ingresado sea el correcto: ni < a 1901 ni > a 2150', () => {
        expect(validarFecha('01/01/1900')).toBe(CodigoFormatoFecha.ERR_ANIO_INVALIDO);
        expect(validarFecha('01/01/2200')).toBe(CodigoFormatoFecha.ERR_ANIO_INVALIDO);
        expect(validarFecha('01/01/1902')).toBe(CodigoFormatoFecha.FTM_CORRECTO);
    });

    it('valida que el mes ingresado sea el correcto: ni < 1 ni > 12', () => {
        expect(validarFecha('15/12/2018')).toBe(CodigoFormatoFecha.FTM_CORRECTO);
        expect(validarFecha('15/00/2018')).toBe(CodigoFormatoFecha.ERR_MES_INVALIDO);
        expect(validarFecha('15/13/2018')).toBe(CodigoFormatoFecha.ERR_MES_INVALIDO);
        expect(validarFecha('15/1/2018')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(validarFecha('15/-1/2018')).toBe(CodigoFormatoFecha.ERR_MES_INVALIDO);
        expect(validarFecha('15/120/2018')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
    });

    it('valida que el mes ingresado sea el correcto: ni < 1 ni > 12', () => {
        expect(validarFecha('15/120/2018')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);

        console.log(getFormatoFecha('15/120/2018'));
        

    });

    it('valida que el dia ingresado sea el correcto: ni < 1 ni > 31', () => {
        expect(validarFecha('-2/12/2018')).toBe(CodigoFormatoFecha.ERR_DIA_INVALIDO);
        expect(validarFecha('152/02/2018')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
    });

    it('valida año bisiesto formato español', () => {
        expect(validarFecha('29/02/2015')).toBe(CodigoFormatoFecha.ERR_DIA_INVALIDO);
    });

    it('valida año bisiesto formato italiano', () => {
        expect(isHabil('29-02-2021')).toBe(CodigoFormatoFecha.ERR_DIA_INVALIDO);
    });
    

    it('valida fecha 28/02/2015 sea correcto', () => {
        expect(validarFecha('28/02/2015')).toBe(CodigoFormatoFecha.FTM_CORRECTO);
    });


    it('valida fecha 29/02/2020 sea correcto (bisiesto)', () => {
        expect(validarFecha('29/02/2020')).toBe(CodigoFormatoFecha.FTM_CORRECTO);
    });

    it('valida fecha 29/02/2024 sea correcto (bisiesto)', () => {
        expect(validarFecha('29/02/2024')).toBe(CodigoFormatoFecha.FTM_CORRECTO);
    });

    it('valida dia de febrero mayor al maximo permitido: 29', () => {
        expect(validarFecha('30/02/2020')).toBe(CodigoFormatoFecha.ERR_DIA_INVALIDO);
    });


    it('valida que dia de finde mes se corresponda con el mes', () => {
        expect(validarFecha('30/02/2020')).toBe(CodigoFormatoFecha.ERR_DIA_INVALIDO);
        expect(validarFecha('31/04/2021')).toBe(CodigoFormatoFecha.ERR_DIA_INVALIDO);
        expect(validarFecha('31/06/2020')).toBe(CodigoFormatoFecha.ERR_DIA_INVALIDO);
        
        expect(validarFecha('30/11/2020')).toBe(CodigoFormatoFecha.FTM_CORRECTO);
        expect(validarFecha('31/01/2020')).toBe(CodigoFormatoFecha.FTM_CORRECTO);
        expect(validarFecha('31/03/2020')).toBe(CodigoFormatoFecha.FTM_CORRECTO);
        expect(validarFecha('31/05/2020')).toBe(CodigoFormatoFecha.FTM_CORRECTO);
        expect(validarFecha('31/07/2020')).toBe(CodigoFormatoFecha.FTM_CORRECTO);
        expect(validarFecha('31/08/2020')).toBe(CodigoFormatoFecha.FTM_CORRECTO);
        expect(validarFecha('31/10/2020')).toBe(CodigoFormatoFecha.FTM_CORRECTO);
        expect(validarFecha('31/12/2020')).toBe(CodigoFormatoFecha.FTM_CORRECTO);

        
    });

});


describe('prueba restando dos fechas', () => {

    it ('se valida que la resta devuelva el valor correcto, formato español', () => {
        expect(restarFechas('2019/09/14','2019/09/12')).toBe(2);
        
    });

    it ('se valida que la resta de dos fechas devuelva el valor correcto para formato plano', () => {
        expect(restarFechas('13082019','11082019')).toBe(2);
    });

    it ('se valida que la resta de dos fechas devuelva el valor correcto para formato italiano', () => {
        expect(restarFechas('13-08-2019','11-08-2019')).toBe(2);
    });

    it ('se valida que la resta de dos fechas devuelva el valor correcto para formato inverso', () => {
        expect(restarFechas('2020/01/20','2020/01/18')).toBe(2);
    });

    it ('se valida que la resta de dos fechas devuelva el valor correcto para formato inverso plano', () => {
        expect(restarFechas('20200120','20200118')).toBe(2);
    });


    it ('se valida que el formato de fechas sea el correcto: dia invalido fecha 1', () => {
        expect(restarFechas('132/08/2019','11/08/2019')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(restarFechas('34/08/2019','11/08/2019')).toBe(CodigoFormatoFecha.ERR_DIA_INVALIDO);
    });

    
    it ('se valida que el formato de fechas sea el correcto: dia invalido fecha 1; fmto italiano', () => {
        expect(restarFechas('132-08-2019','11-08-2019')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(restarFechas('33-08-2019','11-08-2019')).toBe(CodigoFormatoFecha.ERR_DIA_INVALIDO);
    });

    it ('se valida que el formato de fechas sea el correcto: dia invalido fecha 1; fmto plano', () => {
      
        expect(restarFechas('132082019','11082019')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
       
    });
    
    it ('se valida que el formato de fechas sea el correcto: dia invalido fecha 1; fmto inverso', () => {
        expect(restarFechas('2019/08/132','2019/08/11')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(restarFechas('2019/08/34','2019/08/11')).toBe(CodigoFormatoFecha.ERR_DIA_INVALIDO);
    });

    it ('se valida que el formato de fechas sea el correcto: dia invalido fecha 2', () => {
        expect(restarFechas('13/08/2019','113/08/2019')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(restarFechas('13/08/2019','32/08/2019')).toBe(CodigoFormatoFecha.ERR_DIA_INVALIDO);
    });


    it ('se valida que el formato de fechas sea el correcto: mes invalido fecha 1', () => {
        expect(restarFechas('13/13/2019','11/12/2019')).toBe(CodigoFormatoFecha.ERR_MES_INVALIDO);
        expect(restarFechas('13/122/2019','11/12/2019')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
    });

    it ('se valida que el formato de fechas sea el correcto: mes invalido fecha 1; fmto italiano', () => {
        expect(restarFechas('13-13-2019','11-12-2019')).toBe(CodigoFormatoFecha.ERR_MES_INVALIDO);
    });

    it ('se valida que el formato de fechas sea el correcto: mes invalido fecha 1; fmto inverso', () => {
        expect(restarFechas('2019/13/13','2019/12/11')).toBe(CodigoFormatoFecha.ERR_MES_INVALIDO);
    });


    it ('se valida que el formato de fechas sea el correcto: mes invalido fecha 2', () => {
        expect(restarFechas('13/08/2019','11/13/2019')).toBe(CodigoFormatoFecha.ERR_MES_INVALIDO);
    });

    it ('se valida que el formato de fechas sea el correcto: mes invalido fecha 2, fmto italiano', () => {
        expect(restarFechas('13-08-2019','11-13-2019')).toBe(CodigoFormatoFecha.ERR_MES_INVALIDO);
    });

    it ('se valida que el formato de fechas sea el correcto: mes invalido fecha 2, fmto inverso', () => {
        expect(restarFechas('2019/08/13','2019/13/11')).toBe(CodigoFormatoFecha.ERR_MES_INVALIDO);
    });


    it ('se valida que la resta de dos fechas devuelva el valor correcto para formato inverso plano', () => {
        expect(restarFechas('20200120','20200118')).toBe(2);
    });


    it ('resta dos fechas con resultado negativo', () => {
        expect(restarFechas('13-08-2019','14-08-2019')).toBe(-1);
        expect(restarFechas('13082019','15082019')).toBe(-2);
        expect(restarFechas('2019/09/14','2019/09/21')).toBe(-7);
        expect(restarFechas('20190914','20190920')).toBe(-6);
    });


    it ('se valida que formato de fechas sea el mismo en ambos parametros', () => {
        expect(restarFechas('20200120','2020/01/18')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(restarFechas('2020/01/18','16/01/2020')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(restarFechas('16/01/2020','16012020')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
    });

})

describe('prueba disgregarFecha', ()=>{

    it('disgrega año, mes y dia: formato espanol', () => {
        const {dia, mes, anio} = disgregarFecha('14/09/2020');
        expect(dia).toBe('14');
        expect(mes).toBe('09');
        expect(anio).toBe('2020');
    });

    it('disgrega año, mes y dia: formato italiano', () => {
        const {dia, mes, anio} = disgregarFecha('14-09-2020');
        expect(dia).toBe('14');
        expect(mes).toBe('09');
        expect(anio).toBe('2020');
    });
    it('disgrega año, mes y dia: formato plano', () => {
        const {dia, mes, anio} = disgregarFecha('14092020');
        expect(dia).toBe('14');
        expect(mes).toBe('09');
        expect(anio).toBe('2020');
    });
    it('disgrega año, mes y dia: formato inverso', () => {
        const {dia, mes, anio} = disgregarFecha('2020/09/14');
        expect(dia).toBe('14');
        expect(mes).toBe('09');
        expect(anio).toBe('2020');
    });
    it('disgrega año, mes y dia: formato inverso plano', () => {
        const {dia, mes, anio} = disgregarFecha('20200914');
        expect(dia).toBe('14');
        expect(mes).toBe('09');
        expect(anio).toBe('2020');
    });


    

});

describe('function getUltimoDiaMes', () => {
    
    it('prueba que fecha sea valida', () => {
        expect(getUltimoDiaMes('12/01/202s1')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
    });

    it('valido que dia de fin de mes sea el que corresponda', () => {
        expect(getUltimoDiaMes('12/01/2021')).toBe('31/01/2021');
        expect(getUltimoDiaMes('12/03/2021')).toBe('31/03/2021');
        expect(getUltimoDiaMes('11/04/2021')).toBe('30/04/2021');
        expect(getUltimoDiaMes('11/05/2021')).toBe('31/05/2021');
        expect(getUltimoDiaMes('16/06/2022')).toBe('30/06/2022');
        expect(getUltimoDiaMes('16/07/2022')).toBe('31/07/2022');
        expect(getUltimoDiaMes('19/08/2022')).toBe('31/08/2022');
        expect(getUltimoDiaMes('19/09/2022')).toBe('30/09/2022');
        expect(getUltimoDiaMes('17/10/2022')).toBe('31/10/2022');
        expect(getUltimoDiaMes('13/11/2022')).toBe('30/11/2022');
        expect(getUltimoDiaMes('14/12/2022')).toBe('31/12/2022');

    });


    it('valida ultimo dia del mes, formato italiano', () => {
        expect(getUltimoDiaMes('14-12-2022')).toBe('31-12-2022');
        expect(getUltimoDiaMes('14-04-2022')).toBe('30-04-2022');
        expect(getUltimoDiaMes('14-04-2020')).toBe('30-04-2020');
    });


    it('valida ultimo dia del mes, formato plano', () => {
        expect(getUltimoDiaMes('14122022')).toBe('31122022');
        expect(getUltimoDiaMes('14042022')).toBe('30042022');
        expect(getUltimoDiaMes('14042020')).toBe('30042020');
    });

    
    it('valida ultimo dia del mes, formato inverso', () => {
        expect(getUltimoDiaMes('2020/12/14')).toBe('2020/12/31');
        expect(getUltimoDiaMes('2020/04/14')).toBe('2020/04/30');
        expect(getUltimoDiaMes('2021/04/14')).toBe('2021/04/30');
    });

    it('valida ultimo dia del mes, formato inverso plano', () => {
        expect(getUltimoDiaMes('20201214')).toBe('20201231');
        expect(getUltimoDiaMes('20200414')).toBe('20200430');
        expect(getUltimoDiaMes('20210414')).toBe('20210430');
    });


    it('para años bisiestos', () => {
        expect(getUltimoDiaMes('12/02/2021')).toBe('28/02/2021');
        expect(getUltimoDiaMes('10/02/2023')).toBe('28/02/2023');
        expect(getUltimoDiaMes('19/02/2025')).toBe('28/02/2025');

        expect(getUltimoDiaMes('11/02/2020')).toBe('29/02/2020');
        expect(getUltimoDiaMes('13/02/2024')).toBe('29/02/2024');
        expect(getUltimoDiaMes('18/02/2028')).toBe('29/02/2028');
        expect(getUltimoDiaMes('10/02/2032')).toBe('29/02/2032');
    });

});



describe('prueba sumar meses', ()=> {

    it ('sumar dos meses dentro del mismo año', ()=> {
        expect(addNmeses('16/07/2020', 2)).toBe('16/09/2020');
        expect(addNmeses('16/09/2020', 2)).toBe('16/11/2020');
    });

    it ('sumar meses en el umbral de otro año', ()=> {
        expect(addNmeses('16/10/2020', 3)).toBe('16/01/2021');
        expect(addNmeses('16/10/2020', 12)).toBe('16/10/2021');
        expect(addNmeses('16/10/2020', 15)).toBe('16/01/2022');
    });

    it ('sumar meses con distintos formatos: italiano', ()=> {
        expect(addNmeses('16-10-2020', 3)).toBe('16-01-2021');
    });
    it ('sumar meses con distintos formatos: plano', ()=> {
        expect(addNmeses('16102020', 12)).toBe('16102021');
    });
    it ('sumar meses con distintos formatos: inverso', ()=> {
        expect(addNmeses('2020/10/16', 15)).toBe('2022/01/16');
    });
    it ('sumar meses con distintos formatos: inverso plano', ()=> {
        expect(addNmeses('20201016', 15)).toBe('20220116');
    });

    it ('sumar meses negativos', ()=> {
        expect(addNmeses('16/09/2020', -1)).toBe('16/08/2020');
        expect(addNmeses('16/01/2020', -1)).toBe('16/12/2019');
    });

    it ('formato invalido', ()=> {
        expect(addNmeses('16.09.2020', 2)).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(addNmeses('32/01/2020', 1)).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(addNmeses('31/04/2020', 1)).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(addNmeses('31/13/2020', 1)).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(addNmeses('29/02/2021', 1)).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
    });
});


describe('preba obtener la Proxima Fecha', ()=> {

    it('formato invalido', ()=> {
        expect(addDias('12.02.2029',3)).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(addDias('32-02-2029',3)).toBe(CodigoFormatoFecha.ERR_DIA_INVALIDO);
        expect(addDias('31/04/2029',3)).toBe(CodigoFormatoFecha.ERR_DIA_INVALIDO);
        expect(addDias('29/02/2021',3)).toBe(CodigoFormatoFecha.ERR_DIA_INVALIDO);
    });

    it ('prueba sumar n dias', ()=> {
        expect(addDias('22/03/2021',3)).toBe('25/03/2021');

    });
    
    it ('prueba sumar n dias e incrementa mes', ()=> {
        expect(addDias('31/03/2021',3)).toBe('03/04/2021');
        expect(addDias('2021/03/31',3)).toBe('2021/04/03');
        expect(addDias('20210331',3)).toBe('20210403');

    });

    it ('prueba sumar n dias e incrementa mes de febrero a marzo', ()=> {
        expect(addDias('27/02/2021',2)).toBe('01/03/2021');
        expect(addDias('27022021',2)).toBe('01032021');
        expect(addDias('20210227',2)).toBe('20210301');
        expect(addDias('2021/02/27',2)).toBe('2021/03/01');

    });
    
    it ('prueba sumar n dias e incrementa mes de febrero a marzo en año bisiesto', ()=> {
        expect(addDias('27/02/2021',2)).toBe('01/03/2021');
        expect(addDias('27/02/2021',3)).toBe('02/03/2021');
        expect(addDias('27-02-2021',3)).toBe('02-03-2021');
        expect(addDias('20210227',3)).toBe('20210302');
    });

    it ('prueba sumar n dias e incrementa mes y año', ()=> {
        expect(addDias('22/12/2022', 10)).toBe('01/01/2023');
        expect(addDias('22-12-2022', 10)).toBe('01-01-2023');
        expect(addDias('20221222', 10)).toBe('20230101');
        expect(addDias('2022/12/22', 10)).toBe('2023/01/01');
    });
 
});


describe('addDiasHabiles', ()=> {

    it ('fechas no validas', () => {
        expect(addDiasHabiles('213/01/2020', 1)).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(addDiasHabiles('21.01.2020', 1)).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(addDiasHabiles('21/01-2020', 1)).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
    });

    it ('prueba siguiente dia habil', () => {
        expect(addDiasHabiles('21/01/2020', 1)).toBe('22/01/2020');
    });
    it ('prueba siguiente dia habil: caso de borde 1', () => {
        expect(addDiasHabiles('24/01/2020', 1)).toBe('27/01/2020');
    });

    it ('prueba siguiente dia habil: caso de borde 2', () => {
        expect(addDiasHabiles('17/09/2020', 2)).toBe('22/09/2020');
    });

    it ('prueba siguiente dia habil: caso de borde 3', () => {
        expect(addDiasHabiles('15/09/2020', 3)).toBe('21/09/2020');
    });

    it ('prueba siguiente dia habil: caso de borde 4', () => {
        expect(addDiasHabiles('22/01/2020', 2)).toBe('24/01/2020');
    });

    it ('prueba siguiente dia habil: caso de borde 4', () => {
        expect(addDiasHabiles('22/01/2020', 2)).toBe('24/01/2020');
    });

    it ('prueba siguiente dia habil: caso de borde 1, distintos formatos', () => {
        expect(addDiasHabiles('24-01-2020', 1)).toBe('27-01-2020');
        expect(addDiasHabiles('24012020', 1)).toBe('27012020');
        expect(addDiasHabiles('20200124', 1)).toBe('20200127');
        expect(addDiasHabiles('2020/01/24', 1)).toBe('2020/01/27');
    });

    it ('prueba siguiente dia habil: caso de borde 5', () => {
        expect(addDiasHabiles('15/09/2020', 2)).toBe('17/09/2020');
    });


    it ('prueba siguiente dia habil: caso de borde 6', () => {
        expect(addDiasHabiles('20/05/2020', 1)).toBe('22/05/2020');
    });


    it ('prueba siguiente dia habil: caso de borde 7', () => {
        expect(addDiasHabiles('27/02/2020', 2)).toBe('02/03/2020');
    });

    it ('prueba siguiente dia habil: caso de borde 8', () => {
        expect(addDiasHabiles('27/02/2025', 2)).toBe('03/03/2025');
    });

});


describe('getDiaHabilSiguiente', () => {

    it('valida fecha', () => {
        expect(getDiaHabilSiguiente('21-01/2020')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(getDiaHabilSiguiente('21.01.2020')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);

    });

    it('camino feliz', () => {
        expect(getDiaHabilSiguiente('21/01/2020')).toBe('22/01/2020');
    });

    it('feriados', () => {
        expect(getDiaHabilSiguiente('17/09/2020')).toBe('21/09/2020');
        expect(getDiaHabilSiguiente('17-09-2020')).toBe('21-09-2020');
        expect(getDiaHabilSiguiente('2020/09/17')).toBe('2020/09/21');
    });

    it('bisiestos', () => {
        expect(getDiaHabilSiguiente('28/02/2012')).toBe('29/02/2012');
        expect(getDiaHabilSiguiente('28-02-2012')).toBe('29-02-2012');
        expect(getDiaHabilSiguiente('28022012')).toBe('29022012');
        expect(getDiaHabilSiguiente('2012/02/28')).toBe('2012/02/29');

        expect(getDiaHabilSiguiente('20120228')).toBe('20120229');

        expect(getDiaHabilSiguiente('28/02/2011')).toBe('01/03/2011');
    });

});

