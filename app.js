const input=document.querySelector("#input-box")
const btn = document.querySelector("button")
const list =document.querySelector("#list")

function addTask(){
        if(input.value === ""){
            alert("You must write Something")
        }else{
            let li = document.createElement("li");
            li.innerHTML=input.value;
            list.appendChild(li);
            let span = document.createElement("span")
            span.innerHTML="\u00d7";
            li.appendChild(span);
        }
        input.value="";
        saveData();
    }
btn.onclick=()=>{
    addTask();
}

list.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
} ,false)

function saveData(){  // save our task
    localStorage.setItem("data",list.innerHTML);
}

function showtask(){   // it wontlet our data to be erased even if we refresh website as well
    list.innerHTML= localStorage.getItem("data");
}


showtask();