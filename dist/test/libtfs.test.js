"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../src/constants");
const src_1 = require("../src");
describe('determina el formato de las fechas', () => {
    it('valida getFormatoFecha formato espanol', () => {
        expect(src_1.getFormatoFecha('11/06/2015')).toBe(constants_1.CodigoFormatoFecha.FMT_ESPANOL);
    });
    it('valida getFormatoFecha formato para calcular dia weekend', () => {
        expect(src_1.getFormatoFecha('2015/06/11')).toBe(constants_1.CodigoFormatoFecha.FMT_INVERSO);
    });
    it('valida getFormatoFecha formato italiano', () => {
        expect(src_1.getFormatoFecha('11-06-2015')).toBe(constants_1.CodigoFormatoFecha.FMT_ITALIANO);
    });
    it('valida getFormatoFecha formato plano', () => {
        expect(src_1.getFormatoFecha('11062015')).toBe(constants_1.CodigoFormatoFecha.FMT_PLANO);
    });
    it('valida getFormatoFecha formato inverso', () => {
        expect(src_1.getFormatoFecha('20150611')).toBe(constants_1.CodigoFormatoFecha.FMT_INVERSOPLANO);
    });
    it('valida formatos invalidos, ej: que dias y meses no tengan más de 2 caracteres y sean valores númericos, etc', () => {
        expect(src_1.getFormatoFecha('158/12/2019')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getFormatoFecha('15/122/2019')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getFormatoFecha('15/12/20199')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getFormatoFecha('=0/122/2019')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getFormatoFecha('12/$8/2019')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getFormatoFecha('11/12/20.19')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getFormatoFecha('11/1-2/2019')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getFormatoFecha('11/1i2/2019')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getFormatoFecha('11/12/20o19')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getFormatoFecha('1i1/12/2019')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getFormatoFecha('1/1/12/2019')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getFormatoFecha('11/12/20/19')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getFormatoFecha('11/10/2019')).toBe(constants_1.CodigoFormatoFecha.FMT_ESPANOL);
        expect(src_1.getFormatoFecha('158-12-2019')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getFormatoFecha('15-122-2019')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getFormatoFecha('15-12-20199')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getFormatoFecha('=0-122-2019')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getFormatoFecha('12-$8-2019')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getFormatoFecha('11-12-20.19')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getFormatoFecha('11-1-2-2019')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getFormatoFecha('11-1i2-2019')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getFormatoFecha('11-12-20o19')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getFormatoFecha('1i1-12-2019')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getFormatoFecha('1/1-12-2019')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getFormatoFecha('11-12-20-19')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getFormatoFecha('11-10-2019')).toBe(constants_1.CodigoFormatoFecha.FMT_ITALIANO);
    });
    it('valida que fechas con apariencia de inverso y plano pero incorrectos sean erroneos', () => {
        expect(src_1.getFormatoFecha('150.12020')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getFormatoFecha('150120203')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getFormatoFecha('202400321')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getFormatoFecha('2020-0321')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
    });
});
describe('prueba convertir formato PLANO a otros formatos', () => {
    it('setFormatoFecha 15012020 a CALCNOHABIL', () => {
        expect(src_1.setFormatoFecha('15012020', constants_1.CodigoFormatoFecha.FMT_INVERSO)).toBe('2020/01/15');
    });
    it('setFormatoFecha 15012020 a ESPANOL', () => {
        expect(src_1.setFormatoFecha('15012020', constants_1.CodigoFormatoFecha.FMT_ESPANOL)).toBe('15/01/2020');
    });
    it('setFormatoFecha 15012020 a INVERSO', () => {
        expect(src_1.setFormatoFecha('15012020', constants_1.CodigoFormatoFecha.FMT_INVERSOPLANO)).toBe('20200115');
    });
    it('setFormatoFecha 15012020 a ITALIANO', () => {
        expect(src_1.setFormatoFecha('15012020', constants_1.CodigoFormatoFecha.FMT_ITALIANO)).toBe('15-01-2020');
    });
    it('setFormatoFecha 15012020 a PLANO', () => {
        expect(src_1.setFormatoFecha('15012020', constants_1.CodigoFormatoFecha.FMT_PLANO)).toBe('15012020');
    });
});
describe('prueba convertir formato ESPANOL a otros formatos', () => {
    it('setFormatoFecha 15/01/2020 a CALCNOHABIL', () => {
        expect(src_1.setFormatoFecha('15/01/2020', constants_1.CodigoFormatoFecha.FMT_INVERSO)).toBe('2020/01/15');
    });
    it('setFormatoFecha 15/01/2020 a PLANO', () => {
        expect(src_1.setFormatoFecha('15/01/2020', constants_1.CodigoFormatoFecha.FMT_PLANO)).toBe('15012020');
    });
    it('setFormatoFecha 15/01/2020 a ESPANOL', () => {
        expect(src_1.setFormatoFecha('15/01/2020', constants_1.CodigoFormatoFecha.FMT_ESPANOL)).toBe('15/01/2020');
    });
    it('setFormatoFecha 15/01/2020 a ITALIANO', () => {
        expect(src_1.setFormatoFecha('15/01/2020', constants_1.CodigoFormatoFecha.FMT_ITALIANO)).toBe('15-01-2020');
    });
    it('setFormatoFecha 15/01/2020 a INVERSO', () => {
        expect(src_1.setFormatoFecha('15/01/2020', constants_1.CodigoFormatoFecha.FMT_INVERSOPLANO)).toBe('20200115');
    });
});
describe('prueba convertir formato ITALIANO a otros formatos', () => {
    it('setFormatoFecha 15-01-2020 a ITALIANO', () => {
        expect(src_1.setFormatoFecha('15-01-2020', constants_1.CodigoFormatoFecha.FMT_ITALIANO)).toBe('15-01-2020');
    });
    it('setFormatoFecha 15-01-2020 a ESPANOL', () => {
        expect(src_1.setFormatoFecha('15-01-2020', constants_1.CodigoFormatoFecha.FMT_ESPANOL)).toBe('15/01/2020');
    });
    it('setFormatoFecha 15-01-2020 a PLANO', () => {
        expect(src_1.setFormatoFecha('15-01-2020', constants_1.CodigoFormatoFecha.FMT_PLANO)).toBe('15012020');
    });
    it('setFormatoFecha 15-01-2020 a INVERSO PLANO', () => {
        expect(src_1.setFormatoFecha('15-01-2020', constants_1.CodigoFormatoFecha.FMT_INVERSOPLANO)).toBe('20200115');
    });
    it('setFormatoFecha 15-01-2020 a INVERSO', () => {
        expect(src_1.setFormatoFecha('15-01-2020', constants_1.CodigoFormatoFecha.FMT_INVERSO)).toBe('2020/01/15');
    });
});
describe('prueba convertir formato INVERSOPLANO a otros formatos', () => {
    it('setFormatoFecha 20200115 a INVERSOPLANO', () => {
        expect(src_1.setFormatoFecha('20200115', constants_1.CodigoFormatoFecha.FMT_INVERSOPLANO)).toBe('20200115');
    });
    it('setFormatoFecha 20200115 a ITALIANO', () => {
        expect(src_1.setFormatoFecha('20200115', constants_1.CodigoFormatoFecha.FMT_ITALIANO)).toBe('15-01-2020');
    });
    it('setFormatoFecha 20200115 a PLANO', () => {
        expect(src_1.setFormatoFecha('20200115', constants_1.CodigoFormatoFecha.FMT_PLANO)).toBe('15012020');
    });
    it('setFormatoFecha 20200115 a ESPANOL', () => {
        expect(src_1.setFormatoFecha('20200115', constants_1.CodigoFormatoFecha.FMT_ESPANOL)).toBe('15/01/2020');
    });
    it('setFormatoFecha 20200115 a INVERSO', () => {
        expect(src_1.setFormatoFecha('20200115', constants_1.CodigoFormatoFecha.FMT_INVERSO)).toBe('2020/01/15');
    });
});
describe('prueba convertir formato INVERSO a otros formatos', () => {
    it('setFormatoFecha 2020/01/15 a INVERSOPLANO', () => {
        expect(src_1.setFormatoFecha('2020/01/15', constants_1.CodigoFormatoFecha.FMT_INVERSOPLANO)).toBe('20200115');
    });
    it('setFormatoFecha 2020/01/15 a ITALIANO', () => {
        expect(src_1.setFormatoFecha('2020/01/15', constants_1.CodigoFormatoFecha.FMT_ITALIANO)).toBe('15-01-2020');
    });
    it('setFormatoFecha 2020/01/15 a PLANO', () => {
        expect(src_1.setFormatoFecha('2020/01/15', constants_1.CodigoFormatoFecha.FMT_PLANO)).toBe('15012020');
    });
    it('setFormatoFecha 2020/01/15 a ESPANOL', () => {
        expect(src_1.setFormatoFecha('2020/01/15', constants_1.CodigoFormatoFecha.FMT_ESPANOL)).toBe('15/01/2020');
    });
    it('setFormatoFecha 2020/01/15 a INVERSO', () => {
        expect(src_1.setFormatoFecha('2020/01/15', constants_1.CodigoFormatoFecha.FMT_INVERSO)).toBe('2020/01/15');
    });
    it('else path not taken', () => {
        expect(src_1.setFormatoFecha('15-01-2020', constants_1.CodigoFormatoFecha.FTM_CORRECTO)).toBe('15-01-2020');
        expect(src_1.setFormatoFecha('15012020', constants_1.CodigoFormatoFecha.FTM_CORRECTO)).toBe('15012020');
        expect(src_1.setFormatoFecha('2020/01/15', constants_1.CodigoFormatoFecha.FTM_CORRECTO)).toBe('2020/01/15');
        expect(src_1.setFormatoFecha('20200115', constants_1.CodigoFormatoFecha.FTM_CORRECTO)).toBe('20200115');
    });
});
describe('valida consistencia al formatear fecha', () => {
    it('valida formato de fecha invalido', () => {
        expect(src_1.setFormatoFecha('34012020', constants_1.CodigoFormatoFecha.FMT_PLANO)).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.setFormatoFecha('15.01.2020', constants_1.CodigoFormatoFecha.FMT_PLANO)).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.setFormatoFecha('1313020', constants_1.CodigoFormatoFecha.FMT_PLANO)).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.setFormatoFecha('15|01|2020', constants_1.CodigoFormatoFecha.FMT_PLANO)).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
    });
});
describe('validacion años bisiestos', () => {
    it('prueba años bisiestos anterior y posterior a 2020', () => {
        expect(src_1.isBisiesto(2004)).toBe(true);
        expect(src_1.isBisiesto(2012)).toBe(true);
        expect(src_1.isBisiesto(2020)).toBe(true);
        expect(src_1.isBisiesto(2028)).toBe(true);
        expect(src_1.isBisiesto(2036)).toBe(true);
    });
    it('prueba que los años efectivamente no sean bisiestos', () => {
        expect(src_1.isBisiesto(2007)).toBe(false);
        expect(src_1.isBisiesto(2010)).toBe(false);
        expect(src_1.isBisiesto(2015)).toBe(false);
        expect(src_1.isBisiesto(2026)).toBe(false);
        expect(src_1.isBisiesto(2030)).toBe(false);
    });
});
describe('valida que fechas sean habiles', () => {
    it('valida consistencia de fecha', () => {
        // expect(isHabil('29-02-2021')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        // expect(isHabil('29/02/2021')).toBe(CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.isHabil('18.01.2020')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.isHabil('13-01/2020')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.isHabil('31/04/2021')).toBe(constants_1.CodigoFormatoFecha.ERR_DIA_INVALIDO);
        expect(src_1.isHabil('20200431')).toBe(constants_1.CodigoFormatoFecha.ERR_DIA_INVALIDO);
        expect(src_1.isHabil('2020/04/31')).toBe(constants_1.CodigoFormatoFecha.ERR_DIA_INVALIDO);
        expect(src_1.isHabil('2021/02/29')).toBe(constants_1.CodigoFormatoFecha.ERR_DIA_INVALIDO);
        expect(src_1.isHabil('2020/02/29')).toBe(false);
    });
    it('valida el dato correcto cuando es fin de semana o no lo sea', () => {
        expect(src_1.isHabil('18/01/2020')).toBe(false);
        expect(src_1.isHabil('13/01/2020')).toBe(true);
    });
    it('valida dia festivo', () => {
        expect(src_1.isHabil('01/01/2020')).toBe(false);
    });
    it('valida que 15/01/2020 sea festivo', () => {
        expect(src_1.isHabil('15/01/2020')).toBe(false);
    });
    it('valida que 29/02/2020 sea no-habil', () => {
        expect(src_1.isHabil('29/02/2020')).toBe(false);
    });
});
describe('valida feriados variables', () => {
    it('valida feriado semana santa 2020', () => {
        expect(src_1.isHabil('10/04/2020')).toBe(false);
        expect(src_1.isHabil('11/04/2020')).toBe(false);
    });
});
describe('valida que fechas sean correctas', () => {
    it('valida que el el año ingresado sea el correcto: ni < a 1901 ni > a 2150', () => {
        expect(src_1.validarFecha('01/01/1900')).toBe(constants_1.CodigoFormatoFecha.ERR_ANIO_INVALIDO);
        expect(src_1.validarFecha('01/01/2200')).toBe(constants_1.CodigoFormatoFecha.ERR_ANIO_INVALIDO);
        expect(src_1.validarFecha('01/01/1902')).toBe(constants_1.CodigoFormatoFecha.FTM_CORRECTO);
    });
    it('valida que el mes ingresado sea el correcto: ni < 1 ni > 12', () => {
        expect(src_1.validarFecha('15/12/2018')).toBe(constants_1.CodigoFormatoFecha.FTM_CORRECTO);
        expect(src_1.validarFecha('15/00/2018')).toBe(constants_1.CodigoFormatoFecha.ERR_MES_INVALIDO);
        expect(src_1.validarFecha('15/13/2018')).toBe(constants_1.CodigoFormatoFecha.ERR_MES_INVALIDO);
        expect(src_1.validarFecha('15/1/2018')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.validarFecha('15/-1/2018')).toBe(constants_1.CodigoFormatoFecha.ERR_MES_INVALIDO);
        expect(src_1.validarFecha('15/120/2018')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
    });
    it('valida que el mes ingresado sea el correcto: ni < 1 ni > 12', () => {
        expect(src_1.validarFecha('15/120/2018')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        console.log(src_1.getFormatoFecha('15/120/2018'));
    });
    it('valida que el dia ingresado sea el correcto: ni < 1 ni > 31', () => {
        expect(src_1.validarFecha('-2/12/2018')).toBe(constants_1.CodigoFormatoFecha.ERR_DIA_INVALIDO);
        expect(src_1.validarFecha('152/02/2018')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
    });
    it('valida año bisiesto formato español', () => {
        expect(src_1.validarFecha('29/02/2015')).toBe(constants_1.CodigoFormatoFecha.ERR_DIA_INVALIDO);
    });
    it('valida año bisiesto formato italiano', () => {
        expect(src_1.isHabil('29-02-2021')).toBe(constants_1.CodigoFormatoFecha.ERR_DIA_INVALIDO);
    });
    it('valida fecha 28/02/2015 sea correcto', () => {
        expect(src_1.validarFecha('28/02/2015')).toBe(constants_1.CodigoFormatoFecha.FTM_CORRECTO);
    });
    it('valida fecha 29/02/2020 sea correcto (bisiesto)', () => {
        expect(src_1.validarFecha('29/02/2020')).toBe(constants_1.CodigoFormatoFecha.FTM_CORRECTO);
    });
    it('valida fecha 29/02/2024 sea correcto (bisiesto)', () => {
        expect(src_1.validarFecha('29/02/2024')).toBe(constants_1.CodigoFormatoFecha.FTM_CORRECTO);
    });
    it('valida dia de febrero mayor al maximo permitido: 29', () => {
        expect(src_1.validarFecha('30/02/2020')).toBe(constants_1.CodigoFormatoFecha.ERR_DIA_INVALIDO);
    });
    it('valida que dia de finde mes se corresponda con el mes', () => {
        expect(src_1.validarFecha('30/02/2020')).toBe(constants_1.CodigoFormatoFecha.ERR_DIA_INVALIDO);
        expect(src_1.validarFecha('31/04/2021')).toBe(constants_1.CodigoFormatoFecha.ERR_DIA_INVALIDO);
        expect(src_1.validarFecha('31/06/2020')).toBe(constants_1.CodigoFormatoFecha.ERR_DIA_INVALIDO);
        expect(src_1.validarFecha('30/11/2020')).toBe(constants_1.CodigoFormatoFecha.FTM_CORRECTO);
        expect(src_1.validarFecha('31/01/2020')).toBe(constants_1.CodigoFormatoFecha.FTM_CORRECTO);
        expect(src_1.validarFecha('31/03/2020')).toBe(constants_1.CodigoFormatoFecha.FTM_CORRECTO);
        expect(src_1.validarFecha('31/05/2020')).toBe(constants_1.CodigoFormatoFecha.FTM_CORRECTO);
        expect(src_1.validarFecha('31/07/2020')).toBe(constants_1.CodigoFormatoFecha.FTM_CORRECTO);
        expect(src_1.validarFecha('31/08/2020')).toBe(constants_1.CodigoFormatoFecha.FTM_CORRECTO);
        expect(src_1.validarFecha('31/10/2020')).toBe(constants_1.CodigoFormatoFecha.FTM_CORRECTO);
        expect(src_1.validarFecha('31/12/2020')).toBe(constants_1.CodigoFormatoFecha.FTM_CORRECTO);
    });
});
describe('prueba restando dos fechas', () => {
    it('se valida que la resta devuelva el valor correcto, formato español', () => {
        expect(src_1.restarFechas('2019/09/14', '2019/09/12')).toBe(2);
    });
    it('se valida que la resta de dos fechas devuelva el valor correcto para formato plano', () => {
        expect(src_1.restarFechas('13082019', '11082019')).toBe(2);
    });
    it('se valida que la resta de dos fechas devuelva el valor correcto para formato italiano', () => {
        expect(src_1.restarFechas('13-08-2019', '11-08-2019')).toBe(2);
    });
    it('se valida que la resta de dos fechas devuelva el valor correcto para formato inverso', () => {
        expect(src_1.restarFechas('2020/01/20', '2020/01/18')).toBe(2);
    });
    it('se valida que la resta de dos fechas devuelva el valor correcto para formato inverso plano', () => {
        expect(src_1.restarFechas('20200120', '20200118')).toBe(2);
    });
    it('se valida que el formato de fechas sea el correcto: dia invalido fecha 1', () => {
        expect(src_1.restarFechas('132/08/2019', '11/08/2019')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.restarFechas('34/08/2019', '11/08/2019')).toBe(constants_1.CodigoFormatoFecha.ERR_DIA_INVALIDO);
    });
    it('se valida que el formato de fechas sea el correcto: dia invalido fecha 1; fmto italiano', () => {
        expect(src_1.restarFechas('132-08-2019', '11-08-2019')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.restarFechas('33-08-2019', '11-08-2019')).toBe(constants_1.CodigoFormatoFecha.ERR_DIA_INVALIDO);
    });
    it('se valida que el formato de fechas sea el correcto: dia invalido fecha 1; fmto plano', () => {
        expect(src_1.restarFechas('132082019', '11082019')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
    });
    it('se valida que el formato de fechas sea el correcto: dia invalido fecha 1; fmto inverso', () => {
        expect(src_1.restarFechas('2019/08/132', '2019/08/11')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.restarFechas('2019/08/34', '2019/08/11')).toBe(constants_1.CodigoFormatoFecha.ERR_DIA_INVALIDO);
    });
    it('se valida que el formato de fechas sea el correcto: dia invalido fecha 2', () => {
        expect(src_1.restarFechas('13/08/2019', '113/08/2019')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.restarFechas('13/08/2019', '32/08/2019')).toBe(constants_1.CodigoFormatoFecha.ERR_DIA_INVALIDO);
    });
    it('se valida que el formato de fechas sea el correcto: mes invalido fecha 1', () => {
        expect(src_1.restarFechas('13/13/2019', '11/12/2019')).toBe(constants_1.CodigoFormatoFecha.ERR_MES_INVALIDO);
        expect(src_1.restarFechas('13/122/2019', '11/12/2019')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
    });
    it('se valida que el formato de fechas sea el correcto: mes invalido fecha 1; fmto italiano', () => {
        expect(src_1.restarFechas('13-13-2019', '11-12-2019')).toBe(constants_1.CodigoFormatoFecha.ERR_MES_INVALIDO);
    });
    it('se valida que el formato de fechas sea el correcto: mes invalido fecha 1; fmto inverso', () => {
        expect(src_1.restarFechas('2019/13/13', '2019/12/11')).toBe(constants_1.CodigoFormatoFecha.ERR_MES_INVALIDO);
    });
    it('se valida que el formato de fechas sea el correcto: mes invalido fecha 2', () => {
        expect(src_1.restarFechas('13/08/2019', '11/13/2019')).toBe(constants_1.CodigoFormatoFecha.ERR_MES_INVALIDO);
    });
    it('se valida que el formato de fechas sea el correcto: mes invalido fecha 2, fmto italiano', () => {
        expect(src_1.restarFechas('13-08-2019', '11-13-2019')).toBe(constants_1.CodigoFormatoFecha.ERR_MES_INVALIDO);
    });
    it('se valida que el formato de fechas sea el correcto: mes invalido fecha 2, fmto inverso', () => {
        expect(src_1.restarFechas('2019/08/13', '2019/13/11')).toBe(constants_1.CodigoFormatoFecha.ERR_MES_INVALIDO);
    });
    it('se valida que la resta de dos fechas devuelva el valor correcto para formato inverso plano', () => {
        expect(src_1.restarFechas('20200120', '20200118')).toBe(2);
    });
    it('resta dos fechas con resultado negativo', () => {
        expect(src_1.restarFechas('13-08-2019', '14-08-2019')).toBe(-1);
        expect(src_1.restarFechas('13082019', '15082019')).toBe(-2);
        expect(src_1.restarFechas('2019/09/14', '2019/09/21')).toBe(-7);
        expect(src_1.restarFechas('20190914', '20190920')).toBe(-6);
    });
    it('se valida que formato de fechas sea el mismo en ambos parametros', () => {
        expect(src_1.restarFechas('20200120', '2020/01/18')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.restarFechas('2020/01/18', '16/01/2020')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.restarFechas('16/01/2020', '16012020')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
    });
});
describe('prueba disgregarFecha', () => {
    it('disgrega año, mes y dia: formato espanol', () => {
        const { dia, mes, anio } = src_1.disgregarFecha('14/09/2020');
        expect(dia).toBe('14');
        expect(mes).toBe('09');
        expect(anio).toBe('2020');
    });
    it('disgrega año, mes y dia: formato italiano', () => {
        const { dia, mes, anio } = src_1.disgregarFecha('14-09-2020');
        expect(dia).toBe('14');
        expect(mes).toBe('09');
        expect(anio).toBe('2020');
    });
    it('disgrega año, mes y dia: formato plano', () => {
        const { dia, mes, anio } = src_1.disgregarFecha('14092020');
        expect(dia).toBe('14');
        expect(mes).toBe('09');
        expect(anio).toBe('2020');
    });
    it('disgrega año, mes y dia: formato inverso', () => {
        const { dia, mes, anio } = src_1.disgregarFecha('2020/09/14');
        expect(dia).toBe('14');
        expect(mes).toBe('09');
        expect(anio).toBe('2020');
    });
    it('disgrega año, mes y dia: formato inverso plano', () => {
        const { dia, mes, anio } = src_1.disgregarFecha('20200914');
        expect(dia).toBe('14');
        expect(mes).toBe('09');
        expect(anio).toBe('2020');
    });
});
describe('function getUltimoDiaMes', () => {
    it('prueba que fecha sea valida', () => {
        expect(src_1.getUltimoDiaMes('12/01/202s1')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
    });
    it('valido que dia de fin de mes sea el que corresponda', () => {
        expect(src_1.getUltimoDiaMes('12/01/2021')).toBe('31/01/2021');
        expect(src_1.getUltimoDiaMes('12/03/2021')).toBe('31/03/2021');
        expect(src_1.getUltimoDiaMes('11/04/2021')).toBe('30/04/2021');
        expect(src_1.getUltimoDiaMes('11/05/2021')).toBe('31/05/2021');
        expect(src_1.getUltimoDiaMes('16/06/2022')).toBe('30/06/2022');
        expect(src_1.getUltimoDiaMes('16/07/2022')).toBe('31/07/2022');
        expect(src_1.getUltimoDiaMes('19/08/2022')).toBe('31/08/2022');
        expect(src_1.getUltimoDiaMes('19/09/2022')).toBe('30/09/2022');
        expect(src_1.getUltimoDiaMes('17/10/2022')).toBe('31/10/2022');
        expect(src_1.getUltimoDiaMes('13/11/2022')).toBe('30/11/2022');
        expect(src_1.getUltimoDiaMes('14/12/2022')).toBe('31/12/2022');
    });
    it('valida ultimo dia del mes, formato italiano', () => {
        expect(src_1.getUltimoDiaMes('14-12-2022')).toBe('31-12-2022');
        expect(src_1.getUltimoDiaMes('14-04-2022')).toBe('30-04-2022');
        expect(src_1.getUltimoDiaMes('14-04-2020')).toBe('30-04-2020');
    });
    it('valida ultimo dia del mes, formato plano', () => {
        expect(src_1.getUltimoDiaMes('14122022')).toBe('31122022');
        expect(src_1.getUltimoDiaMes('14042022')).toBe('30042022');
        expect(src_1.getUltimoDiaMes('14042020')).toBe('30042020');
    });
    it('valida ultimo dia del mes, formato inverso', () => {
        expect(src_1.getUltimoDiaMes('2020/12/14')).toBe('2020/12/31');
        expect(src_1.getUltimoDiaMes('2020/04/14')).toBe('2020/04/30');
        expect(src_1.getUltimoDiaMes('2021/04/14')).toBe('2021/04/30');
    });
    it('valida ultimo dia del mes, formato inverso plano', () => {
        expect(src_1.getUltimoDiaMes('20201214')).toBe('20201231');
        expect(src_1.getUltimoDiaMes('20200414')).toBe('20200430');
        expect(src_1.getUltimoDiaMes('20210414')).toBe('20210430');
    });
    it('para años bisiestos', () => {
        expect(src_1.getUltimoDiaMes('12/02/2021')).toBe('28/02/2021');
        expect(src_1.getUltimoDiaMes('10/02/2023')).toBe('28/02/2023');
        expect(src_1.getUltimoDiaMes('19/02/2025')).toBe('28/02/2025');
        expect(src_1.getUltimoDiaMes('11/02/2020')).toBe('29/02/2020');
        expect(src_1.getUltimoDiaMes('13/02/2024')).toBe('29/02/2024');
        expect(src_1.getUltimoDiaMes('18/02/2028')).toBe('29/02/2028');
        expect(src_1.getUltimoDiaMes('10/02/2032')).toBe('29/02/2032');
    });
});
describe('prueba sumar meses', () => {
    it('sumar dos meses dentro del mismo año', () => {
        expect(src_1.addNmeses('16/07/2020', 2)).toBe('16/09/2020');
        expect(src_1.addNmeses('16/09/2020', 2)).toBe('16/11/2020');
    });
    it('sumar meses en el umbral de otro año', () => {
        expect(src_1.addNmeses('16/10/2020', 3)).toBe('16/01/2021');
        expect(src_1.addNmeses('16/10/2020', 12)).toBe('16/10/2021');
        expect(src_1.addNmeses('16/10/2020', 15)).toBe('16/01/2022');
    });
    it('sumar meses con distintos formatos: italiano', () => {
        expect(src_1.addNmeses('16-10-2020', 3)).toBe('16-01-2021');
    });
    it('sumar meses con distintos formatos: plano', () => {
        expect(src_1.addNmeses('16102020', 12)).toBe('16102021');
    });
    it('sumar meses con distintos formatos: inverso', () => {
        expect(src_1.addNmeses('2020/10/16', 15)).toBe('2022/01/16');
    });
    it('sumar meses con distintos formatos: inverso plano', () => {
        expect(src_1.addNmeses('20201016', 15)).toBe('20220116');
    });
    it('sumar meses negativos', () => {
        expect(src_1.addNmeses('16/09/2020', -1)).toBe('16/08/2020');
        expect(src_1.addNmeses('16/01/2020', -1)).toBe('16/12/2019');
    });
    it('formato invalido', () => {
        expect(src_1.addNmeses('16.09.2020', 2)).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.addNmeses('32/01/2020', 1)).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.addNmeses('31/04/2020', 1)).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.addNmeses('31/13/2020', 1)).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.addNmeses('29/02/2021', 1)).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
    });
});
describe('preba obtener la Proxima Fecha', () => {
    it('formato invalido', () => {
        expect(src_1.addDias('12.02.2029', 3)).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.addDias('32-02-2029', 3)).toBe(constants_1.CodigoFormatoFecha.ERR_DIA_INVALIDO);
        expect(src_1.addDias('31/04/2029', 3)).toBe(constants_1.CodigoFormatoFecha.ERR_DIA_INVALIDO);
        expect(src_1.addDias('29/02/2021', 3)).toBe(constants_1.CodigoFormatoFecha.ERR_DIA_INVALIDO);
    });
    it('prueba sumar n dias', () => {
        expect(src_1.addDias('22/03/2021', 3)).toBe('25/03/2021');
    });
    it('prueba sumar n dias e incrementa mes', () => {
        expect(src_1.addDias('31/03/2021', 3)).toBe('03/04/2021');
        expect(src_1.addDias('2021/03/31', 3)).toBe('2021/04/03');
        expect(src_1.addDias('20210331', 3)).toBe('20210403');
    });
    it('prueba sumar n dias e incrementa mes de febrero a marzo', () => {
        expect(src_1.addDias('27/02/2021', 2)).toBe('01/03/2021');
        expect(src_1.addDias('27022021', 2)).toBe('01032021');
        expect(src_1.addDias('20210227', 2)).toBe('20210301');
        expect(src_1.addDias('2021/02/27', 2)).toBe('2021/03/01');
    });
    it('prueba sumar n dias e incrementa mes de febrero a marzo en año bisiesto', () => {
        expect(src_1.addDias('27/02/2021', 2)).toBe('01/03/2021');
        expect(src_1.addDias('27/02/2021', 3)).toBe('02/03/2021');
        expect(src_1.addDias('27-02-2021', 3)).toBe('02-03-2021');
        expect(src_1.addDias('20210227', 3)).toBe('20210302');
    });
    it('prueba sumar n dias e incrementa mes y año', () => {
        expect(src_1.addDias('22/12/2022', 10)).toBe('01/01/2023');
        expect(src_1.addDias('22-12-2022', 10)).toBe('01-01-2023');
        expect(src_1.addDias('20221222', 10)).toBe('20230101');
        expect(src_1.addDias('2022/12/22', 10)).toBe('2023/01/01');
    });
});
describe('addDiasHabiles', () => {
    it('fechas no validas', () => {
        expect(src_1.addDiasHabiles('213/01/2020', 1)).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.addDiasHabiles('21.01.2020', 1)).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.addDiasHabiles('21/01-2020', 1)).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
    });
    it('prueba siguiente dia habil', () => {
        expect(src_1.addDiasHabiles('21/01/2020', 1)).toBe('22/01/2020');
    });
    it('prueba siguiente dia habil: caso de borde 1', () => {
        expect(src_1.addDiasHabiles('24/01/2020', 1)).toBe('27/01/2020');
    });
    it('prueba siguiente dia habil: caso de borde 2', () => {
        expect(src_1.addDiasHabiles('17/09/2020', 2)).toBe('22/09/2020');
    });
    it('prueba siguiente dia habil: caso de borde 3', () => {
        expect(src_1.addDiasHabiles('15/09/2020', 3)).toBe('21/09/2020');
    });
    it('prueba siguiente dia habil: caso de borde 4', () => {
        expect(src_1.addDiasHabiles('22/01/2020', 2)).toBe('24/01/2020');
    });
    it('prueba siguiente dia habil: caso de borde 4', () => {
        expect(src_1.addDiasHabiles('22/01/2020', 2)).toBe('24/01/2020');
    });
    it('prueba siguiente dia habil: caso de borde 1, distintos formatos', () => {
        expect(src_1.addDiasHabiles('24-01-2020', 1)).toBe('27-01-2020');
        expect(src_1.addDiasHabiles('24012020', 1)).toBe('27012020');
        expect(src_1.addDiasHabiles('20200124', 1)).toBe('20200127');
        expect(src_1.addDiasHabiles('2020/01/24', 1)).toBe('2020/01/27');
    });
    it('prueba siguiente dia habil: caso de borde 5', () => {
        expect(src_1.addDiasHabiles('15/09/2020', 2)).toBe('17/09/2020');
    });
    it('prueba siguiente dia habil: caso de borde 6', () => {
        expect(src_1.addDiasHabiles('20/05/2020', 1)).toBe('22/05/2020');
    });
    it('prueba siguiente dia habil: caso de borde 7', () => {
        expect(src_1.addDiasHabiles('27/02/2020', 2)).toBe('02/03/2020');
    });
    it('prueba siguiente dia habil: caso de borde 8', () => {
        expect(src_1.addDiasHabiles('27/02/2025', 2)).toBe('03/03/2025');
    });
});
describe('getDiaHabilSiguiente', () => {
    it('valida fecha', () => {
        expect(src_1.getDiaHabilSiguiente('21-01/2020')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
        expect(src_1.getDiaHabilSiguiente('21.01.2020')).toBe(constants_1.CodigoFormatoFecha.ERR_FECHA_INVALIDA);
    });
    it('camino feliz', () => {
        expect(src_1.getDiaHabilSiguiente('21/01/2020')).toBe('22/01/2020');
    });
    it('feriados', () => {
        expect(src_1.getDiaHabilSiguiente('17/09/2020')).toBe('21/09/2020');
        expect(src_1.getDiaHabilSiguiente('17-09-2020')).toBe('21-09-2020');
        expect(src_1.getDiaHabilSiguiente('2020/09/17')).toBe('2020/09/21');
    });
    it('bisiestos', () => {
        expect(src_1.getDiaHabilSiguiente('28/02/2012')).toBe('29/02/2012');
        expect(src_1.getDiaHabilSiguiente('28-02-2012')).toBe('29-02-2012');
        expect(src_1.getDiaHabilSiguiente('28022012')).toBe('29022012');
        expect(src_1.getDiaHabilSiguiente('2012/02/28')).toBe('2012/02/29');
        expect(src_1.getDiaHabilSiguiente('20120228')).toBe('20120229');
        expect(src_1.getDiaHabilSiguiente('28/02/2011')).toBe('01/03/2011');
    });
});
//# sourceMappingURL=libtfs.test.js.map