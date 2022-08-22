let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let btnDelete = document.querySelector('.btn_delete');
let result = document.querySelector('.result');

btn.addEventListener('click', function () {
   if(input.value === '') return;
    createDelEl(input.value);
    input.value = '';
})
function createDelEl(value) {

     const li = document.createElement('li');
     const btn = document.createElement('button');
     li.className = 'li';
     li.textContent = value;
     result.appendChild(li);

     btn.className = 'btn';
     btn.textContent = 'X';
     li.appendChild(btn)

    btn.addEventListener('click', function () {
        result.removeChild(li);
    })
}
btnDelete.addEventListener('click', function () {
    result.innerHTML = '';
})
