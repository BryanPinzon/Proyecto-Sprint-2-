


let sesion = sessionStorage.getItem('baseDatosVideos') ? JSON.parse(sessionStorage.getItem('baseDatosVideos')): []

let sesionVideos = sessionStorage.getItem('baseDatos') ? JSON.parse(sessionStorage.getItem('baseDatos')): []

console.log(sesionVideos);

const reproductorVideo = document.querySelector('.section__reproductor')
const videosSugeridos= document.querySelector('.section__reproductor2')

const playVideos = (videos, container )=>{
        videos.forEach((sesionVideos) => {
        const printReplay = document.createElement('section')
        printReplay.setAttribute('class', 'section__videoplayer')
        printReplay.innerHTML = `<iframe src="${sesionVideos.video}" class="video__iframe"></iframe>
        <h3 class="title__video">${sesionVideos.title}</h3>
        <p class="info__video">${sesionVideos.channel}</p>
        <p class="info__video">${sesionVideos.views}</p>`

        container.appendChild(printReplay);

    });
}

const playVideosSugeridos = (videos, container )=>{
    videos.forEach(sesion => {
        const printSugeridos = document.createElement('section')
        printSugeridos.setAttribute('class', 'section__reproductor3"')
        printSugeridos.innerHTML = `<img src="${sesion.img}" alt="">
        <section class="section__information">
            <h3 class="title__video">${sesion.title}</h3>
            <p class="info__channel">${sesion.channel}</p>
            <p class="info__views">${sesion.views}</p>`

        container.appendChild(printSugeridos);

    });
}

document.addEventListener('DOMContentLoaded',()=>{
    if(sesion.length === 0){
        sessionStorage.setItem('baseDatosVideos', JSON.stringify(listVideos))
        sesion=JSON.parse(sessionStorage.getItem('baseDatosVideos'))
        
    }
    if(sesionVideos.length === 0){
        sessionStorage.setItem('baseDatos', JSON.stringify(variablePrueba))
        sesionVideos=JSON.parse(sessionStorage.getItem('baseDatos'))
        
    }

    // playVideos(sesionVideos, reproductorVideo)
    // playVideosSugeridos(sesion, videosSugeridos)


})
playVideos(sesionVideos, reproductorVideo)

playVideosSugeridos(sesion, videosSugeridos)


// console.log(playVideos(sesionVideos, reproductorVideo));
