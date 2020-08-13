const menuPhone = () => {


    let navPhone: HTMLElement | null = document.getElementById('btn-phone-menu');
    let menuNav: HTMLElement | null = document.getElementById('menu-nav-phone');
    let elementosNav = document.querySelectorAll('.elements-nav');
    let menuActivo: boolean = false;

    console.log(elementosNav);

    navPhone?.addEventListener('click', () => {

        menuNav?.style.display = 'block';



        for (let i = 0; i < elementosNav.length; i++) {
            elementosNav[i].addEventListener('click', ocultar);
        }




    });

    let ocultar = () => {
        menuActivo = false;
        menuNav?.style.display = 'none';
    }



}
