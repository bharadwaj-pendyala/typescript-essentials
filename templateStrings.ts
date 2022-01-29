//

/**
 * define string template use back-tick
 * supports variable replacements
 * conditional statements - whether to expose a hidden element or not etc.
**/

var container = document.getElementById('containerId');

var todo = {
    id: 123,
    name: 'John',
    compeleted: true
};

container.innerHTML = `<div todo='${todo.id}' class='list-gorup-items'>
<i class='${todo.compeleted ? '':'hidden'}' 
<span class= 'name'>${todo.name}</span>`


