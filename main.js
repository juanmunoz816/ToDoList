const texto = document.querySelector("#comentario")
const BtnPublicar = document.querySelector("#postear")
const main = document.querySelector("#mensajes")

BtnPublicar.addEventListener("mousedown", postear)
window.addEventListener('keydown', enter);
window.addEventListener('keyup', vaciar);

let mensaje
let mensajesList = [];


if (localStorage.getItem('MensajeList')) {
    mensajesList = JSON.parse(localStorage.getItem('MensajeList'));
    print();  // Ejecutar print si hay una lista en caché
}

function postear(){

    let comentario = texto.value

    if (comentario === ""){
        alert("Agrega un contenido para publicar")
    }else{
        mensaje = comentario
        addMessage(mensaje)
        console.log(mensajesList)
        print()
        saveCache()
        texto.value=""
    }

}

function enter(key){

 if(key.key === "Enter"){
    postear()
 }
}

function vaciar(key){
    if(key.key === "Enter"){
        texto.value=""
     }
}



function addMessage(mensaje){
    mensajesList.unshift(mensaje)
}

function print(){

    main.innerHTML = "";

    mensajesList.forEach(function(mensaje){
        const comentario = document.createElement("p")
        comentario.innerHTML = mensaje
    
        const btn = document.createElement("button")
        btn.classList.add("ghost")
        btn.onclick = function(){
            const indice = mensajesList.indexOf(mensaje)
            console.log(indice)
            mensajesList.splice(indice,1)
            print()
            saveCache()
        }
    
        const icono = document.createElement("span")
        icono.classList.add("material-symbols-outlined")
        icono.innerHTML = "delete"
    
        const comment = document.createElement("section")
        comment.classList.add("comment")
    
    
        btn.append(icono)
        comment.append(comentario,btn)
        main.append(comment)

    })
 
}


function saveCache(){
    localStorage.setItem('MensajeList', JSON.stringify(mensajesList));
}


