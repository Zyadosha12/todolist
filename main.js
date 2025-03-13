let task = document.getElementById("text");
let listtask = document.getElementById("list-task");
let btn = document.getElementById("btnAdd");
let content = [];

if (localStorage.getItem("product") !== null) {
    content = JSON.parse(localStorage.getItem("product"))
    show()
}
btn.onclick = function () {
    if (task.value !== '') {
        let opj = {
            name: task.value
        }
        content.push(opj)
    }
    show()
    clear()
}
function show() {
    let data = '';
    for (let i = 0; i < content.length; i++) {
        data +=
            `
          <div class="adress">
                <span>${content[i].name}</span>
                <button onclick = "del(${i})">Delete</button>
            </div>
        `
    }
    localStorage.setItem("product", JSON.stringify(content))
    document.getElementById("list-task").innerHTML = data
    let btndel = document.getElementById("del");
    if(content.length > 0){
        btndel.innerHTML = `
            <button onclick = "delall()">DeleteAll ${content.length}</button>
        `
    }else{
        btndel.innerHTML = ``
    }
}
show();
function clear(){
    task.value = ""
}
function del(i){
    content.splice(i,1);
    show()
}
function delall(){
    localStorage.clear()
    content.splice(0)
    show()
}


