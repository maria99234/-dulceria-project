// PARA BUSCAR UN PRODUCTO: (por terminar)
boton();
const marcas_dulces=["de la rosa","Ricolino",];

 document.getElementById("formulario").addEventListener("submit", function(e){
      
        e.preventDefault(); //evitar que se recargue la pagina
        //para confirmar lo que el usuario envia, addevenetlistnner: esperando a que el usuario haga algo como hacer click, enviar algo, escribir, etc;
    Buscar_Producto();
     
    });

function asignar_texto(elemento, texto){  //como parametros

//ELEMENTO= ID, TEXTO= PARAMETRO, CONTENIDO QUE QUIERO QUE TENGA
let elementoHTML=document.querySelector(elemento); //EJEMPLO: NOMBTE DE FUNCION( '#ID,H1,ETC','LO QUE QUIERO QUE MUESTRE')
elementoHTML.innerHTML=texto;
}



function Buscar_Producto(){
   

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


document.getElementById("funcion").addEventListener("click", function(e){
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
    alert("has entrado a la funcion");


let comparar_fecha=new Date(); //fecha de hoy
let obtener_año= comparar_fecha.getFullYear();  //obtener el año de la fecha actual
let inicio_oferta=new Date(obtener_año, 10, 15 ); 
let limite_Oferta=new Date(obtener_año+1,0, 9);

asignar_texto('#texto',"Ofertas disponibles para ti hoy," + comparar_fecha);

if(comparar_fecha>=inicio_oferta && comparar_fecha <=limite_Oferta){
 

let aparecer_ofertas =document.getElementById("temporada_navideña"); //id del div que contiene los productos navideños
        aparecer_ofertas.style.display = "block";  //para que aparezcan las imagenes,

}
}

function boton(){

    let select_images=document.querySelectorAll("img"); //Seleccionar todas las imagenes,
    select_images.forEach(img => {
       let Boton= document.createElement("button"); //etiqueta que quiero crear en el html
     Boton.textContent="Agregar al Carrito"; 
     Boton.addEventListener("click", Agregar_al_Carrito);
   img.insertAdjacentElement("afterend", Boton); //lugar en el que se va a mostrar el boton

   
    });
  
}


function Agregar_al_Carrito(){

    //for(let i=0,i<p.length;i++){
         //acomulador++,
    //Monto=[acomulador]; //for
    alert("Se ha  agregado");

    }
   
    
