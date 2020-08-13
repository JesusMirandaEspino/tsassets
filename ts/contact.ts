const contactboxACtive = () => {

    let contacActive: NodeListOf<HTMLElement> | HTMLElement = document.querySelectorAll('.box-contact-active');
    let boxContact: HTMLElement | null = document.getElementById( 'box-contact' );



    for( let i = 0;  i <  contacActive.length; i++ ){

        contacActive[i].addEventListener('click', (e) => {
            e.preventDefault();
            boxContact.style.display = 'block';
            let btnContact: HTMLElement | null = document.getElementById('btn-close-contact');

            btnContact?.addEventListener('click', () => {
                boxContact.style.display = 'none';
            });
        });

    }

}


