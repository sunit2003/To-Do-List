const inputBox=document.getElementById("inputbox");
const listContainer=document.getElementById("listcontainer");
function addtask(){
    if(inputBox.value === ''){
        alert("Please Add Some Task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u292B";
        li.appendChild(span);
    }
    inputBox.value="";
    savedata();
}
listContainer.addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }

}, false)

function savedata(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showdata(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showdata();