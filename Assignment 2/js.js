





var h1 = document.querySelector('h1')
h1.style.color = '#000'
// var table = document.getElementById('t-table')
// //table.style.backgroundColor = 'green'
// table.style.color = '#000'

//document.getElementById("mmm").style.color ="red"






// table.addEventListener('mousemove',move)
// function move(e) {
//     h1.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",60)"
//     h1.style.color = "rgb("+e.offsetX+","+e.offsetY+",10)"
    

// table.addEventListener('mouseout',out)
// function out(e) {
//     h1.style.backgroundColor = '#000'
//     h1.style.color = 'white'
// }


h1.addEventListener('mousemove',move)
function move(e) {
    h1.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)"
    h1.style.color = 'coral'
}

h1.addEventListener('mouseout',out1)
function out1(e) {
    h1.style.backgroundColor = 'rgb(167, 29, 148)'
    h1.style.color = 'coral'
}








var enter = document.getElementById('enter')
var itemList = document.getElementById('listgroup')



enter.addEventListener('click',addItem)

itemList.addEventListener('click',remove)

function addItem(e) {
    e.preventDefault();
    
    

    var add = document.getElementById('add').value

    var li = document.createElement('li')
    li.className = 'listgroup';
    
    li.appendChild(document.createTextNode(add));

    var delet = document.createElement('button')

    delet.className = "btn btn-danger btn-sm float-right delete";

    delet.appendChild(document.createTextNode('X'))

    li.appendChild(delet)

   itemList.appendChild(li)

}

function remove(e) {
    if (e.target.classList.contains('delete')) {
        console.log(1)
    }

    
}





