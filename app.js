document.querySelector('form').addEventListener('submit', formSubmit);


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