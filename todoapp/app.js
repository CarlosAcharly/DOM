const inputTarea = document.getElementById('tareatxt');
//const btnAdd= document.getElementById('addTarea');
const divTareas = document.getElementById('tareas');
const myForm= document.querySelector('#myform');

const arrayTarea=localStorage.getItem('tareas')
                ? JSON.parse(localStorage.getItem('tareas')) 
                : [];


const addTarea=()=>{
    inputTarea.value;
    const tarea= inputTarea.value;
    inputTarea.value= '';
    arrayTarea.push(
        {
            tarea: tarea,
            estado: 'danger',
            id: Math.floor(Math.random()*10000)

        }
    );
    contruyeDivs();
    localStorage.setItem('tareas', JSON.stringify(arrayTarea));
}
const deleteItem = (e) => {
    //const cDiv=e.target;
    const pa=e.target.parentElement;
    const id= cDiv.getAttribute('data-id');
    arrayTarea=arrayTarea.filter(tarea => tarea.id !== Number(id));
    pa.remove();
    localStorage.setItem('tareas', JSON.stringify(arrayTarea));
}
const contruyeDivs=()=>{
    divTareas.innerHTML='';
    arrayTarea.forEach((tarea)=>{
        divTareas.appendChild(createTarea(tarea));
        localStorage.setItem('tareas', JSON.stringify(arrayTarea));
    })
}


const createTarea=(tarea)=>{
    const div= document.createElement('div');
    const p= document.createElement('p');
    const button= document.createElement('button');
    p.innerText= tarea.tarea;
    button.innerText= 'Eliminar';
    button.addEventListener('click', deleteItem);
    div.appendChild(p);
    div.appendChild(button);
    div.classList.add('alert');
    div.classList.add(tarea.estado);
    div.setAttribute('data-id', tarea.id);
    div.addEventListener('click', changeColor);
    return div;

}
const changeColor =(e) => { 
    const cDiv=e.target;
    const id= cDiv.getAttribute('data-id');
    const encontrado=arrayTarea.findIndex(tarea => tarea.id === Number(id));
    
    if(cDiv.classList.contains('danger')){
        cDiv.classList.remove('danger');
        cDiv.classList.add('warning');
        arrayTarea[encontrado].estado='warning';
    }else if(cDiv.classList.contains('warning')){
        cDiv.classList.remove('warning');
        cDiv.classList.add('success');
        arrayTarea[encontrado].estado='success';
    }
        
    localStorage.setItem('tareas', JSON.stringify(arrayTarea));
}

//Eventos
//btnAdd.addEventListener('click', addTarea);
myForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    addTarea();
})