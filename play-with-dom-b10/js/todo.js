document.getElementById("task-btn").addEventListener("click", function () {
  const inputValue = document.getElementById("input-value").value;

    const container = document.getElementById("content-container");
    const li = document.createElement("li");
    li.innerText = inputValue;
    container.appendChild(li);
    document.getElementById("input-value").value = '';

//   const container = document.getElementsByClassName("th-123");
//   const li = document.createElement('li');
//   li.innerText = inputValue;
//   container.appendChild(li)

document.getElementById('clear-btn').addEventListener('click',function(){
    container.innerText = '' ;
})

});
