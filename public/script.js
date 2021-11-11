const button = document.getElementById('button')
const menu = document.getElementById('menu')

button.onclick = function(){
  menu.classList.toggle('open')
  menu.onclick = function(){
    menu.classList.remove('open')
  }
}