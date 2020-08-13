const boxregisterActive = () => {

    let registerActive: NodeListOf<HTMLElement> | HTMLElement = document.querySelectorAll('.box-register-active');
    let boxregister: HTMLElement | null = document.getElementById('box-register');



    for (let i = 0; i < registerActive.length; i++) {

        registerActive[i].addEventListener('click', (e) => {
            e.preventDefault();
            boxregister.style.display = 'block';
            let btnregister: HTMLElement | null = document.getElementById('btn-close-register');

            btnregister?.addEventListener('click', () => {
                boxregister.style.display = 'none';
            });
        });

    }

}

