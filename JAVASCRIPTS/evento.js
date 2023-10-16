function menus(){
    var opc= document.getElementById("OPC");
    opc.innerHTML= ` 
    <div id="MENU3>         
    <a href="adopta.html"> <button><img src="Archivos/adopcion.png" width="50px" height="50px">ADOPTAR
                    </button> </a> 
             <a href="formulario.html"> <button><img src="Archivos/desaparecido.png" width="50px"
                            height="50px">PUBLICAR </button> </a> 
             <a href="perdidos.html"><button><img src="Archivos/desaparecido.png" width="50px" height="50px"> VER
                    </button> </a> 
        <div>

    `
}

function menus2(){
    var opc= document.getElementById("OPC");
    opc.innerHTML= ` <p id="OPC" onmouseenter="menus()" onmouseout="menus2()"> <img src="Archivos/opcion-de-lista.png" width="30px" height="30px"> </p>
    `
}





 
   
    




