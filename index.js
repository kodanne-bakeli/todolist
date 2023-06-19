

//fonction pour ajouter de nouvelles taches
function Add() {
    let search = document.getElementById("search")
    
     
        document.getElementById('taches').innerHTML +=
    `<div class="d-flex align-items-center my-2 w-75 mx-auto">
    <label class="border w-100 border-white rounded-3 p-2">${search.value}</label>
    <input type="text" name="text" id="text" value="${search.value}" class="form-control">
    <span class="btn btn-secondary" onclick="Enter(event)">entrer</span>
    <i class="btn fa-solid fa-pen" onclick="Modify(event)"></i>
    <i class="btn fa-solid fa-trash" onclick="Trash(event)"></i>
    <i class="btn fa-solid fa-check rounded-pill btn-success" onclick="Finish(event)"></i>
    </div>
    `
    search.value = ""
}
//fonction pour modifier des taches
function Modify(event) {
     let items = event.target.parentNode
      items.classList.add("editMode");
    

}
function Enter(event){
    let items = event.target.parentNode
    let input = items.childNodes[3]
    let label = items.childNodes[1]

    label.innerText= input.value
    
    items.classList.remove("editMode");
}
//fonction pour supprimer des taches
function Trash(event) {

    event.target.parentNode.remove()
}
//fonction pour terminer de taches
function Finish(event) {
    let items = event.target.parentNode
    let label = items.childNodes[1]
    label.style.background = "#009900"

}
