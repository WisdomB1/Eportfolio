
const scaleFactor = 1 / 20;
const moveBackground = (event) => {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for(let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

let contrastToggle = false;
const toggleContrast = () => {
    contrastToggle = !contrastToggle;
    if (contrastToggle){
        document.body.classList += " dark-theme"
    } else {
        document.body.classList.remove("dark-theme")
    }
}

const contact = (event) => {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_o98b27r',
            'template_ub4w9lf',
            event.target,
            'hGEPMvTd3eJ1ynhmp'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert("Sorry, the email service is temporarily unavailable. Please contact me directly at bamahngumwisdom100@gmail.com");
        })
}

let isModalOpen = false;
const toggleModal = () => {
    if (isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}
