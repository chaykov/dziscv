const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

document.querySelectorAll('.nav-item').forEach(n => n.addEventListener('click', () => {
    navbarLinks.classList.remove('active');
    toggleButton.classList.remove('active');
}))
