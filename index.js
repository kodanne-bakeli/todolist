
function Add() {
    let search = document.getElementById("search").value
    search.innerHTML = ""
    return document.getElementById('taches').innerHTML +=
        `<div class="d-flex align-items-center my-2">
    <label class="w-75  py-2">${search}</label>
    <input type="text" placeholder="${search}" class="form-control w-75 mx-auto">
    <i class=" btn fa-solid fa-pen" onclick="Modify()"></i>
    <i class="btn fa-solid fa-trash" onclick="Trash()"></i>
    <input type="button" value="terminer" class="btn btn-success" onclick="Finish()">
    </div>
    `
}
function Modify() {
    let items = event.target.parentNode
     items.classList.add("editMode");
     if("Enter" === keydown){
        items.classList.remove("editMode");
     }
}
function Trash() {
    event.target.parentNode.remove()
}
function Finish() {
    event.target.parentNode.style.background = "#009900"

}
// //cree une gestio de tache lutilisateur pourra ajouter afficher supprimer et modififer une tache ensuite si on termine la tache(cliquer sur terminer) le bg de la tache doit etre en vert