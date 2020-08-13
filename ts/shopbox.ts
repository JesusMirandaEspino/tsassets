
const shopBox = () => {

    // variables 
    let saleContainer: NodeListOf<Element> = document.querySelectorAll('.sale-container');
    let customerContainer: NodeListOf<Element> = document.querySelectorAll('.img-customer-container');





    for (let i = 0; i < customerContainer.length; i++) {


        customerContainer[i].addEventListener('mouseover', () => {
            let elementcontainer = customerContainer[i].lastElementChild;
            let firstChildren: Element | null = elementcontainer.firstElementChild;
            let lastChildren: Element | null = elementcontainer.lastElementChild;

            firstChildren.style.display = 'block';
            lastChildren.style.display = 'block';


        });

        customerContainer[i].addEventListener('mouseout', () => {
            let elementcontainer = customerContainer[i].lastElementChild;
            let firstChildren = elementcontainer.firstElementChild;
            let lastChildren = elementcontainer.lastElementChild;

            firstChildren.style.display = 'none';
            lastChildren.style.display = 'none';
        });

    }


}

