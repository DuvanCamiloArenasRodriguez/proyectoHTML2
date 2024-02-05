let menu = document.querySelector(".menu")

document.querySelector("#btnMenu").addEventListener("click", function(){
    menu.classList.toggle("active")
    // console.log("jhjdfh")
})

window.show.addEventListener('click', () => {
    window.dialog.showModal()
    console.log("asfsdsvdfb")
})

window.hide.addEventListener('click', () => {
    window.dialog.close()
})

let modal2 = document.getElementById("dialog2")

window.carrito.addEventListener('click', () => {
    modal2.showModal()
    console.log("asfsdsvdfb")
})

window.pagar.addEventListener('click', () => {
    modal2.close()
})

window.cerrar.addEventListener('click', () => {
    window.dialog.close()
})

window.salir.addEventListener('click', () => {
    modal2.close()
})