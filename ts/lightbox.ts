
const lightbox = () => {

    // Variables obteniedo contenedor light box

    let lightBoxContainer: HTMLElement | null = document.getElementById('light-container-box');
    let btnClose: HTMLElement | null = document.getElementById('btn-close-photo');
    let photoFull: HTMLElement | null = document.getElementById('photo-full');
    let photoFullImg: Element | null = photoFull.firstElementChild;


    // variables del contenedor de las fotografias
    let photoContainer: NodeListOf<HTMLElement> = document.querySelectorAll('.img-customer-container');

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

            let containerImg :HTMLElement | null = photoContainer[i];
            let imgChild: HTMLElement | null = containerImg.firstElementChild.src;
            photoFullImg.src = imgChild;

            openBoxContainer();

        });

    }

    btnClose.addEventListener('click', () => {
        closeBoxContainer();
    });

}

