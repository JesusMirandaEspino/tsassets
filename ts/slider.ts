const slider = () => {


//contendpor principal del slider
    let sliderContainer: HTMLElement | null = document.getElementById('slider');

    

//funcion mover slide

let moveSlide = () => {

    sliderContainer?.style.transition = 'all 1s ease';
    sliderContainer?.style.marginLeft = '-100%';


    setTimeout( () => {
        let firstslide: Element | null | undefined = sliderContainer?.firstElementChild;
        sliderContainer?.appendChild(firstslide );
        sliderContainer?.style.transition = 'unset';
        sliderContainer?.style.marginLeft = '0';
    }, 1000 );

}

    setInterval(moveSlide , 6000 );



}

