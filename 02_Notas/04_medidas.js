/*
UNIDADES>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Cada vez que usamos medidas diferentes a pixeles (rem, vh, wh), estás aún así se convertirán en pixeles.
- Cuando el resultado de un porcentaje es posee coma flotante, este es redondeado al valor mas cercano 184.5px => 185px
- Todas las propiedades CSS, tienen un valor inicial, que se utiliza en caso de no tenerce ningún valor. 
- El tamaño fuente predeterminado para el font size es de 16 px. 


PORCENTAJES>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
- Su funcionamiento es diferentes para dimensiones de letras y de elemtos y estos se basán en sus elementos padres.

--Fuentes:
--- font-size:150%, significa que la fuente será 150% mas grande que la fuente de su elemento padre o predeterminada (predeterminada o padre * porcentaje) (16*150% = 24px); 

--Elementos (medidas):
--- paddin:10%, medirá el 10% de nuestro elemento padre, por ejemplo si el elemento mide 1000px el 10% corresponderá a 100px; 


EM>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
- Su funcionamiento es diferentes para dimensiones de letras y de elemtos y estos se basán en sus elementos padres.


--fuentes
--- Usa el tamaño del elementno padre como referencia, multiplicando este por las medidas en em (elemento padre * medidas en em )  (16px * 1.5em = 24)

--Elementos
--- Usa el tamño del elemento actual como referencia (elemento actual * medidas en em ) (16px * 2 em =  32px)

REM>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Es el tamaño de fuente relatvo al font-size raiz y se calcula mediante el valor predeterminado por los rem (16px*1.5rem)

--Fuentes
--- Usa el tamaño de la fuente predeterminada como referencia. (fuente * medidas en em )  (16px * 1.5em = 24)


VH y WH>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
- 1vh es igual al 1% de la altura.
- 1wh es igual al 1% del ancho.


NOTAS 
- Cada propiedad CSS tiene un valor inicial.
- Losnavegadores especifican el tamaño de fuente redeterminado para cada pagina y generalmente son 16px. 
- Los porcentajes y los valores relativos siempre se convierten en pixeles para que el motor CSS pueda representar esto en pantalla.
- Los porcentajes se miden en relación a sus padres
- los em se miden con relación con el tamaño de la fuente de sus padres, 
- los rems se miden en relación al tamaño de la raiz del documento 
*/
