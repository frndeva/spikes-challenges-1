/*============== SHOW MENU ==============*/
document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('nav-toggle'),
      navToggle = document.getElementById('nav-open'),
      navClose = document.getElementById('nav-close')

/* MENU SHOW */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.style.display = "block";
    })
}

/* MENU HIDDEN */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.style.display = "none";
    })
}
});

/*============== REMOVE MENU MOBILE ==============*/
document.addEventListener('DOMContentLoaded', () => {
    const navLink = document.querySelectorAll('.nav-link')

    const linkAction = () =>{
        const navMenu = document.getElementById('nav-bottom-toggle')
        navMenu.style.display = "none";
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))
});