    let clickButton = document.getElementById('button');
    let getId = document.getElementById('list');
    let addTask = document.getElementById('AddTask');
    let listArray = new Array();
    let completedList = document.getElementById('Completed');
    clickButton.addEventListener('click', () => {
        if (addTask.value != '') {
            listArray.push(addTask.value);
            getId.innerHTML += '<li id="' + (listArray.length - 1) + '"><button onclick="doneList(' + (listArray.length - 1) + ')">' + addTask.value + '</button></li>';
            addTask.value = '';
        }
    })
    function doneList(id) {
        completedList.innerHTML += '<li>' + listArray[id] + '</li>';
        document.getElementById(id).style.display = "none";

    }
