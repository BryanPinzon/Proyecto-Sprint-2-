import { listVideos } from "./mainArray.js";

const containerVideos = document.querySelector('.main__container')

let sesionVideos = sessionStorage.getItem('baseDatos') ? JSON.parse(sessionStorage.getItem('baseDatos')): []

//Storage
let sesion = sessionStorage.getItem('baseDatosVideos') ? JSON.parse(sessionStorage.getItem('baseDatosVideos')): []

// FUNCIONALIDAD PINTAR VIDEOS EN MI CONTAINER MAIN.

const printVideos = (videos, container)=>{
    container.innerHTML=''
    videos.forEach((sesion) => {
        const createVideoItem = document.createElement('article')
        createVideoItem.setAttribute('class','grid__videos')
        createVideoItem.innerHTML = `<a href="#"><img src="${sesion.img}" class="thumbnail"></a>
        <section class="grid__info">
            <h3 class='title__video'>${sesion.title}</h3>
            <p class="info__video">${sesion.channel}</p>
            <p class="info__video">${sesion.views}</p>
        </section>`

        container.appendChild(createVideoItem);
        
    });
}
// SE CAPTURA EL CONTAINER MAIN MEDIANTE EL ESCUCHADOR DE EVENTOS, SE CAPTURA EL TITULO DE LOS VIDEOS EN STRINGS.


let variablePrueba 
const containerPadre = document.querySelector('.main__container')
containerPadre.addEventListener('click',(el)=>{
    console.log(el.target);
    let capturation =  el.target
    console.log(capturation);
    let capturationText = capturation.textContent
    console.log (capturationText);

    const titulosCapturados = []
    listVideos.forEach((title)=>{
        // titulosCapturados = []
        if(title.title === capturationText ){
        variablePrueba = titulosCapturados[capturationText] = title
        console.log(variablePrueba);
        titulosCapturados.push(variablePrueba)

    }
    
        sessionStorage.setItem('baseDatos', JSON.stringify(titulosCapturados))
        
        
    })  
sesionVideos=JSON.parse(sessionStorage.getItem('baseDatos'))
console.log(sesionVideos);

window.location = 'pages/playVideos.html';

})


document.addEventListener('DOMContentLoaded',()=>{
    if(sesion.length === 0){
        sessionStorage.setItem('baseDatosVideos', JSON.stringify(listVideos))
        sesion=JSON.parse(sessionStorage.getItem('baseDatosVideos'))
        
    }
    printVideos(sesion, containerVideos)
})


// FILTRO DE BOTONES.

const botonTodos = document.querySelector('.todos')
const botonMusica = document.querySelector('.musica')
const botonProgramming = document.querySelector('.programacion')
const botonDesing = document.querySelector('.desing')


const filterButtons = [botonTodos,botonMusica,botonProgramming,botonDesing];

filterButtons.forEach((button)=>{
    button.addEventListener('click',(event)=>{
        let videosFiltrados = [];
        if (button.className === 'todos'){
            videosFiltrados = sesion
        } else{   
            videosFiltrados = sesion.filter((element)=>element.category === button.className)
            console.log(videosFiltrados);
        }
        printVideos(videosFiltrados, containerVideos);
    })
}) 

