const boxloginActive = () => {

    let loginActive: NodeListOf<HTMLElement> | HTMLElement = document.querySelectorAll('.box-login-active');
    let boxlog: HTMLElement | null = document.getElementById('box-log');



    for (let i = 0; i < loginActive.length; i++) {

        loginActive[i].addEventListener('click', (e) => {
            e.preventDefault();
            boxlog.style.display = 'block';
            let btnlog: HTMLElement | null = document.getElementById('btn-close-login');

            btnlog?.addEventListener('click', () => {
                boxlog.style.display = 'none';
            });
        });

    }

}

