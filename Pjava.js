// PARA BUSCAR UN PRODUCTO: (por terminar)
const marcas_dulces=["de la rosa","Ricolino",];

 document.getElementById("formulario").addEventListener("submit", function(e){
        e.preventDefault(); //evitar que se recargue la pagina
        //para confirmar lo que el usuario envia, addevenetlistnner: esperando a que el usuario haga algo como hacer click, enviar algo, escribir, etc;
    Buscar_Producto();
     
    });

function asignar_texto(elemento, texto){  //como parametros
    //let parrafo =document.querySelector('#texto'); COMO ID, DE ALGO,
//parrafo.innerHTML='se logro';
//ELEMENTO=ID, TEXTO= PARAMETRO, CONTENIDO QUE QUIERO QUE TENGA

//DESPUES LLAMAR A LA FUNICON, EJEMPLO: NOMBTE DE FUNCION( '#ID,H1,ETC','LO QUE QUIERO QUE MUESTRE')
let elementoHTML=document.querySelector(elemento);
elementoHTML.innerHTML=texto;
}

//asigniar a una funcion, con parametros,


function Buscar_Producto(){
    //alert("has entrado a la funcion");
  boton();
let Producto_del_usuario=document.getElementById("busqueda");

for(let i=0; i< marcas_dulces.length; i++){ //menor que, porque es como si sumara 1, es decir, para que no tome una posicion que no existe
if(Producto_del_usuario.value.toLowerCase().trim()==marcas_dulces[i].toLowerCase().trim()){ //alguno de nuestros elementos);trim para eliminar espacios
       //alert("tu producto ha sido encontrado!");
       asignar_texto('#texto',"el producto ha sido encontrado");


   
    return;
 
}
if(Producto_del_usuario.value.toLowerCase().trim()!=marcas_dulces[i].toLowerCase().trim()){
    asignar_texto('#texto',"el producto no ha sido encontrado");

    
}
   
}
}

//OFERTAS DE TEMPORADA:


document.getElementById("OFERTAS").addEventListener("click", function(e){
        e.preventDefault(); //evitar que se recargue la pagina
        //para confirmar lo que el usuario envia, addevenetlistnner: esperando a que el usuario haga algo como hacer click, enviar algo, escribir, etc;
    FECHAS();
    
    });

   


const OFERTAS={  //objeto, el que guarda las ofertas, 
    Navidad:[
        "galletero navideño, costo:$",
    ]
}; 
function FECHAS(){

    //14 feb, hallowen,
    let comparar_fecha=new Date();
    let obtener_año= comparar_fecha.getFullYear(); 
    let inicio_oferta=new Date(obtener_año, 10, 15 );//colocar la fecha dentro
let limite_Oferta=new Date(obtener_año+1,0, 9);


if(comparar_fecha>=inicio_oferta && comparar_fecha <=limite_Oferta){

    alert("has entrado a fechas!");
       asignar_texto('#texto',"Ofertas disponibles para ti hoy," + comparar_fecha);

        let aparecer_ofertas =document.getElementById("temporada_navideña");
  aparecer_ofertas.style.display = "block"; 
  


boton();
       


}
}

function boton(){

    //let crear_boton=document.getElementById("temporada_navideña");
    let select_images=document.querySelectorAll("img");
    select_images.forEach(img => {
       let Boton= document.createElement("button"); //etiqueta que quiero crear en el html
     Boton.textContent="Agregar al Carrito";
   img.insertAdjacentElement("afterend", Boton);

     
    });
  
}