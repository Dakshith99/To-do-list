const inputbox = document.getElementById('input-task');
const listcontainer = document.getElementById('list-container');

inputbox.addEventListener('keydown', function(e){
    if(e.key==='Enter'){
        addTask();
    }
});

function addTask() {
    if( inputbox.value === '' ) {
        alert('Please enter a task');
    
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputbox.value = '';
    saveData();

}

listcontainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();

    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();

    }

},false);

function saveData(){
    localStorage.setItem('data', listcontainer.innerHTML);
}

function showtask(){
    listcontainer.innerHTML = localStorage.getItem('data');
}
showtask();