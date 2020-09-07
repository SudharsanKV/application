var ul= document.getElementById('list');
var li;

var addbutton = document.getElementById('add');
addbutton.addEventListener('click', addItem);
var removebutton = document.getElementById('remove');
removebutton.addEventListener('click', removeItem);

function addItem(){
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item)
    if(item === ''){
        var para = document.getElementById('div')
        para.textContent='Enter todo'
        document.querySelector('div').appendChild(para)
        //document.querySelector('div').appendChild(para);
        setTimeout(() => {
            para.className='visual'
        }, 500);
        
    }else{
        //create li
        li = document.createElement('li');
        // create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');
        // create label
        var label = document.createElement('label');
        label.setAttribute('for', 'item')
        // add these element in page
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);

        setTimeout(()=>{
            li.className = 'visual';
        },2);

        // cleans the text box
        input.value='';
    }
}
function removeItem(){
    li=ul.children
    for (let index = 0; index < li.length; index++) {
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index]);
        }
        
    }
}