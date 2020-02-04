## Una simple (muy simple) librería para el manejo de fechas

Test unitarios, covertura 100%:

![informe](snapshot.jest.png?raw=true "")

Para instalar:
```sh
npm i fechas
```

## Uso

#### getFormatoFecha
```js
getFormatoFecha (fecha: string): CodigoFormatoFecha;
```

Obtiene el formato de una fecha dada según los formatos definidos.

Los formatos validos estan definidos en el enum ``CodigoFormatoFecha`` y pueden ser estos:

```js

/** dd/mm/yyyy */
FMT_ESPANOL = 'ESPANOL',

/** dd-mm-yyyy */
FMT_ITALIANO = 'ITALIANO',

/** ddmmyyyy */
FMT_PLANO = 'PLANO', 

/** yyyy/mm/dd */
FMT_INVERSO = 'INVERSO',

/** yyyymmdd */
FMT_INVERSOPLANO = 'INVERSOPLANO'
```

Ejemplo:
```js
import { getFormatoFecha } from "fechas";

getFormatoFecha('03-02-2020'); // ITALIANO

getFormatoFecha('2020/03/21'); // INVERSO

getFormatoFecha('2020.03.21'); // Error: Formato de fecha invalida

```



#### validarFecha
```js
validarFecha (fecha: string): CodigoFormatoFecha;
```
Valida la consistencia de una fecha dada

Ejemplo:

```js
import { validarFecha } from "fechas";

validarFecha('36/05/2021'); // Error: Formato de dia invalido
validarFecha('29/02/2021'); // Error: Formato de dia invalido  (año no bisiesto)
validarFecha('29/13/2021'); // Error: Formato de mes invalido
validarFecha('16/06/9021'); // Error: Formato de año invalido
validarFecha('30/08/2021'); // Correcto

```


#### setFormatoFecha
```js
setFormatoFecha( fecha: string, tipoFormato: CodigoFormatoFecha ) : string;
```

Asigna alguno de los formatos validos a una fecha dada. 

Ejemplo:

```js
import { setFormatoFecha } from "fechas";

setFormatoFecha('02/02/2020', CodigoFormatoFecha.FMT_INVERSO); // '2020/02/02'
```


#### getUltimoDiaMes
```js
getUltimoDiaMes( fecha: string ): string;
```
Devuelve el final de mes para cada mes dado en alguno de los formatos validos. Considera años bisiestos.


```js
import { getUltimoDiaMes } from "fechas";

getUltimoDiaMes('03/02/2020');  // 29/02/2020

getUltimoDiaMes('16/03/2020');  // 31/03/2020

```

#### isBisiesto
```js
isBisiesto(anio:number): boolean;
```
Indica si el año dado es bisiesto o no.

```js
import { isBisiesto } from "fechas";

isBisiesto(2020);  //true 

isBisiesto(2021);  //false 

```

#### getDiaHabilSiguiente
```js
getDiaHabilSiguiente(fecha: string, listaFeriados: FormatoFeriados[]); string
```
Obtiene la próxima fecha hábil dados una fecha y el listado de feriados de su país

Ejemplo: 

```js
import { getDiaHabilSiguiente } from "fechas";

export interface FormatoFeriados {
    dia: string;
    mes: string;
    anio?: string
}

const feriados: FormatoFeriados[] = [
    {dia : '01', mes : '01'},
    {dia : '01', mes : '05'},
    {dia : '21', mes : '05'},
    {dia : '10', mes : '04', anio : '2020'}
]

getDiaHabilSiguiente('28/02/2020',feriados); // '02/03/2020'

```
El uso de la interfaz es opcional pero si esta empleando typescript se recomienda usar tipado de datos. 



#### addDias
```js
addDias (fecha: string, nDias: number): string;
```
Obtiene una nueva fecha al sumar o restar días.

Ejemplo:
```js
import { addDias } from "fechas";

addDias('01/02/2020', 1);   // '02/02/2020'

addDias('01/02/2020', 30);  // '02/03/2020'
```


#### addDiasHabiles
```js
addDiasHabiles( fecha: string, cantidadDiazHabiles: number, listaFeriados: FormatoFeriados[] ): string;
```
Dados una fecha válida y un listado de feriados obtiene una nueva fecha hábil, al sumar o restar días hábiles.

Ejemplo:

```js
import { addDiasHabiles } from "fechas";

export interface FormatoFeriados {
    dia: string;
    mes: string;
    anio?: string
}

const feriados: FormatoFeriados[] = [
    {dia : '01', mes : '01'},
    {dia : '25', mes : '12'},
    {dia : '25', mes : '12', anio : '2019'}
    {dia : '10', mes : '04', anio : '2020'}
]

addDiasHabiles('24/12/2019', 5, feriados);   // '02/01/2020'

```

#### addMeses
```js
addMeses(fecha: string, nMeses: number): string;
```

Suma N meses a una fecha sin importar el formato que este tenga, devolviendo una nueva fecha con el resultado de la suma y en el formato que ha sido enviada.

Ejemplo:

```js
import { addMeses } from "fechas";

addMeses('01/01/2020', 6); // '01/07/2020'

addMeses('01/10/2020', 3); // '01/01/2021'

```


#### restarFechas
```js
restarFechas ( fecha1: string, fecha2: string ): number;
```
Obtiene la diferencia en días de dos fechas validas con el mismo formato


Ejemplo:

```js
import { restarFechas } from "fechas";

restarFechas('2019/09/14','2019/09/12'); // 2

restarFechas('14/09/2019','10/09/2019'); // 4

```

#### isHabil
```js
isHabil ( fecha: string, listaFeriados: FormatoFeriados[] ): boolean;
```
Valida que una fecha sea hábil o no dados la fecha y el listado de feriados (de un país) . Valida feriados considerando dd-mm  /  dd-mm-yyyy y fines de semana.


Ejemplo:

```js
export interface FormatoFeriados {
    dia: string;
    mes: string;
    anio?: string
}

const feriados: FormatoFeriados[] = [
    {dia : '01', mes : '01'},
    {dia : '25', mes : '12'},
    {dia : '10', mes : '04', anio : '2020'}
]

isHabil('20/03/2020', feriados);   // true

isHabil('10/04/2020', feriados);   // false

```


FIN.