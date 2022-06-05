/*
CSS RULE 
- Selector .mySelector
- Bloque de declaración { color: blue }
- Declaraciones color: blue
- Propiedad color
- Valor declaratorio blue


CASCADA
Proceso en el que se conbinan diferente hojasde estilos resolviendo los problemas entre las diferentes reglas css, cuando mas de una regla aplica a cierto elemento.
- Los conflictos son solucionados mirando:

--La importancia: Este depende de donde se declara
---- Usuario important!.
---- Autor important!.
---- autor.
---- Usuario.
---- Declaraciones del navegador.

--Especificidad: Numero de propiedades que apunten a ese elemento.
----Inline styles.
----IDs (los ids en este caso serán tomados como prioridad. sobre las clases)
----Clases, pseudo-classes, atributos
----Elementos, PseudoElementos 


--Orden del codigo
----En caso de que todo esté igual, se aplicará la ultima declaración

NOTAS
- SOLO USAR IMPORTANT COMO ULTIMA OPCIÓN (No sé recomienda su uso). 
- LOS ESTILOS ESCRITOS EN EL HTML TIENEN PRIORIDAD SOBRE EL CSS (tampoco es una buena practica).
- UN SELECTOR CON UN SOLO ID, PESA MAS QUE UNO CON 1000 CLASES.
- UN SELECTOR UNIVERSAL (DIV, H1,h2,etc) TIENEN MENOS PRIORIDAD POR TAL LOS ID Y LAS CLASES TENDRÁN PRIORIDAD SOBRE EL. 
- SIEMPRE CONFIAR MAS EN LA ESPECIFICIDAD QUE EN EL ORDEN DE LOS SELECTOR (Esto para no tener sorpresas en caso de necesitar ordenar el codigo). 
- EN CASO DE INCLUIR HOJAS CSS DE TERCEROS INCLUIRLAS SIEMPRE EN ULTIMO LUGAR, PARA QUE ESTAS NO SE SOBREPONGAN A LAS HOAS DEL PROYECTO





*/
