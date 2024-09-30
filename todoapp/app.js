const inputTarea = document.getElementById('tareatxt');
const btnAdd= document.getElementById('addTarea');
const divTareas = document.getElementById('tareas');

const addTarea=()=>{
    inputTarea.value;
    const tarea= inputTarea.value;
   
    divTareas.appendChild(createTarea(tarea));
    inputTarea.value= '';
}
const deleteItem = (e) => {
    const pa=e.target.parentElement;
    pa.remove();
}

const createTarea=(tarea)=>{
    const div= document.createElement('div');
    const p= document.createElement('p');
    const button= document.createElement('button');
    p.innerText= tarea;
    button.innerText= 'Eliminar';
    button.addEventListener('click', deleteItem);
    div.appendChild(p);
    div.appendChild(button);
    return div;

}
//Eventos
btnAdd.addEventListener('click', addTarea);