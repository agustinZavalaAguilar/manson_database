

var map = L.map('map').setView([46.603354, 1.888334], 5.5); // Centered on France, zoom level 6

console.log(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// fetch('https://data.enedis.fr/api/explore/v2.1/catalog/datasets/autoconsommation-collective-maille-region/records?limit=20')
//         .then(response => {return response.json()})
//         .then((data)=>{
//             console.log(data);
//             let fill1 = document.getElementById('para1');
//             fill1.innerHTML=data.value;
//         })




//add a marker
var marker1 = L.marker([46.933386, 2.438965]).addTo(map);
let marker2 = L.marker([43.702430642, 2.144000638]).addTo(map);

//add a circle
// var circle = L.circle([46.933386, 2.438965], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);

// add a polygon 
// var polygon = L.polygon([
//     [48.178348791, -2.840562055],
//     [48.178348791, -3.840562055],
//     [47.178348791, -2.840562055]
// ]).addTo(map);


// add popups
marker1.bindPopup("<b>Hello master!</b>").openPopup();
marker2.bindPopup("<b>My master is sexy!</b>").openPopup();
//circle.bindPopup("I am a circle.");
//polygon.bindPopup("I am a polygon.");

// //alone pops
// var popup = L.popup()
//     .setLatLng([51.513, -0.09])
//     .setContent("I am a standalone popup.")
//     .openOn(map);

// events 
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}
    
map.on('click', onMapClick);


//
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);


