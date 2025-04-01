const showPhoto = document.querySelector("#show-photo-button")
console.log(showPhoto)
showPhoto.addEventListener("click", function(){
    document.querySelector("#work-ph").classList.toggle("hidden")
})