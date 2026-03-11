let images = document.querySelectorAll(".gallery img")
let lightbox = document.getElementById("lightbox")
let lightboxImg = document.getElementById("lightbox-img")

let current = 0

images.forEach((img,index)=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex"
lightboxImg.src=img.src
current=index

})

})

document.querySelector(".close").onclick=()=>{

lightbox.style.display="none"

}

document.getElementById("next").onclick=()=>{

current++

if(current>=images.length){

current=0

}

lightboxImg.src=images[current].src

}

document.getElementById("prev").onclick=()=>{

current--

if(current<0){

current=images.length-1

}

lightboxImg.src=images[current].src

}

/* SEARCH */

document.getElementById("search").addEventListener("keyup",function(){

let value=this.value.toLowerCase()

document.querySelectorAll(".image").forEach(img=>{

let text=img.innerText.toLowerCase()

img.style.display=text.includes(value)?"block":"none"

})

})

function filterImages(category){

let images=document.querySelectorAll(".image")

images.forEach(img=>{

if(category=="all"){
img.style.display="block"
}

else if(img.classList.contains(category)){
img.style.display="block"
}

else{
img.style.display="none"
}

})

}