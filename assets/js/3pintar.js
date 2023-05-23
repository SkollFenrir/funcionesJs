/* function pintar(){
    ele = document.getElementById("ele1")
    ele.style.backgroundColor = 'yellow'
    }
    ele = document.getElementById("ele1")
    ele.addEventListener("click", pintar); */

const pintar = (color) => {
    let ele1 = document.querySelector('#ele1');
    ele1.style.backgroundColor = color;
}
    
pintar('green');
    
ele1 = document.querySelector('#ele1');
/* ele1.addEventListener('click', () => {
    ele1.style.backgroundColor = 'yellow'
}); */
ele1.addEventListener("click", () => pintar ("yellow"));