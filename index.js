var counter = 0;
function removeThis(todo_id){
  var child_id = '#id' + todo_id;
  $(child_id).remove();
}

function enterTodo(e){
  if(e.keyCode == 13){
    addTodo();
  }
}

function addTodo(){
  var todo = document.getElementById('todo').value;
  var div = document.createElement('div');
  div.className = "row";

  div.innerHTML = "<div class='col-md-6' id='id" + counter + "' style='margin-bottom: 2%;'><div class='input-group'><span class='input-group-addon'><input type='checkbox' aria-label='...'></span><input type='text' value='" + todo +"' class='form-control' aria-label='...'><span class='input-group-btn'><button class='btn btn-danger' type='button' onclick='removeThis("+ counter  +")'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button></span></div></div>";
 document.getElementById("todos").appendChild(div);
  counter++;
}
