//SELECTING ELEMENTS BY THEIR DIVS
let input = document.getElementById('taskInput');
let button = document.getElementById('taskAdd');
let tasks = document.getElementById('taskArea');

//FUNCTION WILL EXECUTE WHEN BUTTON IS CLICKED
button.addEventListener('click', function () {
    //TRIM THE WHITE SPACES FROM THE INPUT VALUE SO USER CAN'T ADD EMPTY SPACES
    let taskValue = input.value.trim();

    //MAKES SURE THERE IS TEXT IN THE INPUT
    if (taskValue == '') {
        alert('Empty tasks are not allowed!')
    }
    else {
        //CREATES THE DIV THAT WILL STORE THE TASK AND BUTTONS
        let task = document.createElement('div');
        //ADDS A CLASS OF taskBox TO THE DIV (check style.css)
        task.classList.add('taskBox');

        //CREATES THE PARAGRAPH THAT WILL STORE THE TASK ITSELF (written on the input)
        let taskText = document.createElement('p');

        //CREATES BOTH BUTTONS THAT WILL BE BY THE TASK'S SIDE
        let remove = document.createElement('button');
        let done = document.createElement('button');


        //MAKES THE CONTENT OF THE PARAGRAPH BE THE TRIMMED INPUT VALUE
        taskText.textContent = taskValue;

        //DEFINES THE TEXT OF THE BUTTONS
        remove.textContent = 'Remove';
        done.textContent = 'Done';

        //APPENDS ALL CREATED ELEMENTS TO THE DIV
        task.appendChild(taskText);
        task.appendChild(done);
        task.appendChild(remove);

        //APPENDS THE DIV ITSELF TO THE HTML TASK AREA
        tasks.appendChild(task);

        //CLEARS THE INPUT AFTER TASK IS ADDED
        input.value = '';

        //FUNCTION WILL EXECUTE WHEN DONE BUTTON IS CLICKED
        done.addEventListener('click', function () {
            //WHEN THE DONE BUTTON IS CLICKED, IT WILL CHANGE THE DECORATION OF THE TASK TEXT
            if (taskText.style.textDecoration === '') {
                taskText.style.textDecoration = 'line-through';
                done.textContent = 'Reset'
            }
            else {
                taskText.style.textDecoration = '';
                done.textContent = 'Done'
            }
        })

        //FUNCTION WILL EXECUTE WHEN REMOVE BUTTON IS CLICKED
        remove.addEventListener('click', function () {
            //REMOVES THE TASK FROM THE SCREEN
            task.remove();
        })
    }
});