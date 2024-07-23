function Delete(event){
    event.target.parentElement.remove()
}

var plus = document.getElementById("add-popup")
var overlay = document.querySelector(".popup-overlay")
var box = document.querySelector(".pop-box")

plus.addEventListener("click",function(){
    overlay.style.display = "block"
    box.style.display = "block"
})



//book-title-input,book-author-input,book-description-input

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitle = document.getElementById("book-title-input")
var bookauthor = document.getElementById("book-author-input")
var description = document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault();
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h2>${booktitle.value}</h2>
                <h5>${bookauthor.value}</h5>
                <p class="para">${description.value}</p>
                <button onclick="Delete(event)">Delete</button>`

    container.append(div)
    overlay.style.display = "none"
    box.style.display = "none"
})


var cancle = document.getElementById("cancle-popup")

cancle.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display = "none"
    box.style.display = "none"

    bookauthor.value = ''
    booktitle.value = ''
    description.value = ''
})