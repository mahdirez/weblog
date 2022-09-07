const header = document.querySelector('header')
window.addEventListener('scroll', ()=>{
    header.classList.toggle('sticky', window.scrollY>0)
})

const Menu = document.querySelector('#menu-icon');
const nav = document.querySelector('.navbar')

Menu.addEventListener('click',()=>{
    nav.classList.toggle('open')
})

window.onscroll = ()=>{
    nav.classList.remove('open')
}