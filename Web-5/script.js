//variables
const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const addButton = document.querySelector("#btnAddNewTask");
const deleteAllTask = document.querySelector("#btnDeleteAll")
const taskList = document.querySelector("#taskList");

const items = ['item 1', 'item 2', 'item 3', 'item 4'];

eventListener();

loadItems();

function eventListener() {

    form.addEventListener("submit", addNewItem);

    taskList.addEventListener("click", deleteItem);

    deleteAllTask.addEventListener("click", deleteAllItem);
}

function loadItems() {
    items.forEach(function(item) {
        createItem(item);
    })
}

function createItem(text) {
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(text));

    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>'

    li.appendChild(a);
    taskList.appendChild(li);
    input.value = "";

}

function addNewItem(e) {
    if (input.value === "") {
        alert("add new item");
    } else {
        const li = document.createElement("li");
        li.className = "list-group-item list-group-item-secondary";
        li.appendChild(document.createTextNode(input.value));

        const a = document.createElement("a");
        a.classList = "delete-item float-right";
        a.setAttribute("href", "#");
        a.innerHTML = '<i class="fas fa-times"></i>'

        li.appendChild(a);
        taskList.appendChild(li);
        input.value = "";
    }
    e.preventDefault();
}

function deleteItem(e) {

    if (e.target.className === "fas fa-times") {
        e.target.parentElement.parentElement.remove();
    }


    e.preventDefault();
}

function deleteAllItem(e) {

    if (confirm("Silmek istediğinize emin misiniz?")) {
        //taskList.innerHTML = "";


        for (let i = 0; i < taskList.childNodes.length; i++) {
            let item = taskList.childNodes[i];
            if (item.classList == "list-group-item list-group-item-secondary") {
                item.remove();
                i--;
            }
        }
    }

    e.preventDefault();
}