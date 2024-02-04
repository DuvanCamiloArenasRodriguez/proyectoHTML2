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