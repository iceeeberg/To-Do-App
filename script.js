document.querySelector('.submit-button').onclick = function submit() {
  var text = document.getElementById('task').nodeValue
  var li = "<li>" + text + "</li>";

  document.getElementById('list').appendChild(li);
  
}
