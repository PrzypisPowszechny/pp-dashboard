export function getData() {
  fetch('http://localhost:8000/api/annotations')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  console.log(myJson.data);
  return myJson.data;
});
}
