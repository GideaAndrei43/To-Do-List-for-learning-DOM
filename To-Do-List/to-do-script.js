const todoList=[
  {
    name: 'fa clatite',
    dueDate:'2020-10-10'
  }
];

renderToDoList();

function addToDo(){
  const inputElement=document.querySelector('.js-name-input');
  const name=inputElement.value;
  
  const dateInputElement=document.querySelector('.js-date-input');

  const dueDate=dateInputElement.value;

  todoList.push({
    name: name,
    dueDate: dueDate
  });
  

  inputElement.value='';
  renderToDoList();
}

function renderToDoList(){
  let todoListHTML='';

  for(i=0;i<todoList.length;i++){
      const todoObject=todoList[i];
      //const name=todoObject.name;
      //const dueDate=todoObject.dueDate;
      const { name,dueDate }=todoObject;
      const html=`<div class="name-input">${name}</div>
      <div class="date-input">${dueDate}</div>
      
      <button class="delete-button" onclick="
      todoList.splice(${i},1);
      renderToDoList();
      ">Delete</button>`;
      todoListHTML+=html;


  }

  document.querySelector('.js-todo-list').innerHTML=todoListHTML;
}