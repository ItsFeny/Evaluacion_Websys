
//Funcion Que Me Permite Imprimir y Condicionar 
function Imprimir()

{

    var Palabra1 = ' Fizz';        //Multiplo de 3
    var Palabra2 = ' Buzz';       //Multiplo de 5
    var Palabra3 = ' Fizz Buzz'; //Multiplo de 3 y 5
    var Resultado = '';

    //Bucle para condicionar que si mi iterador es igual a 1 y menor a 100 que se incremente
    for (let i = 1; i <= 100; i++)
    {
        //Condicion: Es multiplo de 3 ??
        if (i % 3 === 0 )
        {
            Resultado = i + Palabra1;
            console.log(Resultado);
        }
        
        //Condicion: Es multiplo de 5 ??
        if (i % 5 === 0 )
        {
            Resultado = i + Palabra2;
            console.log(Resultado);
        }

        //Condicion: Es multiplo de 3 y 5 ??
        if(i % 3 == 0 && i % 5 == 0)
        {
            Resultado = i + Palabra3;
            console.log(Resultado);
        }

        //Sino Imprima los que no son multiplo ni de 3 ni 5
        else if(i % 3 != 0 && i % 5 != 0)
        {
            console.log(i);
        }
    }  
}

console.log(Imprimir());