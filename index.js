//fonction pour ajouter de nouvelles taches
let tasks = document.getElementById('taches')
function Add() {
    if (search.value !== "") {
        let search = document.getElementById("search")
        
        tasks.innerHTML +=
            `<div class="d-flex align-items-center my-2 w-75 mx-auto items">
    <label class="border w-100 border-white rounded-3 p-2">${search.value}</label>
    <input type="text" name="text" id="text" value="${search.value}" class="form-control">
    <span class="btn btn-secondary" onclick="Enter(event)">entrer</span>
    <i class="btn fa-solid fa-pen" onclick="Modify(event)"></i>
    <i class="btn fa-solid fa-trash" onclick="Trash(event)"></i>
    <i class="btn fa-solid fa-check rounded-pill btn-success" onclick="Finish(event)"></i>
    </div>
    `
    // localStorage.setItem("tasks", tasks);
    store();
        search.value = ""
        
    } else {
        alert(`merci d'entrer une tâche à faire`)
    }
}
//fonction pour modifier des taches
function Modify(event) {
    
    let items = event.target.parentNode
    items.classList.add("editMode");
    store();
}
function Enter(event) {
    let items = event.target.parentNode
    let input = items.childNodes[3]
    let label = items.childNodes[1]
    label.innerText = input.value
    items.classList.remove("editMode");
    store();
}
//fonction pour supprimer des taches
function Trash(event) {

    event.target.parentNode.remove()
    store();
}
//fonction pour terminer de taches
function Finish(event) {
    
    let items = event.target.parentNode
    let label = items.childNodes[1]
    label.style.background = "#009900"
    store()
}
//fonction permettant d'enregistrer les différentes données dans le local
function store() {
    window.localStorage.myitems = tasks.innerHTML;
  }
  //fonction permettant d'afficher les données du local dans le document 
  function getValues() {
    let storedValues = window.localStorage.myitems;
    if(!storedValues) {
        tasks
    }
    else {
      tasks.innerHTML = storedValues;
    }
  }
  getValues();
