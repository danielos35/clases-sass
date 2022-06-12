/*
ALGORITMO CSS
- Calcula las dimensiones mediante cajas (Cuadrados); 
- Calcula el tipo de caja (Box, Box Type etc); 
- Stacking contexts; 
- elementos del arbol de renderización
- Dimensiones de elementos e imagenes.


BOX MODEL
- Define com se muestran los elementos en una pagina web y como se dimensionan. 
- Cada uno de los elementos de la pagina puede verse como un rectangulo, teniendo los siguientes elementos: 
-- margin 
-- padding 
-- width 
-- heigth
-- border 
-- content 
-- Area de relleno o fill areaa (todo el cuadrado incluyendo el margin). 

HEIGt AND WIDTHS
- El padding suele agregarse al ancho y alto del elemento, si queremos evitar esto podemos usar la propiedad box-sizing: border-box

DISPLAY BLOCK
-  contenido distribuido en bloques

DISPLAY INLINE
-  Contenido distribuido en linea 

ESQUEMAS DE POSICIONAMIENTO
- Normalflow.
-- position:relative (es por defecto, y conserva el orden de presentación secuencial); 

- Floats
-- float:left, float:rigth (hace que el elemento se retire completamente del flujo normal)

- Absolute positioning 
-- position:absolute, position:fixed (El elemento es sacado del flujo normal, este elemento no tienen ningún impacto sobre los elementos del rededor)
--- En caso de querer posicionarlo debemos de usar las propiedades top, bottom, left o rigth 


STAKING CONTEXTS
- Es la ubicación por capas de los elementos mediante el z-index
- Los ultimos elementos ubicados en el html siempre se ven primero que los elementos anteriores


*/
