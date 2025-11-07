const list = document.getElementById("list"); // unordered list of tasks
const textbox = document.getElementById("write");// This is the text input field in the HTML document
const txtRe = /^[]{0}$/; // textbox is empty
let save = localStorage.getItem("list");
list.innerHTML = save;
textbox.addEventListener("keydown", (e)=> // This lets you submit a task by pressing enter instead of clicking the add task button
{
    if(e.key == "Enter")
    {
        addTask();
    }
});

list.addEventListener("click", (e) => 
{
    const btn = e.target.closest("button");
    if(btn.className == "complete") // complete button has been clicked
    {
        parent =btn.parentElement; // this is task in the addTask function
        parent.className = "done";
        parent.children[0].className = "done"; //this is word in the addTask function
        parent.children[1].className ="done";//this is comp in the addTask function
        updateSave();
    }
    else if(btn.className == "delete")
    {
        parent =btn.parentElement; // this is task in the addTask function
        list.removeChild(parent);
        updateSave();
    }
});

function addTask()
{
if(!txtRe.test(textbox.value.trim()))// makes sure textbox is not empty
{
    let task = document.createElement("li");
    let comp = document.createElement("button");//complete button
    let del = document.createElement("button");// delete  button
    let word = document.createElement("p");
    word.textContent = textbox.value;
    textbox.value = null;// Clears textbox 
    comp.textContent = "Complete";
    comp.className = "complete";
    del.textContent = "Delete";
    del.className = "delete";
    task.className ="task";
    task.appendChild(word); // word needs to be added first for the complete button to work properly
    task.appendChild(comp); // comp must be added second for the complete button to work
    task.appendChild(del);
    list.appendChild(task);
    updateSave();
}
}

function updateSave()
{
    save =list.innerHTML;
    localStorage.setItem("list", save);

}

