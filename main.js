const texto = document.querySelector("#comentario")
const BtnPublicar = document.querySelector("#postear")
const main = document.querySelector("#mensajes")

BtnPublicar.addEventListener("click", postear)

let mensaje
const mensajesList = []

function postear(){

    let comentario = texto.value

    if (comentario === ""){
        alert("Agrega un contenido para publicar")
    }else{
        mensaje = comentario
        addMessage(mensaje)
        console.log(mensajesList)
        print()
        texto.value=""
    }

}

function eliminar(event){
    const indice = event.target.id;
    mensajesList.splice(indice, 1);
    print();
}


function addMessage(mensaje){
    mensajesList.unshift(mensaje)
}

function print(){

    main.innerHTML = "";

    for (const [indice, mensaje] of mensajesList.entries()){
        const comentario = document.createElement("p")
        comentario.innerHTML = mensaje
    
        const btn = document.createElement("button")
        btn.classList.add("ghost")
        btn.id = indice;
        btn.addEventListener("click", eliminar);
    
        const icono = document.createElement("span")
        icono.classList.add("material-symbols-outlined")
        icono.innerHTML = "delete"
    
        const comment = document.createElement("section")
        comment.classList.add("comment")
    
    
        btn.append(icono)
        comment.append(comentario,btn)
        main.append(comment)

    }
 
}



