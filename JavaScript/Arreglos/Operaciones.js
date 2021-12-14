//arreglo de enteros no ordenados
let Numeros_No_Ordenados = [5,2,1,3,4];


//El Valor Minimo
console.log('El Valor Minimo Es:'+ Math.min.apply(null,Numeros_No_Ordenados));

//El Valor Maximo
console.log('El Valor Maximo Es:' + Math.max.apply(null,Numeros_No_Ordenados));

//Promedio (Media Aritmetica)
Numeros_No_Ordenados.sort((a, b) => a - b);

let Mediana_Menor = Math.floor((Numeros_No_Ordenados.length - 1) / 2);
let Mediana_Mayor = Math.ceil((Numeros_No_Ordenados.length - 1) / 2);
let Mediana = (Numeros_No_Ordenados[Mediana_Menor] + Numeros_No_Ordenados[Mediana_Mayor]) / 2;

console.log('La Media Aritmetica Es:' + Mediana);

//La Mediana
function obtenerMediana(numeros) 
{  
    numeros = numeros.sort((x, y) => x - y);
    let mitad = Math.floor(numeros.length / 2);

    return numeros.length % 2 == 1 ? numeros[mitad] : (numeros[mitad - 1] + numeros[mitad + 2]) / 2;
}

try 
{
    console.log('La Mediana Es:' + obtenerMediana(Numeros_No_Ordenados)); // 10
}

 catch (e) 
{
    console.log(`Error: ${e.message}`);
}


//La Moda       
//dato adicional: en mi caso no hay moda por lo que no imprime nada pero si el arreglo es alterado con valores repetidos si mostrara moda
function Moda(Numeros_No_Ordenados)
{
   const arrObj = {}

   Numeros_No_Ordenados.forEach(elem =>
   {

         if(!arrObj[elem]) arrObj[elem] = 0
         arrObj[elem]++
         
   })

   let resultado = []
   let max = 0


   for(let key in arrObj)
   {
       if(arrObj[key] > max)
       {
           resultado =[key]
           max = arrObj[key]
       }
       
       else if (arrObj[key] === max)
       {
           resultado.push(key)
       }
   }

   if(Object.keys(arrObj).length === resultado.length)
   {
       resultado = [];
   }
   return resultado
}
console.log('Moda:' + Moda(Numeros_No_Ordenados));



//El Rango
console.log('Valor Minimo:' + Math.min.apply(null,Numeros_No_Ordenados));
console.log('Valor Maximo:' + Math.max.apply(null,Numeros_No_Ordenados));
console.log('Poblacion:' + Numeros_No_Ordenados.length);




