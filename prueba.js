function mi_funcion(numero) 
{
    if (numero === 10) console.log("ES EL 10"); 
    else 
    {
        console.log(numero) 
        return mi_funcion(numero + 1); 
    }
}
mi_funcion(1)