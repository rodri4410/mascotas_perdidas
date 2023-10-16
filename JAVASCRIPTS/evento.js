function menus(){
    var opc= document.getElementById("OPC");
    opc.innerHTML= `  <button id="OPC" onmouseenter="menus()" onmouseleave="menus2()"> <img src="Archivos/opcion-de-lista.png" width="30px" height="30px"> </button>
    <table>
        <tr>
            <td> <a href="adopta.html"> <button><img src="Archivos/adopcion.png" width="50px" height="50px">ADOPTAR
                    </button> </a> </td>
            <td> <a href="formulario.html"> <button><img src="Archivos/desaparecido.png" width="50px"
                            height="50px">PUBLICAR </button> </a> </td>
            <td> <a href="perdidos.html"><button><img src="Archivos/desaparecido.png" width="50px" height="50px"> VER
                    </button> </a> </td>
        </tr>

    </table>`
}

function menus2(){
    var opc= document.getElementById("OPC");
    opc.innerHTML= ` <button id="OPC" onmouseenter="menus()" onmouseleave="menus2()"> <img src="Archivos/opcion-de-lista.png" width="30px" height="30px"> </button>
    `
}





 
   
    




