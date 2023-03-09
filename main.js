
//Imprimir por consola la lista de usuarios.


axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });


//Imprimir por consola solo el nombre de los usuarios.

axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    const users = response.data;

      users.forEach(user => {
      console.log(user.name);
    });
  })
  .catch(error => {
    console.log(error);
  });


//Crea una variable global users y cuando hagas la petición axios rellénala con la respuesta de la api (todo esto fuera de una función)
let users =[]


axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    users = response.data;
  })
  .catch(error => {
    console.log(error);
  });
  

//Crea una función que muestre por consola la variable global que habías creado.

function showUsers(){
    console.log(users)
}
showUsers()


//Crea un botón que cuando lo cliques ejecute la función que habías creado

//(YA ESTA HECHO EN HTML)


//Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM ( en el HTML)
const btnEjecutar = document.getElementById("btn-ejecutar");
const nombresDiv = document.querySelector(".nombres");

btnEjecutar.addEventListener("click", function () {
    mostrarNombresUser();
});

function mostrarNombresUser() {
    nombresDiv.innerHTML = globalUsers.map((user) => `<div class="card m-1 " style="width: 18rem; ">
    <img src="" class="card-img-top" alt="...">
    <div class="card-body">
      <p id="nombre"> ${user.name}}</p>
    </div>
    </div>`
    )
  
  }


