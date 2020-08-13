const menudesplegable = () => {

    let menuFixed: HTMLElement | null = document.getElementById('menu-home-movil');
    let header: HTMLElement | null = document.querySelector('header');





    window.addEventListener('scroll', () => {

        let mediaqueryList = window.matchMedia('(max-width: 768px)');
        let btnSubir = document.getElementById('btn-up-page');


        if (mediaqueryList.matches) {

            menuFixed.style.top = '-72px';
            btnSubir.style.right = '-96px';

        } else {

            menuEjecutar();

        }



    });


    let menuEjecutar = () => {

        let bodyTop = window.pageYOffset;
        let headerTop = header?.offsetHeight;
        let btnSubir = document.getElementById('btn-up-page');
        if (bodyTop >= headerTop) {
            menuFixed.style.top = '0';
            btnSubir.style.right = '10px';
        } else {
            menuFixed.style.top = '-72px';
            btnSubir.style.right = '-96px';
        }

    }


}