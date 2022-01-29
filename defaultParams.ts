//allows you to specify a default value to a param if value isn't specifically passed in

var container = document.getElementById('containerId');

function countdown(initial, final=12, interval=22){
    var current = initial;
    while(current>final){
        container.innerHTML = current;
        current -= interval;
    }
}

//defaults final to 12 and interval to 22
countdown(10)

//default interval to 22
countdown(10,11)