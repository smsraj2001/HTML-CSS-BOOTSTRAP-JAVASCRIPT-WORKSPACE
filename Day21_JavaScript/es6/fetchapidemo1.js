fetch("http://fakestoreapi.com/products/30")
  .then((res) => (res.json()))
  .then((json) => console.log(json))
  .catch((error) => console.log(error));

//   fetch('http://jsonplaceholder.typicode.com/todos/')
//   .then((res) => (res.json()))
//   .then((json) => console.log(json));
