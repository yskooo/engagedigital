// function for burger menu
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
    })
    // animation for sticky navigation bar
const sticky = document.querySelector('.navbar');

if (sticky.style.position !== 'sticky') {
    let stickyTop = sticky.offsetTop;

    document.addEventListener('scroll', () => {
        window.scrollY >= stickyTop ?
            sticky.classList.add('fixed') :
            sticky.classList.remove('fixed');
    });
}

// owshi
