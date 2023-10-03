const inputBox = document.getElementById("input-box");
const listBody = document.getElementById("list-body");
const editButton = document.getElementById("edit-button");

    function addTask() {
        
        if(inputBox.value === ''){ 
            alert("You must write something!");
        }
        
        else{
       
        
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listBody.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML= "\u00d7";
            li.appendChild(span);
        }
        inputBox.value="";
        saveData();
    }
    listBody.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){ 
            e.target.classList.toggle("checked");
        }
        else if(e.target.tagName === "SPAN"){ 
            e.target.parentElement.remove();
        }
        }, false);

        function editTask() {
            const selectedTask = document.querySelector("li.checked");
            
            if (!selectedTask) {
                alert("Select a task to edit by clicking on it.");
                return;
            }
        
            const newText = prompt("Edit task:", selectedTask.textContent);
        
            if (newText !== null) {
                selectedTask.textContent = newText;
                selectedTask.classList.remove("checked");
                
                let span = document.createElement("span");
                span.innerHTML = "\u00d7";
                selectedTask.appendChild(span);

        
                span.addEventListener("click", function() {
                     selectedTask.remove();
                     saveData();
        });
                saveData();
            }
        }
        

        function saveData(){
             localStorage.setItem("data", listBody.innerHTML);
        }
        function showTask(){
            listBody.innerHTML = localStorage.getItem("data"); 
        } 
        
        showTask();