
const lightbox = () => {

// Variables obteniedo contenedor light box

let lightBoxContainer = document.getElementById('light-container-box');
let btnClose = document.getElementById('btn-close-photo');
let photoFull = document.getElementById('photo-full');
let photoFullImg = photoFull.firstElementChild;


// variables del contenedor de las fotografias
let photoContainer = document.querySelectorAll('.img-customer-container');

//abrir contenedor lightbox
let openBoxContainer = () => {
    lightBoxContainer.style.display = 'block';
};

//cerrar contenedor lightbox
let closeBoxContainer = () => {
    lightBoxContainer.style.display = 'none';
};

//evento para cada elemento del contenedor
for (let i = 0; i < photoContainer.length; i++) {
    photoContainer[i].addEventListener('click', () => {

        let containerImg = photoContainer[i];
        let imgChild = containerImg.firstElementChild.src;
        photoFullImg.src = imgChild

        openBoxContainer();

    });

}

btnClose.addEventListener('click', () => {
    closeBoxContainer();
});

}

lightbox();