const header = document.querySelector('header')
window.addEventListener('scroll', ()=>{
    header.classList.toggle('sticky', window.scrollY>0)
})

const Menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar')

Menu.addEventListener('click',()=>{
    navbar.classList.toggle('open')
})

window.onscroll = ()=>{
    navbar.classList.remove('open')
}