//ejerc 1
// Círculo: si el número de lados es 0.
// Triángulo: si el número de lados es 3.
// Cuadrado: si el número de lados es 4.
// Pentágono: si el número de lados es 5.
// Hexágono: si el número de lados es 6.
// Polígono: si el número de lados es mayor que 6.
// Asegúrate de incluir un mensaje de error si el número de lados es menor o igual a cero.

// 2- Mejorar el ejercicio anterior con manejo de errores:

// Modifica la función tipoFigura para que, además de determinar el tipo de figura geométrica, 
// verifique que el número de lados sea válido (mayor o igual a cero). 
// Si el número de lados es menor a cero,  debe mostrar  un mensaje de error indicando que el número de lados 
// no es correcto.

function TipodeForma(lados) {
    console.log("")
    switch (lados) {
        case lados<0:
            console.log(lados+ " No es un Número de Lados Válido")
            break;
        case 0:
            console.log("El Número de Lados es: " +lados+ " La Forma es un Círculo")
            break;
        case 1:
            console.log(lados+ " No es un Número de Lados Válido")
            break;
        case 2:
            console.log(lados+ " No es un Número de Lados Válido")
            break;
        case 3:
            console.log("El Número de Lados es: " +lados+ " La Forma es un Tríangulo")
            break;
        case 4:
            console.log("El Número de Lados es: " +lados+ " La Forma es un Cuadrado")
            break;
        case 5:
            console.log("El Número de Lados es: " +lados+ " La Forma es un Pentágono")
            break;
        case 6:
            console.log("El Número de Lados es: " +lados+ " La Forma es un Hexágono")
            break;
        default:
            console.log("El Número de Lados es: " +lados+ " La Forma es un Polígono")
            break;
    }
}

TipodeForma(6)

// 3- Mejorar el ejercicio anterior para calcular el perímetro de la figura geométrica:

// Amplía la funcionalidad del programa definiendo ademas una variable numerica que representa el largo de un lado,
//   calcule y retorne el perímetro de la misma. 
//   El perímetro de una figura geométrica se calcula sumando las longitudes de todos sus lados. Si es un círculo, 
//   el perímetro será la circunferencia, calculada como 2 * π * radio, donde π es una constante 
//   (aproximadamente 3.14159) y radio es el radio del círculo.
//  (para simplificar el ejercicio, se toma solo 1 lado asumiendo que todos los lados restantes son iguales) .

function PerimyTipoDeForma(CantLados,largo) {
    console.log("")
    
    switch (CantLados) {
        case CantLados<0:
            console.log(CantLados+ " No es un Número de Lados Válido")
            break;
        case 0:
            console.log("El Número de Lados es: " +CantLados+ " La Forma es un Círculo")
            TotalPerim =2*largo*Math.PI
            console.log("El Radio es: "+largo+" El Perímetro es: "+TotalPerim)
            break;
        case 1:
            console.log(CantLados+ " No es un Número de Lados Válido")
            break;
        case 2:
            console.log(CantLados+ " No es un Número de Lados Válido")
            break;
        case 3:
            console.log("El Número de Lados es: " +CantLados+ " La Forma es un Tríangulo")
            TotalPerim =largo*CantLados
            console.log("El Largo de un Lado es: "+largo+" El Perímetro es: "+TotalPerim)
            break;
        case 4:
            console.log("El Número de Lados es: " +CantLados+ " La Forma es un Cuadrado")
            TotalPerim =largo*CantLados
            console.log("El Largo de un Lado es: "+largo+" El Perímetro es: "+TotalPerim)
            break;
        case 5:
            console.log("El Número de Lados es: " +CantLados+ " La Forma es un Pentágono")
            TotalPerim =largo*CantLados
            console.log("El Largo de un Lado es: "+largo+" El Perímetro es: "+TotalPerim)
            break;
        case 6:
            console.log("El Número de Lados es: " +CantLados+ " La Forma es un Hexágono")
            TotalPerim =largo*CantLados
            console.log("El Largo de un Lado es: "+largo+" El Perímetro es: "+TotalPerim)
            break;
        default:
            console.log("El Número de Lados es: " +CantLados+ " La Forma es un Polígono")
            TotalPerim =largo*CantLados
            console.log("El Largo de un Lado es: "+largo+" El Perímetro es: "+TotalPerim)
            break;
    }
    
}

PerimyTipoDeForma(9,15)
