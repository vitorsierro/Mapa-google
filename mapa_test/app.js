// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">
let map, heatmap, maxZoomService, infoWindow;

function initMap() {
  const locationBrasil = { lat: -23.94, lng: -46.33 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: locationBrasil,
    disableDefaultUI: true,
    mapTypeId: "terrain",
   
  });
  const iconBase =  "./img/";
  function texto(city, qualidadeAr){
    var cor; 
  if (qualidadeAr == "BOM" || qualidadeAr =="Bom"){
      cor = " color: green" 
    }else if( qualidadeAr == "Moderado" || qualidadeAr == "MODERADO"){
    cor = " color: orange"
    }else{
    cor = " color: red"
  };
    return  '<div id="content">' +
  '<div id="siteNotice">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading">' + city + '</h1>' +
  '<hr>' +
  '<div id="bodyContent">' +
  '<p style="font-size:15px"> Qualidade do Ar <hr> ' + 
  '<h2><b><center  style="' + cor +'"; font-size: 31px!important;">' + qualidadeAr + '</center></b></h2> </p>' +
  "</div>" + 
  "</div>"
 }; 
const mkr = new google.maps.Marker({
    position: new google.maps.LatLng(-23.9491, -46.3534),
     map,
    title: "Santos",
    type: iconBase
});
const santos = new google.maps.InfoWindow({
  content: texto("Santos",'BOM'),
});

mkr.addListener("click", (e) => {
  santos.open(map, mkr);  });

const mkr2 = new google.maps.Marker({
  position: new google.maps.LatLng(-23.55, -46.63),
    map,
  title: "São Paulo",
  type: iconBase
});
const saoPaulo = new google.maps.InfoWindow({
  content: texto("São Paulo",'BOM'),
});

mkr2.addListener("click", (e) => {
  saoPaulo.open(map, mkr2);  });

const mkr3 = new google.maps.Marker({
  position: new google.maps.LatLng(-22.89, -47.06),
    map,
  title: "Campinas",
  type: iconBase
});
const campinas = new google.maps.InfoWindow({
  content: texto("Campinas",'BOM'),
  });
mkr3.addListener("click", (e) => {
    campinas.open(map, mkr3);  });
const mkr4 = new google.maps.Marker({
  position: new google.maps.LatLng(-23.88, -46.42),
  map,
  title: "Cubatão",
  type: iconBase
});
const cubatao = new google.maps.InfoWindow({
  content: texto("Cubatão",'BOM'),
});
mkr4.addListener("click", (e) => {
  cubatao.open(map, mkr4);  });
  
const mkr5 = new google.maps.Marker({
    position: new google.maps.LatLng(-34.60, -58.37),
    map,
   title: "Buenos Aires",
  });
const buenosAires = new google.maps.InfoWindow({
    content: texto("Buenos Aires",'BOM'),
  });
mkr5.addListener("click", (e) => {
  buenosAires.open(map, mkr5);  });  

const mkr6 = new google.maps.Marker({
  position: new google.maps.LatLng(-20.30, -40.28),
  map,
  title: "Vitoria",
});
const vitoria = new google.maps.InfoWindow({
    content: texto("Vitoria",'BOM'),
  });
mkr6.addListener("click", (e) => {
  vitoria.open(map, mkr6);  });  

const mkr7 = new google.maps.Marker({
  position: new google.maps.LatLng(-33.44, -70.65),
   map,
  title: "Santiago",
  type: iconBase
});
const santiago = new google.maps.InfoWindow({
  content: texto("Santiago",'BOM'),
});
mkr7.addListener("click", (e) => {
  santiago.open(map, mkr7);  });

//outros regios de sp

const mkr8 = new google.maps.Marker({
  position: new google.maps.LatLng(-23.02, -45.56),
  map,
  title: "Taubaté",
  type: iconBase
});
const taubate = new google.maps.InfoWindow({
  content: texto("Taubaté",'RUIM'),
});

mkr8.addListener("click", (e) => {
  taubate.open(map, mkr8);  });

const mkr9 = new google.maps.Marker({
  position: new google.maps.LatLng(-21.15, -47.79),
    map,
  title: "Ribeirão Preto",
  type: iconBase
});
const ribeiraoPreto = new google.maps.InfoWindow({
  content: texto("Ribeirão Preto",'MODERADO'),
});

mkr9.addListener("click", (e) => {
  ribeiraoPreto.open(map, mkr9);  });

const mkr10 = new google.maps.Marker({
  position: new google.maps.LatLng(-22.57, -47.40),
    map,
  title: "Limeira",
  type: iconBase
});
const limeira = new google.maps.InfoWindow({
  content: texto("Limeira",'MODERADO'),
});
mkr10.addListener("click", (e) => {
    limeira.open(map, mkr10);  });
const mkr11 = new google.maps.Marker({
  position: new google.maps.LatLng(-22.32, -49.07),
  map,
  title: "Bauru",
  type: iconBase
});
const bauru = new google.maps.InfoWindow({
  content: texto("Bauru",'BOM'),
});
mkr11.addListener("click", (e) => {
  bauru.open(map, mkr11);  });
  
const mkr12 = new google.maps.Marker({
  position: new google.maps.LatLng(-22.12, -51.39),
  map,
  title: "Presidente Prudente",
  });
const presidentePrudente = new google.maps.InfoWindow({
    content: texto("Presidente Prudente",'BOM'),
  });
mkr12.addListener("click", (e) => {
  presidentePrudente.open(map, mkr12);  });  

const mkr13 = new google.maps.Marker({
  position: new google.maps.LatLng(-22.22, -49.94),
  map,
  title: "Marília",
});
const marilia = new google.maps.InfoWindow({
    content: texto("Marília",'BOM'),
  });
mkr13.addListener("click", (e) => {
  marilia.open(map, mkr13);  });  

const mkr14 = new google.maps.Marker({
  position: new google.maps.LatLng(-23.34, -47.84),
   map,
  title: "Tatuí",
  type: iconBase
});
const tatui = new google.maps.InfoWindow({
  content: texto("Tatuí",'BOM'),
});
mkr14.addListener("click", (e) => {
  tatui.open(map, mkr14);  });

};


