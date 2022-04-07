import { Todo } from "../models/models";

let t1 :Todo = new Todo("Grocery shopping" , false);
let t2 :Todo = new Todo("Clean", false );
let t3 :Todo = new Todo("Workout", false );
let t4 :Todo = new Todo("Do laundry" ,false);
let t5 :Todo = new Todo("Walk the dog" ,false);
let t6 :Todo = new Todo("Gaming" ,false);

let list : Todo []= [t1 ,t2 ,t3 ,t4, t5, t6];

function createHtml(){
    document.getElementById("todo-list").innerHTML = "";

    document.getElementById("done-list").innerHTML = "";

    

for (let i = 0; i <list.length; i++) {
    let todo :string = list[i].name;
   
    if(list[i].isDone == false){
    
   
    let newLi : HTMLLIElement = document.createElement("li"); 
    
    newLi.innerHTML = "Task :" + todo;
    
    document.getElementById("todo-list").appendChild(newLi);
    newLi.addEventListener("click" , () => {list[i].isDone = true;createHtml();});

 }else {
     let newLi1 : HTMLLIElement = document.createElement("li");

     newLi1.innerHTML = "Task :" + todo;
     document.getElementById("done-list").appendChild(newLi1);
     newLi1.addEventListener("click" , () => {list[i].isDone = false;createHtml();})

 }
}
let sortList = document.getElementById("sort");
sortList.addEventListener("click" ,() => {list.sort(function (task1, task2) {
    let a:string = task1.name.toLowerCase();
    let b:string = task2.name.toLowerCase();
    return a > b ? 1 : a < b ? -1 : 0;
    
});
createHtml();
});
}

let form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);

function handleSubmit(ev: { preventDefault: () => void; }) {
    ev.preventDefault(); 
  
    let input : string =  (<HTMLInputElement>document.getElementById("taskInput")).value;
    let newTask = {
        name : input,
        isDone : false
    };
  
    list.push(newTask);
    createHtml();
       
}
createHtml();









   