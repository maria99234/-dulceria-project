 
let Formulario;



//Para asignar texto.
function asignar_texto(elemento, texto){  //como parametros

//EJEMPLO: NOMBTE DE FUNCION( '#ID,H1,ETC','LO QUE QUIERO QUE MUESTRE')
let elementoHTML=document.querySelector(elemento); 
elementoHTML.innerHTML=texto;
}

let x= parseFloat (localStorage.getItem("x"))||0; //para guardar la cuenta, entre paginas, recupera el valor anterior,
let suma=0;
  // convertir el array a texto:
  let Mostrar_Productos=JSON.parse(localStorage.getItem("Mostrar_Productos")) || []; //combierte texto a un arreglo, con la variable mostraP
document.addEventListener("DOMContentLoaded", () => {
    boton();
 Formulario = document.getElementById("formulario")

if(Formulario){
Formulario.addEventListener("submit", function(e){
      
        e.preventDefault(); //evitar que se recargue la pagina
        //para confirmar lo que el usuario envia, addevenetlistnner: esperando a que el usuario haga algo como hacer click, enviar algo, escribir, etc;
   Buscar_Producto();
     
    });
}

    
});


const marcas_dulces=["delarosa","ricolino","Barkersfield", "LINDTS","M&M'S","Snickers","Ferrero Rocher", "Galletas"];

const marcas_dulces_obj={
  ricolino:[
    {
      nombre:"Panditas:",
      imagen:"https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00075752802634L.jpg"

    },
  ],
  delarosa:[
  {
    nombre: "Mazapan",
    imagen: "https://www.mexicodesconocido.com.mx/wp-content/uploads/2022/02/mazapan.jpeg"
          
  },
 ]

}



// PARA BUSCAR UN PRODUCTO:

function Buscar_Producto(){
   

let Producto_del_usuario=document.getElementById("busqueda");
let producto_especifico= Producto_del_usuario.value.toLowerCase().trim().replaceAll(" ","")

for(let i=0; i< marcas_dulces.length; i++){ //para que no tome una posicion que no existe
if(producto_especifico==marcas_dulces[i].toLowerCase().trim().replaceAll(" ","")){ 
       //trim para eliminar espacios
       //asignar_texto('#texto',"el producto ha sido encontrado");
       
       //for(producto_especifico in marcas_dulces_obj){ //accede a todas las marcas, itera, si fuera uno, si accede a cada propiedad del objeto
          for(j=0; j<marcas_dulces_obj[producto_especifico].length; j++){
asignar_texto("#texto", `<p>${marcas_dulces_obj[producto_especifico][j].nombre}</p>, <img  class="imagen_Busqueda" src="${marcas_dulces_obj[producto_especifico][j].imagen}" alt="${marcas_dulces_obj[producto_especifico][j].nombre}">`) ;

        }
        
       
       return;
   
  //k,ey, nombre de la propiedad del objeto: Ricolino.... diferentes posiciones
 
}
   
 
}
if(Producto_del_usuario.value.toLowerCase().trim()!=marcas_dulces[i].toLowerCase().trim()){
    asignar_texto('#texto',"el producto no ha sido encontrado");

    
} 
}

//OFERTAS DE TEMPORADA:

function FECHAS(){

let comparar_fecha=new Date(); //fecha de hoy
let obtener_año= comparar_fecha.getFullYear();  //obtener el año de la fecha actual
let inicio_oferta=new Date(obtener_año, 10, 15 ); 
let limite_Oferta=new Date(obtener_año+1,0, 9);

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
        Boton.classList.add("boton-carrito");  // ← Clase para el diseño 
     Boton.addEventListener("click", Agregar_al_Carrito); //al ser presionado pasa la iformacion
   img.insertAdjacentElement("afterend", Boton); //lugar en el que se va a mostrar el boton


   
    });
  
}





function Agregar_al_Carrito(event){ //pasa la informacion, cuando se dio click al boton

let boton = event.target; // envent, =informacion del evento, accion en especifica,click
//target, referencia al objeto;

  // Buscar el precio dentro del mismo contenedor del producto, de su clase,
  let precio = boton.parentElement.querySelector(".Price");
  let N_Producto=boton.parentElement.querySelector(".diseño_texto");
 let nombre =N_Producto.textContent;

  suma = parseInt (precio.textContent); //convierte a numero:
  alert(`agregado al carrito, producto con precio de $: ${suma},, con nombre:${nombre}`);


     //let total_dinero= suma;
      x+=suma;
    localStorage.setItem("x", x); //guarda los nuevos valores, el total,

    

      Mostrar_Productos.push({
        nombre: nombre,
        suma: suma
      });

    localStorage.setItem("Mostrar_Productos", JSON.stringify(Mostrar_Productos)); 
    //etiqueta como un id, para identificar, la variable, stringify para convertir el arreglo a texto, de la variable mostrar productos
    }

 
    function total(){
let mostrar_total="";
let mostrar_Precio="";
let i=0;
for (i= 0; i < Mostrar_Productos.length; i++) {
  mostrar_Precio+=Mostrar_Productos[i].suma;
  mostrar_total+=`<p>${Mostrar_Productos[i].nombre} — $${Mostrar_Productos[i].suma}</p>`;



  
}

asignar_texto("#texto",`<br>  ${mostrar_total} ,`);
  alert(`El total de tu compra es :$  ${x}`); 

 }

 function borrar_Carrito(){

  localStorage.setItem("Mostrar_Productos", JSON.stringify([]));
  Mostrar_Productos = [];
localStorage.setItem("x", 0);
x = 0;





 }
        

 document.addEventListener("DOMContentLoaded", () => {
  if (document.body.id === "carrito") {
    boton();
    total();
  }
});
       
    


    

   
    
