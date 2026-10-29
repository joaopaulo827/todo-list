const lista = [];
const formulario= document.getElementById("formulario");
const novaTarefa= document.getElementById("novaTarefa");
const tarefa= document.getElementById("tarefa")

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const titulo=novaTarefa.value.trim();
    if(titulo===""){
        novaTarefa.classList.add("is-invalidad")
    }else{
        lista.push({
            titulo:titulo,
            concluida: false
        })
        novaTarefa.value="";
        tarefas.innerHTML= "";
        lista.forEach(tarefa, )
    }
})
novaTarefa.addEventListener("change", ()=>{
    novaTarefa.classList.remove("is-invalidad")
})