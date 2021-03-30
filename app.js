console.log("hello");
navigator.geolocation.getCurrentPosition((position) => {
  document.querySelector("#root").innerText = position.coords.latitude +" "+ position.coords.longitude
  console.log(position);
});
