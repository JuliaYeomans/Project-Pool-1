let li = document.querySelectorAll ("li");
let temp;

let toDo = document.querySelector(".todo");
let done = document.querySelector(".done");
li.forEach(addEVL);

function addEVL (li){
    li.addEventListener("click", liClicked);
}

function liClicked(){
    console.log(this);
    this.classList.add("crossout"); 
    temp = this;
    setTimeout(function(){
        done.appendChild(temp);
        temp.classList.remove("crossout");
        temp.classList.add("crossoutafter");
    }, 1500);

}


function addInput(){
        let todolist = document.querySelector(".todo");
        let newLi = document.createElement('li');
        newLi.innerHTML = document.querySelector("#add").value;
        todolist.appendChild(newLi);
        
}
