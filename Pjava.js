// PARA BUSCAR UN PRODUCTO: (por terminar)
const marcas_dulces=["de la rosa","Ricolino",];

 document.getElementById("formulario").addEventListener("submit", function(e){
        e.preventDefault(); //evitar que se recargue la pagina
        //para confirmar lo que el usuario envia, addevenetlistnner: esperando a que el usuario haga algo como hacer click, enviar algo, escribir, etc;
    Buscar_Producto();
    });


function Buscar_Producto(){
    alert("has entrado a la funcion");
   
let Producto_del_usuario=document.getElementById("busqueda");

for(let i=0; i< marcas_dulces.length; i++){ //menor que, porque es como si sumara 1, es decir, para que no tome una posicion que no existe
if(Producto_del_usuario.value.toLowerCase().trim()==marcas_dulces[i].toLowerCase().trim()){ //alguno de nuestros elementos);trim para eliminar espacios
       alert("tu producto ha sido encontrado!");
    return;
 
}
if(Producto_del_usuario.value.toLowerCase().trim()!=marcas_dulces[i].toLowerCase().trim()){

    alert("tu producto no ha sido encontrado");
    
}

}
}

/* POR TERMINAR: OFERTAS DE TEMPORADA const num_productos=marcas_dulces.length;
//mostrar en pantalla el arreglo.console(num_productos)
console.log("has entrado al java");

document.getElementById("funcion").addEventListener("click", function(e){
  e.preventDefault(); // evita que el enlace recargue la página
  dulces_oferta();    // llama tu función
});

function dulces_oferta(){
   
let fecha_inicio=new Date("12/10/2025");
let fecha_fin=new Date("01/00/2026");
let fechas=new Date();


    if(fechas>= fecha_inicio && fechas <= fecha_fin){
        console.log("productos de temporada:");
    }
    const productos_temporada=["Surtido HERSHEYS","GALLETERO NAVIDEÑO"];
    //mostrar los productos, 
    /*si es octubre, mostrar productos

    /*si hay demasiada cantidad de un producto, tambien, poner un limite
    */
    

    //dulce cantidad de dulces,
    //fecha,
    //precio, 
    //mostrar dulces let mostrar=dulces.mostrar, console log(mostrar) ;
//articulos con demasiada cantidad, fechas, 
}/*