function menus(){
    var opc= document.getElementById("OPC");
    opc.innerHTML= ` 
    <table id="MENU3">
        <td> 
            <tr> <a href="adopta.html"> <button><img src="Archivos/adopcion.png" width="50px" height="50px">ADOPTAR
                    </button> </a> </tr>
            <tr> <a href="formulario.html"> <button><img src="Archivos/desaparecido.png" width="50px"
                            height="50px">PUBLICAR </button> </a> </tr>
            <tr> <a href="perdidos.html"><button><img src="Archivos/desaparecido.png" width="50px" height="50px"> VER
                    </button> </a> </tr>
        </td>

    </table>
    `
}

function menus2(){
    var opc= document.getElementById("OPC");
    opc.innerHTML= ` <p id="OPC" onclick="menus()"> <img src="Archivos/opcion-de-lista.png" width="30px" height="30px"> </p>
    `
}





 
   
    




