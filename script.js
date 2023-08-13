let inputField = document.querySelector("#inputField")

const create = document.querySelector("#create")

let newTask = document.querySelector("#newTask")

create.addEventListener("click", function () {
    
    var paragraph = document.createElement("p")

    paragraph.classList.add("newTask")

    paragraph.classList.add("form-control")

    paragraph.innerText = inputField.value

    newTask.appendChild(paragraph)

    inputField.value = ""

    paragraph.addEventListener("click", function () {

        paragraph.style.textDecoration = "line-through";

    })

    paragraph.addEventListener("dblclick", function () {

        newTask.removeChild(paragraph);
    })
})