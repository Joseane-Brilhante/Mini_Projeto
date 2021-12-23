let map;
let center;
let marker;

function initMap() {

  center = new google.maps.LatLng(-6.888418503754699, -38.558301372377265);

  map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 14,
    fullscreenControl: false,
    mapTypeId: 'roadmap'
  });

  map.addListener("click", (evt) => {
    adicionarMarcador(evt);
    //console.log(evt.latLng.lat())
  });


}

function getLatLng(data) {
  let coordenadas = data.replace("POINT(", "").replace(")", "").split(" ")
  console.log(coordenadas)
  let latlng = [parseFloat(coordenadas[0]), parseFloat(coordenadas[1])]
  return latlng
}

function viewPoints() {
  $.getJSON("http://localhost:3000/getLatLngs", (date) => {
    //console.log(date[0]["pontos"])
    let latlng
    for (point in date) {
      latlng = getLatLng(date[point]["pontos"])
      new google.maps.Marker({
        position: new google.maps.LatLng(latlng[0], latlng[1]),
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP
      });
    }
    //console.log(coordenadas[0])

  })
}

function adicionarMarcador(evt) {
  let latlng = evt.latLng.lat().toString() + ", " + evt.latLng.lng().toString()

  $.get(`http://localhost:3000/savePoint/${latlng}`);

  new google.maps.Marker({
    position: evt.latLng,
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP
  });
}