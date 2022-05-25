document.querySelector('form').addEventListener('submit', formSubmit);
document.querySelector('ul').addEventListener('click', ulClick);


function formSubmit(e){
    e.preventDefault();
    let input = document.querySelector('input')
    if(input.value!='')
    {
        addToList(input.value);
    }
};

function addToList(item){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `
    <span class="todo-item">${item}</span>
    <button name="checkbutton"><i class="fas fa-check-square"></i></button>
    <button name="deletebutton"><i class="fa-solid fa-trash"></i></button>
    `;

    ul.classList.add('odo-list-item');
    ul.appendChild(li);
    document.querySelector('input').value = ''

}

function ulClick(e){
    if(e.target.name=='checkbutton'){
        let item = e.target.parentNode;
        if(item.style.textDecoration =='line-through')
        {
            item.style.textDecoration =='none';
        }
        else{
            item.style.textDecoration = 'line-through';
        }
    }

    if(e.target.name=='deletebutton'){
        let item = e.target.parentNode;

        item.addEventListener('transitionend', function() {
            item.remove();
        });


        item.classList.add('todo-list-item-fall');
    }
}