let urlApi = 'https://www.feriadosapp.com/api/holidays.json'
fetch(urlApi)
    .then(response => response.json())
    .then(data => mostrarData(data.data))
    .catch (error => console.log(error))


const mostrarData = (data) => {
  console.log(data)
  let body =''
  for(let i = 0; i<data.length; i++){
    body +=`<div class= "container shadow-lg bg-body rounded">
    <table class="table table-bordered table-striped">
    <thead>
    <td>${data[i].title}</td> 
    <td>${data[i].date}</td>
    <td>${data[i].extra}</td>
    </thead>
    </table>
    </div>
    `
  }
document.getElementById('data').innerHTML= body;
};

