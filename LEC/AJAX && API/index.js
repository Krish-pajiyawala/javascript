
document.querySelector('button').addEventListener('click' , () => {
    let xhr = new XMLHttpRequest();

    xhr.open();

    xhr.onload = function(){
        console.log((this.responseText))
        let data = JSON.parse(this.responseText);
        console.log(data);
        data.forEach(todo => {
        let li = document.createElement('li');
        li.innerhtml = todo.title
        document.querySelector('div').append(li);
        });

    }
})
 xhr.send()