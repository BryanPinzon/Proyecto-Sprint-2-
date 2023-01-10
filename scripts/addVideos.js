import { listVideos } from "./mainArray.js";

const form = document.querySelector('.form');


let sesion = sessionStorage.getItem('baseDatosVideos') ? JSON.parse(sessionStorage.getItem('baseDatosVideos')): []


form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const valuesForm = Object.values(form)
    const formInfo = {};
    valuesForm.forEach(valueInput =>{
        if(valueInput.id){
            formInfo[valueInput.id] = valueInput.value
        }
    })
    // PUSHEAMOS A MI ARRAY ORIGINAL.
    listVideos.push(formInfo);
    // ESTABLECEMOS LA INFORMACION NUEVA EN EL STORAGE.
    sessionStorage.setItem('baseDatosVideos', JSON.stringify(listVideos))
    sesion=JSON.parse(sessionStorage.getItem('baseDatosVideos'))
})

